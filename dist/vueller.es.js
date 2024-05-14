import { defineComponent, openBlock, createElementBlock, normalizeClass, renderSlot, createTextVNode, toDisplayString, createCommentVNode, createElementVNode, createBlock, computed, Teleport, watch, onMounted } from "vue";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
const Badge = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-d36a0556"]]);
const _hoisted_1$1 = ["disabled"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
      ], 8, _hoisted_1$1);
    };
  }
});
const Button = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b977db5a"]]);
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
  Modal,
  _sfc_main$1 as Portal
};
//# sourceMappingURL=vueller.es.js.map
