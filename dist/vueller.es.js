!function(){"use strict";try{if("undefined"!=typeof document){var a=document.createElement("style");a.appendChild(document.createTextNode('.badge[data-v-d36a0556]{padding:5px;border-radius:5px;background-color:#f6f6f6;color:#414141}.badge.bg-info[data-v-d36a0556]{background-color:#77daf6;color:#024f64}.badge.bg-danger[data-v-d36a0556]{background-color:#f67777;color:#640202}.badge.bg-success[data-v-d36a0556]{background-color:#77f6a3;color:#02640f}button[data-v-b977db5a]{display:inline-flex}.right[data-v-b977db5a]{order:1}.calendar[data-v-2a8f89bd]{font-family:Arial,sans-serif;border:1px solid #ccc;width:300px;border-radius:5px;background-color:#fff;color:#0a1f26}.calendar .header[data-v-2a8f89bd]{display:flex;align-items:center;justify-content:space-between;padding:10px}.calendar .header .date-selector[data-v-2a8f89bd]{display:flex;align-items:center}.calendar .header .date-changer[data-v-2a8f89bd]{display:flex}.calendar .header .date-changer button[data-v-2a8f89bd]{border:none;background:none;font-size:16px;cursor:pointer}.calendar .header .date-changer .arrow-up[data-v-2a8f89bd],.calendar .header .date-changer .arrow-down[data-v-2a8f89bd]{transform:rotate(90deg);color:#0a1f26}.calendar .content[data-v-2a8f89bd]{-webkit-user-select:none;-ms-user-select:none;user-select:none}.calendar .content .weekdays[data-v-2a8f89bd]{display:grid;grid-template-columns:repeat(7,1fr);gap:5px;padding:10px}.calendar .content .weekdays .weekday[data-v-2a8f89bd]{text-align:center}.calendar .content .days[data-v-2a8f89bd]{display:grid;grid-template-columns:repeat(7,1fr);gap:5px;padding:10px}.calendar .content .days .day[data-v-2a8f89bd]{text-align:center;padding:5px;border:1px solid #ccc;border-radius:5px;cursor:pointer}.calendar .content .days .day[data-v-2a8f89bd]:hover:not(.selected-day){background-color:#f0f0f0;cursor:pointer}.calendar .content .days .day.prev-month[data-v-2a8f89bd],.calendar .content .days .day.next-month[data-v-2a8f89bd],.calendar .content .days .day.past-day[data-v-2a8f89bd]{color:gray!important}.calendar .content .days .day.current-day[data-v-2a8f89bd]{background-color:#a5dbee;color:#015579!important}.calendar .content .days .day.holiday[data-v-2a8f89bd]{background-color:#fcc;color:#520000!important}.calendar .content .days .day.selected-day[data-v-2a8f89bd]{background-color:#8fffbd;color:#0d863a!important}.calendar .content .days .day.selected-day[data-v-2a8f89bd]:hover{cursor:default}.calendar .footer .legends[data-v-2a8f89bd]{list-style-type:unset;padding:0 5px}.calendar .footer .legends>.legend[data-v-2a8f89bd]{display:block;position:relative;margin-left:20px;font-size:.89rem;color:#333}.calendar .footer .legends>.legend[data-v-2a8f89bd]:before{position:absolute;display:block;content:"";top:50%;left:-15px;width:10px;height:10px;border-radius:50%;background-color:#333;transform:translateY(-50%)}.calendar .footer .legends>.legend.holiday[data-v-2a8f89bd]:before{background-color:#fcc}.calendar .footer .legends>.legend.current-day[data-v-2a8f89bd]:before{background-color:#a5dbee}.calendar .footer .legends>.legend.selected-day[data-v-2a8f89bd]:before{background-color:#8fffbd}.modal[data-v-378b6f30]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:flex;background-color:#000c;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);overflow:hidden;outline:0}@media (max-width: 600px){.modal[data-v-378b6f30]{padding:10px}}.modal.show[data-v-378b6f30]{display:block;overflow:auto}.modal.fade[data-v-378b6f30]{opacity:0;transition:opacity .15s linear}.modal.fade.show[data-v-378b6f30]{opacity:1}.modal .modal-dialog[data-v-378b6f30]{position:relative;width:auto;margin:1.75rem auto;border-radius:1vh;pointer-events:none;-webkit-transform:translate(0,0);transform:translate(0)}@media (min-width: 600px){.modal .modal-dialog[data-v-378b6f30]{max-width:600px;margin:1.75rem auto}.modal .modal-dialog.large[data-v-378b6f30]{width:100%}}.modal .modal-dialog.modal-dialog-centered[data-v-378b6f30]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:calc(100% - 1rem)}@media (min-width: 600px){.modal .modal-dialog.modal-dialog-centered[data-v-378b6f30]{min-height:calc(100% - 3.5rem)}}.modal .modal-dialog .modal-content[data-v-378b6f30]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:1vh;outline:0}.modal .modal-dialog .modal-content .modal-header[data-v-378b6f30]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:1rem;border-bottom:1px solid #e9ecef;border-top-left-radius:.3rem;border-top-right-radius:.3rem}.modal .modal-dialog .modal-content .modal-body[data-v-378b6f30]{position:relative;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding:1rem}.modal .modal-dialog .modal-content .modal-footer[data-v-378b6f30]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding:1rem;border-top:1px solid #e9ecef}')),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}}();
import { defineComponent, openBlock, createElementBlock, normalizeClass, renderSlot, createTextVNode, toDisplayString, createCommentVNode, createElementVNode, createBlock, ref, watch, computed, withDirectives, Fragment, renderList, vModelSelect, vModelText, createStaticVNode, Teleport, onMounted } from "vue";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  props: {
    value: {},
    success: { type: Boolean },
    info: { type: Boolean },
    warning: { type: Boolean },
    danger: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(["badge", {
          "bg-info": props.info,
          "bg-success": props.success,
          "bg-warning": props.warning,
          "bg-danger": props.danger
        }])
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(props.value), 1)
        ], true)
      ], 2);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const Badge = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-d36a0556"]]);
