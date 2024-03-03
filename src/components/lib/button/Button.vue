<script setup lang="ts">
  import {IButtonProps} from "./Button";

  const props = withDefaults(defineProps<IButtonProps>(), {
    label: '',
    success: false,
    info: false,
    warning: false,
    danger: false,
    raised: false,
    rounded: false,
    outlined: false,
    disabled: false
  })
</script>

<template>
  <button v-ripple :class="cx('root')" type="button" :aria-label="defaultAriaLabel" :disabled="props.disabled" v-bind="getPTOptions('root')" :data-p-severity="severity">
    <slot>
      <slot v-if="loading" name="loadingicon" :class="[cx('loadingIcon'), cx('icon')]">
        <span v-if="loadingIcon" :class="[cx('loadingIcon'), cx('icon'), loadingIcon]" v-bind="ptm('loadingIcon')" />
        <SpinnerIcon v-else :class="[cx('loadingIcon'), cx('icon')]" spin v-bind="ptm('loadingIcon')" />
      </slot>
      <slot v-else name="icon" :class="[cx('icon')]">
        <span v-if="icon" :class="[cx('icon'), icon, iconClass]" v-bind="ptm('icon')"></span>
      </slot>
      <span :class="cx('label')" v-bind="ptm('label')">{{ label || '&nbsp;' }}</span>
      <Badge v-if="badge" :value="badge" :class="badgeClass" :severity="badgeSeverity" :unstyled="unstyled" v-bind="ptm('badge')"></Badge>
    </slot>
  </button>
</template>
