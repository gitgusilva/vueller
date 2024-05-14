<script setup lang="ts">
import {computed, ref, watch} from 'vue';
import {ICalendarProps} from "./Calendar";

const weekdays: string[] = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const months: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const editingYear = ref(false);
const editingMonth = ref(false);

const currentDate = ref(new Date());
const selectedDay = ref<Date | null>(null); // Initialize as null to avoid selecting today by default
const selectedYear = ref<number>(currentDate.value.getFullYear());
const selectedMonth = ref<number>(currentDate.value.getMonth() + 1);

const props = defineProps<ICalendarProps>();

const emit = defineEmits<{
  (e: 'onSelect', date: Date): void;
}>();

watch(() => props.modelValue, (newVal) => {
  if (!newVal) return false;
  if (typeof newVal === 'number') newVal = newVal * 1000;

  const date = new Date(newVal);
  if (date) {
    selectedYear.value = date.getFullYear();
    selectedMonth.value = date.getMonth() + 1;
    selectedDay.value = date;  // Update the selected day based on modelValue
  }
}, { immediate: true });

const monthName = computed(() => {
  return months[selectedMonth.value - 1];
});

const year = computed(() => {
  return selectedYear.value;
});

const daysInMonth = computed(() => {
  const days = new Date(selectedYear.value, selectedMonth.value, 0).getDate();
  return Array.from({ length: days }, (_, i) => i + 1);
});

const firstDayOfWeek = computed(() => {
  return new Date(selectedYear.value, selectedMonth.value - 1, 1).getDay();
});

const previousMonthDays = computed(() => {
  const days: number[] = [];
  const firstDayIndex = firstDayOfWeek.value;

  if (firstDayIndex > 0) {
    const prevMonthDays = new Date(selectedYear.value, selectedMonth.value - 1, 0).getDate();
    const daysNeeded = firstDayIndex === 0 ? 7 : firstDayIndex;
    for (let i = prevMonthDays - daysNeeded + 1; i <= prevMonthDays; i++) {
      days.push(i);
    }
  }

  return days;
});

const nextMonthDays = computed(() => {
  const days: number[] = [];
  let totalDays = daysInMonth.value.length + previousMonthDays.value.length;
  const remainingDays = 7 - (totalDays % 7);

  let daysToAdd = remainingDays;
  totalDays += remainingDays;

  if (totalDays !== 42) daysToAdd += 42 - totalDays;

  for (let i = 1; i <= daysToAdd; i++) days.push(i);

  return days;
});

const previousMonth = () => {
  if (selectedMonth.value === 1) {
    selectedMonth.value = 12;
    selectedYear.value--;
  } else {
    selectedMonth.value--;
  }
};

const nextMonth = () => {
  if (selectedMonth.value === 12) {
    selectedMonth.value = 1;
    selectedYear.value++;
  } else {
    selectedMonth.value++;
  }
};

const isCurrentDay = (day: number) => {
  const today = new Date();
  return (
      day === today.getDate() &&
      selectedMonth.value === today.getMonth() + 1 &&
      selectedYear.value === today.getFullYear()
  );
};

const isSameDay = (date1: Date, date2: Date) => {
  return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
  );
};

const isPastDay = (day: number) => {
  const today = new Date();
  const currentDateValue = new Date(selectedYear.value, selectedMonth.value - 1, day);
  return currentDateValue < today && !isSameDay(currentDateValue, today);
};

