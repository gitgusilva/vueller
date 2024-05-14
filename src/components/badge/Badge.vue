<script setup lang="ts">
  import {IBadgeProps} from "./Badge";

  const props = defineProps<IBadgeProps>()
</script>

<template>
  <span :class="['badge', {
            'bg-info': props.info,
            'bg-success': props.success,
            'bg-warning': props.warning,
            'bg-danger': props.danger
        }]">
    <slot>{{ props.value }}</slot>
  </span>
</template>

<style lang="scss" scoped>
.badge {
  padding: 5px;
  border-radius: 5px;
  background-color: #f6f6f6;
  color: #414141;

  &.bg-info {
    background-color: #77daf6;
    color: #024f64;
  }

  &.bg-danger {
    background-color: #f67777;
    color: #640202;
  }

  &.bg-success {
    background-color: #77f6a3;
    color: #02640f;
  }
}
</style>
