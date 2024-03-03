<script setup lang="ts">
import {computed} from "vue";
import {IPortalProps} from "./Portal";

const props = withDefaults(defineProps<IPortalProps>(), {
  appendTo: 'default',
  disabled: false
})

const inline = computed(() => props.disabled || props.appendTo === 'self')
</script>

<template>
  <slot v-if="inline" />
  <Teleport v-else :to="props.appendTo">
    <slot />
  </Teleport>
</template>