const isHoliday = (day: number) => {
  if (!props.holidays) return false;
  const formattedDate = `${selectedYear.value}-${selectedMonth.value.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  return props.holidays.includes(formattedDate);
};

const isSelectedDay = (day: number, monthOffset = 0) => {
  if (!selectedDay.value) return false;
  const adjustedMonth = new Date(selectedYear.value, selectedMonth.value - 1 + monthOffset, day).getMonth() + 1;
  return (
      day === selectedDay.value.getDate() &&
      adjustedMonth === selectedDay.value.getMonth() + 1 &&
      selectedYear.value === selectedDay.value.getFullYear()
  );
};

const handleDayClick = (day: number, monthOffset = 0) => {
  const clickedDate = new Date(selectedYear.value, selectedMonth.value - 1 + monthOffset, day);
  selectedDay.value = clickedDate;
  emit('onSelect', clickedDate);
};
</script>

<template>
  <div class="calendar">
    <div class="header">
      <div class="date-selector">
        <div class="date">
          <span @click="editingMonth = true">{{ monthName }}</span> de <span @click="editingYear = true">{{ year }}</span>
        </div>
        <div v-if="editingMonth">
          <select v-model="selectedMonth" @blur="editingMonth = false">
            <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
          </select>
        </div>
        <div v-else-if="editingYear">
          <input v-model.number="selectedYear" type="number" min="1970" @blur="editingYear = false">
        </div>
      </div>
      <div class="date-changer">
        <button class="arrow-up" @click="previousMonth">&lt;</button>
        <button class="arrow-down" @click="nextMonth">&gt;</button>
      </div>
    </div>
    <div class="content">
      <div class="weekdays">
        <div v-for="(weekday, index) in weekdays" :key="index" class="weekday">{{ weekday }}</div>
      </div>
      <div class="days">
        <div v-for="day in previousMonthDays" :key="'prev-' + day" :class="['day prev-month', { 'selected-day': isSelectedDay(day, -1) }]" @click="handleDayClick(day, -1); previousMonth();">
          {{ day }}
        </div>
        <div
            v-for="(day, index) in daysInMonth"
            :key="index"
            :class="['day', { 'current-day': isCurrentDay(day), 'past-day': isPastDay(day), 'holiday': isHoliday(day), 'selected-day': isSelectedDay(day, 0) }]"
            @click="handleDayClick(day, 0)"
        >
          {{ day }}
        </div>
        <div v-for="day in nextMonthDays" :key="'next-' + day" :class="['day next-month', { 'selected-day': isSelectedDay(day, 1) }]" @click="handleDayClick(day, 1); nextMonth();">
          {{ day }}
        </div>
      </div>
    </div>
    <div class="footer">
      <ul class="legends">
        <li class="legend holiday">Feriado</li>
        <li class="legend current-day">Dia Atual</li>
        <li class="legend selected-day">Dia Selecionado</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.calendar {
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  width: 300px;
  border-radius: 5px;
  background-color: white;
  color: #0a1f26;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    .date-selector {
      display: flex;
      align-items: center;
    }

    .date-changer {
      display: flex;

      button {
        border: none;
        background: none;
        font-size: 16px;
        cursor: pointer;
      }

      .arrow-up, .arrow-down {
        transform: rotate(90deg);
        color: #0a1f26;
      }
    }
  }

  .content {
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */

    .weekdays {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 5px;
      padding: 10px;

      .weekday {
        text-align: center;
      }
    }

    .days {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 5px;
      padding: 10px;

      .day {
        text-align: center;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
        cursor: pointer;

        &:hover:not(.selected-day) {
          background-color: #f0f0f0;
          cursor: pointer;
        }

        &.prev-month,
        &.next-month,
        &.past-day {
          color: gray !important;
        }

        &.current-day {
          background-color: #a5dbee;
          color: #015579 !important;
        }

        &.holiday {
          background-color: #ffcccc;
          color: #520000 !important;
        }

        &.selected-day {
          background-color: #8fffbd;
          color: #0d863a !important;

          &:hover {
            cursor: default;
          }
        }
      }
    }
  }

  .footer {
    .legends {
      list-style-type: unset;
      padding: 0 5px;

      > .legend {
        display: block;
        position: relative;
        margin-left: 20px;
        font-size: 0.890rem;
        color: #333333;

        &:before {
          position: absolute;
          display: block;
          content: '';
          top: 50%;
          left: -15px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #333333;
          transform: translateY(-50%);
        }

        &.holiday:before {
          background-color: #ffcccc;
        }

        &.current-day:before {
          background-color: #a5dbee;
        }

        &.selected-day:before {
          background-color: #8fffbd;
        }
      }
    }
  }
}
</style>
