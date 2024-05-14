<script setup lang="ts">
  import {IButtonProps} from "./Button";
  import Badge from "../badge/Badge.vue";

  const props = defineProps<IButtonProps>();
</script>

<template>
  <button type="button" :disabled="props.disabled">
    <slot>
      <slot name="icon">
        <i v-if="props.icon" :class="[props.icon, {'right': props.iconRight}]" />
      </slot>
      <span>{{ props.label || '&nbsp;' }}</span>
      <Badge v-if="props.badge" :value="props.badge" />
    </slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  display: inline-flex;
}

.right {
  order: 1;
}
</style>
