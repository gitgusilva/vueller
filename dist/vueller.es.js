import { defineComponent, openBlock, createElementBlock, normalizeClass, renderSlot, createTextVNode, toDisplayString, createCommentVNode, createElementVNode, createBlock, computed, Teleport } from "vue";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
        ])
      ], 2);
    };
  }
});
const _hoisted_1 = ["disabled"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
          ]),
          createElementVNode("span", null, toDisplayString(props.label || " "), 1),
          props.badge ? (openBlock(), createBlock(_sfc_main$2, {
            key: 0,
            value: props.badge
          }, null, 8, ["value"])) : createCommentVNode("", true)
        ])
      ], 8, _hoisted_1);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
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
export {
  _sfc_main$2 as Badge,
  _sfc_main$1 as Button,
  _sfc_main as Portal
};
//# sourceMappingURL=vueller.es.js.map
