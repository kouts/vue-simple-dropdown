import { defineComponent, ref, onBeforeUnmount, openBlock, createBlock, unref, createSlots, renderList, withCtx, renderSlot, normalizeProps, guardReactiveProps } from "vue";
import { Dropdown } from "floating-vue";
const Props = {
  itemSelector: {
    type: String,
    default: "li > a:not(.disabled):not(:disabled)"
  },
  enableArrowNavigation: {
    type: Boolean,
    default: true
  }
};
const isVisible = (element) => {
  if (!(element instanceof Element)) {
    throw Error("You must provide a DOM element.");
  }
  return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length) && window.getComputedStyle(element).visibility !== "hidden" && window.getComputedStyle(element).display !== "none";
};
const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
  const listLength = list.length;
  let index = list.indexOf(activeElement);
  if (index === -1) {
    return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
  }
  index += shouldGetNext ? 1 : -1;
  if (isCycleAllowed) {
    index = (index + listLength) % listLength;
  }
  return list[Math.max(0, Math.min(index, listLength - 1))];
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SimpleDropdown",
  props: Props,
  setup(__props) {
    const props = __props;
    const ARROW_UP_KEY = "ArrowUp";
    const ARROW_DOWN_KEY = "ArrowDown";
    const ESCAPE_KEY = "Escape";
    const ENTER_KEY = "Enter";
    const SPACE_KEY = " ";
    const baseDropdownRef = ref(null);
    const popoverKeydown = (e) => {
      const popover = baseDropdownRef.value;
      if (!popover) {
        return;
      }
      if ([ARROW_UP_KEY, ARROW_DOWN_KEY].includes(e.key)) {
        e.preventDefault();
        let items = [...popover.$refs.popperContent.$el.querySelectorAll(`${props.itemSelector}`)];
        items = items.filter((element) => isVisible(element));
        if (!items.length) {
          return;
        }
        const target = e.target;
        getNextActiveElement(items, target, e.key === ARROW_DOWN_KEY, !items.includes(target)).focus();
      }
      if (e.key === ESCAPE_KEY) {
        popover.hide();
      }
      if ((e.key === ENTER_KEY || e.key === SPACE_KEY) && e.target === popover.$refs.popperContent.$el) {
        e.preventDefault();
        popover.hide();
      }
    };
    const show = () => {
      if (props.enableArrowNavigation) {
        document.addEventListener("keydown", popoverKeydown);
      }
    };
    const hide = () => {
      var _a, _b;
      document.removeEventListener("keydown", popoverKeydown);
      const popover = baseDropdownRef.value;
      (_b = (_a = popover == null ? void 0 : popover.$refs.popper.$_targetNodes) == null ? void 0 : _a[0]) == null ? void 0 : _b.focus();
    };
    onBeforeUnmount(() => {
      document.removeEventListener("keydown", popoverKeydown);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Dropdown), {
        ref_key: "baseDropdownRef",
        ref: baseDropdownRef,
        distance: 14,
        triggers: ["click"],
        theme: "simple-dropdown",
        placement: "bottom-start",
        "auto-hide": "",
        onShow: show,
        onHide: hide
      }, createSlots({ _: 2 }, [
        renderList(_ctx.$slots, (_, slot) => {
          return {
            name: slot,
            fn: withCtx((scope) => [
              renderSlot(_ctx.$slots, slot, normalizeProps(guardReactiveProps(scope || {})))
            ])
          };
        })
      ]), 1536);
    };
  }
});
const SimpleDropdown_vue_vue_type_style_index_0_lang = "";
export {
  _sfc_main as default
};