const _hoisted_1$2 = ["disabled"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  props: {
    label: {},
    icon: {},
    iconRight: { type: Boolean },
    badge: {},
    success: { type: Boolean },
    info: { type: Boolean },
    warning: { type: Boolean },
    danger: { type: Boolean },
    raised: { type: Boolean },
    rounded: { type: Boolean },
    outlined: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        disabled: props.disabled
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          renderSlot(_ctx.$slots, "icon", {}, () => [
            props.icon ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: normalizeClass([props.icon, { "right": props.iconRight }])
            }, null, 2)) : createCommentVNode("", true)
          ], true),
          createElementVNode("span", null, toDisplayString(props.label || " "), 1),
          props.badge ? (openBlock(), createBlock(Badge, {
            key: 0,
            value: props.badge
          }, null, 8, ["value"])) : createCommentVNode("", true)
        ], true)
      ], 8, _hoisted_1$2);
    };
  }
});
const Button = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-b977db5a"]]);
const _hoisted_1$1 = { class: "calendar" };
const _hoisted_2$1 = { class: "header" };
const _hoisted_3$1 = { class: "date-selector" };
const _hoisted_4$1 = { class: "date" };
const _hoisted_5$1 = { key: 0 };
const _hoisted_6 = ["value"];
const _hoisted_7 = { key: 1 };
const _hoisted_8 = { class: "content" };
const _hoisted_9 = { class: "weekdays" };
const _hoisted_10 = { class: "days" };
const _hoisted_11 = ["onClick"];
const _hoisted_12 = ["onClick"];
const _hoisted_13 = ["onClick"];
const _hoisted_14 = /* @__PURE__ */ createStaticVNode('<div class="footer" data-v-2a8f89bd><ul class="legends" data-v-2a8f89bd><li class="legend holiday" data-v-2a8f89bd>Feriado</li><li class="legend current-day" data-v-2a8f89bd>Dia Atual</li><li class="legend selected-day" data-v-2a8f89bd>Dia Selecionado</li></ul></div>', 1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Calendar",
  props: {
    modelValue: {},
    holidays: {}
  },
  emits: ["onSelect"],
  setup(__props, { emit: __emit }) {
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const editingYear = ref(false);
    const editingMonth = ref(false);
    const currentDate = ref(/* @__PURE__ */ new Date());
    const selectedDay = ref(null);
    const selectedYear = ref(currentDate.value.getFullYear());
    const selectedMonth = ref(currentDate.value.getMonth() + 1);
    const props = __props;
    const emit = __emit;
    watch(() => props.modelValue, (newVal) => {
      if (!newVal)
        return false;
      if (typeof newVal === "number")
        newVal = newVal * 1e3;
      const date = new Date(newVal);
      if (date) {
        selectedYear.value = date.getFullYear();
        selectedMonth.value = date.getMonth() + 1;
        selectedDay.value = date;
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
      const days = [];
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
      const days = [];
      let totalDays = daysInMonth.value.length + previousMonthDays.value.length;
      const remainingDays = 7 - totalDays % 7;
      let daysToAdd = remainingDays;
      totalDays += remainingDays;
      if (totalDays !== 42)
        daysToAdd += 42 - totalDays;
      for (let i = 1; i <= daysToAdd; i++)
        days.push(i);
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
    const isCurrentDay = (day) => {
      const today = /* @__PURE__ */ new Date();
      return day === today.getDate() && selectedMonth.value === today.getMonth() + 1 && selectedYear.value === today.getFullYear();
    };
    const isSameDay = (date1, date2) => {
      return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
    };
    const isPastDay = (day) => {
      const today = /* @__PURE__ */ new Date();
      const currentDateValue = new Date(selectedYear.value, selectedMonth.value - 1, day);
      return currentDateValue < today && !isSameDay(currentDateValue, today);
    };
    const isHoliday = (day) => {
      if (!props.holidays)
        return false;
      const formattedDate = `${selectedYear.value}-${selectedMonth.value.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
      return props.holidays.includes(formattedDate);
    };
    const isSelectedDay = (day, monthOffset = 0) => {
      if (!selectedDay.value)
        return false;
      const adjustedMonth = new Date(selectedYear.value, selectedMonth.value - 1 + monthOffset, day).getMonth() + 1;
      return day === selectedDay.value.getDate() && adjustedMonth === selectedDay.value.getMonth() + 1 && selectedYear.value === selectedDay.value.getFullYear();
    };
    const handleDayClick = (day, monthOffset = 0) => {
      const clickedDate = new Date(selectedYear.value, selectedMonth.value - 1 + monthOffset, day);
      selectedDay.value = clickedDate;
      emit("onSelect", clickedDate);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("div", _hoisted_2$1, [
          createElementVNode("div", _hoisted_3$1, [
            createElementVNode("div", _hoisted_4$1, [
              createElementVNode("span", {
                onClick: _cache[0] || (_cache[0] = ($event) => editingMonth.value = true)
              }, toDisplayString(monthName.value), 1),
              createTextVNode(" de "),
              createElementVNode("span", {
                onClick: _cache[1] || (_cache[1] = ($event) => editingYear.value = true)
              }, toDisplayString(year.value), 1)
            ]),
            editingMonth.value ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
              withDirectives(createElementVNode("select", {
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedMonth.value = $event),
                onBlur: _cache[3] || (_cache[3] = ($event) => editingMonth.value = false)
              }, [
                (openBlock(), createElementBlock(Fragment, null, renderList(months, (month, index) => {
                  return createElementVNode("option", {
                    key: index,
                    value: index + 1
                  }, toDisplayString(month), 9, _hoisted_6);
                }), 64))
              ], 544), [
                [vModelSelect, selectedMonth.value]
              ])
            ])) : editingYear.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
              withDirectives(createElementVNode("input", {
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => selectedYear.value = $event),
                type: "number",
                min: "1970",
                onBlur: _cache[5] || (_cache[5] = ($event) => editingYear.value = false)
              }, null, 544), [
                [
                  vModelText,
                  selectedYear.value,
                  void 0,
                  { number: true }
                ]
              ])
            ])) : createCommentVNode("", true)
          ]),
          createElementVNode("div", { class: "date-changer" }, [
            createElementVNode("button", {
              class: "arrow-up",
              onClick: previousMonth
            }, "<"),
            createElementVNode("button", {
              class: "arrow-down",
              onClick: nextMonth
            }, ">")
          ])
        ]),
        createElementVNode("div", _hoisted_8, [
          createElementVNode("div", _hoisted_9, [
            (openBlock(), createElementBlock(Fragment, null, renderList(weekdays, (weekday, index) => {
              return createElementVNode("div", {
                key: index,
                class: "weekday"
              }, toDisplayString(weekday), 1);
            }), 64))
          ]),
          createElementVNode("div", _hoisted_10, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(previousMonthDays.value, (day) => {
              return openBlock(), createElementBlock("div", {
                key: "prev-" + day,
                class: normalizeClass(["day prev-month", { "selected-day": isSelectedDay(day, -1) }]),
                onClick: ($event) => {
                  handleDayClick(day, -1);
                  previousMonth();
                }
              }, toDisplayString(day), 11, _hoisted_11);
            }), 128)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(daysInMonth.value, (day, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: normalizeClass(["day", { "current-day": isCurrentDay(day), "past-day": isPastDay(day), "holiday": isHoliday(day), "selected-day": isSelectedDay(day, 0) }]),
                onClick: ($event) => handleDayClick(day, 0)
              }, toDisplayString(day), 11, _hoisted_12);
            }), 128)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(nextMonthDays.value, (day) => {
              return openBlock(), createElementBlock("div", {
                key: "next-" + day,
                class: normalizeClass(["day next-month", { "selected-day": isSelectedDay(day, 1) }]),
                onClick: ($event) => {
                  handleDayClick(day, 1);
                  nextMonth();
                }
              }, toDisplayString(day), 11, _hoisted_13);
            }), 128))
          ])
        ]),
        _hoisted_14
      ]);
    };
  }
});
const Calendar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2a8f89bd"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Portal",
  props: {
    appendTo: { default: "default" },
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const inline = computed(() => props.disabled || props.appendTo === "self");
    return (_ctx, _cache) => {
      return inline.value ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(Teleport, {
        key: 1,
        to: props.appendTo
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, ["to"]));
    };
  }
});
const _hoisted_1 = {
  class: "modal-dialog modal-dialog-centered large",
  role: "document"
};
const _hoisted_2 = { class: "modal-content" };
const _hoisted_3 = { class: "modal-header" };
const _hoisted_4 = { class: "modal-body" };
const _hoisted_5 = { class: "modal-footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Modal",
  props: {
    modelValue: {},
    size: {}
  },
  setup(__props) {
    const props = __props;
    watch(props, () => document.body.classList.remove("modal-open"));
    onMounted(() => document.body.classList.add("modal-open"));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        !!props.modelValue ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["modal fade", { show: !!props.modelValue }]),
          tabindex: "-1",
          "aria-modal": "true",
          role: "dialog"
        }, [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("div", _hoisted_2, [
              createElementVNode("div", _hoisted_3, [
                renderSlot(_ctx.$slots, "modal-header", {}, void 0, true)
              ]),
              createElementVNode("div", _hoisted_4, [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ]),
              createElementVNode("div", _hoisted_5, [
                renderSlot(_ctx.$slots, "modal-footer", {}, void 0, true)
              ])
            ])
          ])
        ], 2)) : createCommentVNode("", true)
      ]);
    };
  }
});
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-378b6f30"]]);
export {
  Badge,
  Button,
  Calendar,
  Modal,
  _sfc_main$1 as Portal
};
//# sourceMappingURL=vueller.es.js.map
