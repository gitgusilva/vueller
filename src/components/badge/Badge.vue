<script setup lang="ts">
import {IBadgeProps} from "./Badge";
// import "./_BadgeStyle.scss";

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
