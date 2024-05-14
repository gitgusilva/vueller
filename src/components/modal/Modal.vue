<script setup lang='ts'>
  import { IModalProps } from '@/components/modal/Modal'
  import { onMounted, watch } from 'vue'

  // props
  const props = defineProps<IModalProps>();

  // remove body modal-open class
  watch(props, () => document.body.classList.remove('modal-open'));

  // add body modal-open class
  onMounted(() => document.body.classList.add('modal-open'));
</script>

<template>
  <teleport to="body">
    <div
      v-if="!!props.modelValue"
      :class="['modal fade', {show: !!props.modelValue}]"
      tabindex="-1"
      aria-modal="true"
      role="dialog"
    >
      <div
        class="modal-dialog modal-dialog-centered large"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <slot name="modal-header" />
          </div>

          <div class="modal-body">
            <slot />
          </div>

          <div class="modal-footer">
            <slot name="modal-footer" />
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style lang="scss" scoped>
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: flex;
    background-color: rgba(0,0,0,0.8);
    backdrop-filter: blur(15px);
    overflow: hidden;
    outline: 0;

    @media (max-width: 600px) {
      padding: 10px;
    }

    &.show {
      display: block;
      overflow: auto;
    }

    &.fade {
      opacity: 0;
      transition: opacity .15s linear;

      &.show {
        opacity: 1;
      }
    }

    .modal-dialog {
      position: relative;
      width: auto;
      margin: 1.75rem auto;
      border-radius: 1vh;
      pointer-events: none;
      -webkit-transform: translate(0, 0);
      transform: translate(0,0);

      @media (min-width: 600px) {
        max-width: 600px;
        margin: 1.75rem auto;

        &.large {
          width: 100%;
        }
      }

      &.modal-dialog-centered {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        min-height: calc(100% - (.5rem* 2));

        @media (min-width: 600px) {
          min-height: calc(100% - (1.75rem* 2));
        }
      }

      .modal-content {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 100%;
        pointer-events: auto;
        background-color: #FFFFFF;
        background-clip: padding-box;
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 1vh;
        outline: 0;

        .modal-header {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: start;
          -ms-flex-align: start;
          align-items: flex-start;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          padding: 1rem;
          border-bottom: 1px solid #e9ecef;
          border-top-left-radius: .3rem;
          border-top-right-radius: .3rem;
        }

        .modal-body {
          position: relative;
          -webkit-box-flex: 1;
          -ms-flex: 1 1 auto;
          flex: 1 1 auto;
          padding: 1rem;
        }

        .modal-footer {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: end;
          -ms-flex-pack: end;
          justify-content: flex-end;
          padding: 1rem;
          border-top: 1px solid #e9ecef;
        }
      }
    }
  }
</style>
