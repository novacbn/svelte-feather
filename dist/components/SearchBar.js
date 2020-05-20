/* src/components/SearchBar.svelte generated by Svelte v3.22.3 */
import { SvelteComponentDev, add_location, append_dev, attr_dev, binding_callbacks, create_component, destroy_component, detach_dev, dispatch_dev, element, init, insert_dev, listen_dev, mount_component, run_all, safe_not_equal, set_input_value, space, transition_in, transition_out, validate_slots } from "/dist/web_modules/svelte/internal.js";
import { IconSearch } from "/dist/web_modules/svelte-feather.js";
const file = "src/components/SearchBar.svelte";

function add_css() {
  var style = element("style");
  style.id = "svelte-ga2m0d-style";
  style.textContent = "p.svelte-ga2m0d{align-items:center}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoQmFyLnN2ZWx0ZSIsInNvdXJjZXMiOlsiU2VhcmNoQmFyLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGltcG9ydCB7SWNvblNlYXJjaH0gZnJvbSBcInN2ZWx0ZS1mZWF0aGVyXCI7XG5cbiAgICBleHBvcnQgbGV0IGNvdW50ID0gMDtcbiAgICBleHBvcnQgbGV0IHZhbHVlID0gXCJcIjtcblxuICAgIGxldCBpbnB1dF9lbGVtZW50O1xuXG4gICAgZnVuY3Rpb24gb25fa2V5X3ByZXNzKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiL1wiKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaW5wdXRfZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICBwIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmJvZHkgb246a2V5cHJlc3M9e29uX2tleV9wcmVzc30gLz5cblxuPCEtLVxuICAgIFRPRE86IE5lZWRzIGRlYm91bmNpbmcgZm9yIGlucHV0XG4tLT5cblxuPGFzaWRlPlxuICAgIDxwIGNsYXNzPVwiZ3JvdXBlZFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwic2VhcmNoLXRleHRcIj5cbiAgICAgICAgICAgIDxJY29uU2VhcmNoIC8+XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBiaW5kOnRoaXM9e2lucHV0X2VsZW1lbnR9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpZD1cInNlYXJjaC10ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHtjb3VudH0gaWNvbnMgKFByZXNzIC8gdG8gZm9jdXMpXCJcbiAgICAgICAgICAgIGJpbmQ6dmFsdWUgLz5cbiAgICA8L3A+XG48L2FzaWRlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCSSxDQUFDLGNBQUMsQ0FBQyxBQUNDLFdBQVcsQ0FBRSxNQUFNLEFBQ3ZCLENBQUMifQ== */";
  append_dev(document.head, style);
}

function create_fragment(ctx) {
  let t0;
  let aside;
  let p;
  let label;
  let t1;
  let input;
  let input_placeholder_value;
  let current;
  let dispose;
  const iconsearch = new IconSearch({
    $$inline: true
  });
  const block = {
    c: function create() {
      t0 = space();
      aside = element("aside");
      p = element("p");
      label = element("label");
      create_component(iconsearch.$$.fragment);
      t1 = space();
      input = element("input");
      attr_dev(label, "for", "search-text");
      add_location(label, file, 30, 8, 493);
      attr_dev(input, "type", "text");
      attr_dev(input, "id", "search-text");
      attr_dev(input, "placeholder", input_placeholder_value = "Search " +
      /*count*/
      ctx[1] + " icons (Press / to focus)");
      add_location(input, file, 34, 8, 572);
      attr_dev(p, "class", "grouped svelte-ga2m0d");
      add_location(p, file, 29, 4, 465);
      add_location(aside, file, 28, 0, 453);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor, remount) {
      insert_dev(target, t0, anchor);
      insert_dev(target, aside, anchor);
      append_dev(aside, p);
      append_dev(p, label);
      mount_component(iconsearch, label, null);
      append_dev(p, t1);
      append_dev(p, input);
      /*input_binding*/

      ctx[4](input);
      set_input_value(input,
      /*value*/
      ctx[0]);
      current = true;
      if (remount) run_all(dispose);
      dispose = [listen_dev(document.body, "keypress",
      /*on_key_press*/
      ctx[3], false, false, false), listen_dev(input, "input",
      /*input_input_handler*/
      ctx[5])];
    },
    p: function update(ctx, [dirty]) {
      if (!current || dirty &
      /*count*/
      2 && input_placeholder_value !== (input_placeholder_value = "Search " +
      /*count*/
      ctx[1] + " icons (Press / to focus)")) {
        attr_dev(input, "placeholder", input_placeholder_value);
      }

      if (dirty &
      /*value*/
      1 && input.value !==
      /*value*/
      ctx[0]) {
        set_input_value(input,
        /*value*/
        ctx[0]);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(iconsearch.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconsearch.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(aside);
      destroy_component(iconsearch);
      /*input_binding*/

      ctx[4](null);
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let {
    count = 0
  } = $$props;
  let {
    value = ""
  } = $$props;
  let input_element;

  function on_key_press(event) {
    if (event.key === "/") {
      event.preventDefault();
      input_element.focus();
    }
  }

  const writable_props = ["count", "value"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<SearchBar> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  validate_slots("SearchBar", $$slots, []);

  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      $$invalidate(2, input_element = $$value);
    });
  }

  function input_input_handler() {
    value = this.value;
    $$invalidate(0, value);
  }

  $$self.$set = $$props => {
    if ("count" in $$props) $$invalidate(1, count = $$props.count);
    if ("value" in $$props) $$invalidate(0, value = $$props.value);
  };

  $$self.$capture_state = () => ({
    IconSearch,
    count,
    value,
    input_element,
    on_key_press
  });

  $$self.$inject_state = $$props => {
    if ("count" in $$props) $$invalidate(1, count = $$props.count);
    if ("value" in $$props) $$invalidate(0, value = $$props.value);
    if ("input_element" in $$props) $$invalidate(2, input_element = $$props.input_element);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [value, count, input_element, on_key_press, input_binding, input_input_handler];
}

class SearchBar extends SvelteComponentDev {
  constructor(options) {
    super(options);
    if (!document.getElementById("svelte-ga2m0d-style")) add_css();
    init(this, options, instance, create_fragment, safe_not_equal, {
      count: 1,
      value: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SearchBar",
      options,
      id: create_fragment.name
    });
  }

  get count() {
    throw new Error("<SearchBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set count(value) {
    throw new Error("<SearchBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get value() {
    throw new Error("<SearchBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set value(value) {
    throw new Error("<SearchBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

export default SearchBar;