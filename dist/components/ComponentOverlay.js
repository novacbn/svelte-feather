/* src/components/ComponentOverlay.svelte generated by Svelte v3.22.3 */
import { SvelteComponentDev, add_location, append_dev, attr_dev, detach_dev, dispatch_dev, element, init, insert_dev, listen_dev, noop, run_all, safe_not_equal, set_data_dev, space, text, toggle_class, validate_slots } from "/svelte-feather/dist/"web_modules/svelte/internal.js";
import { TEMPLATE_CODE } from "../util.js";
const file = "src/components/ComponentOverlay.svelte";

function add_css() {
  var style = element("style");
  style.id = "svelte-1mwkqje-style";
  style.textContent = "section.svelte-1mwkqje{display:flex;position:fixed;align-items:center;justify-content:center;width:100%;height:100%;z-index:1}section.svelte-1mwkqje::before{display:block;content:\"\";position:absolute;width:100%;height:100%;background-color:var(--color-darkGrey);opacity:0.5;z-index:-1}code.svelte-1mwkqje{user-select:all}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50T3ZlcmxheS5zdmVsdGUiLCJzb3VyY2VzIjpbIkNvbXBvbmVudE92ZXJsYXkuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHtURU1QTEFURV9DT0RFfSBmcm9tIFwiLi4vdXRpbFwiO1xuXG4gICAgZXhwb3J0IGxldCBjb21wb25lbnQgPSBcIlwiO1xuXG4gICAgZnVuY3Rpb24gb25fYWZmaXJtYXRpdmVfY2xpY2soZXZlbnQpIHtcbiAgICAgICAgY29tcG9uZW50ID0gXCJcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbl9vdmVybGF5X2NsaWNrKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gXCJTRUNUSU9OXCIpIGNvbXBvbmVudCA9IFwiXCI7XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICBzZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIHNlY3Rpb246OmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhcmtHcmV5KTtcblxuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cblxuICAgIGNvZGUge1xuICAgICAgICB1c2VyLXNlbGVjdDogYWxsO1xuICAgIH1cbjwvc3R5bGU+XG5cbjxzZWN0aW9uIGNsYXNzOmlzLWhpZGRlbj17IWNvbXBvbmVudH0gb246Y2xpY2s9e29uX292ZXJsYXlfY2xpY2t9PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgPGNvZGU+e2NvbXBvbmVudH08L2NvZGU+XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICA8cHJlPlxuICAgICAgICAgICAgPGNvZGU+e1RFTVBMQVRFX0NPREUoe2NsYXNzX25hbWU6IGNvbXBvbmVudH0pfTwvY29kZT5cbiAgICAgICAgPC9wcmU+XG5cbiAgICAgICAgPGZvb3RlciBjbGFzcz1cImlzLXJpZ2h0XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIHByaW1hcnlcIiBvbjpjbGljaz17b25fYWZmaXJtYXRpdmVfY2xpY2t9Pk9LQVkhPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuPC9zZWN0aW9uPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVJLE9BQU8sZUFBQyxDQUFDLEFBQ0wsT0FBTyxDQUFFLElBQUksQ0FFYixRQUFRLENBQUUsS0FBSyxDQUVmLFdBQVcsQ0FBRSxNQUFNLENBQ25CLGVBQWUsQ0FBRSxNQUFNLENBRXZCLEtBQUssQ0FBRSxJQUFJLENBQ1gsTUFBTSxDQUFFLElBQUksQ0FFWixPQUFPLENBQUUsQ0FBQyxBQUNkLENBQUMsQUFFRCxzQkFBTyxRQUFRLEFBQUMsQ0FBQyxBQUNiLE9BQU8sQ0FBRSxLQUFLLENBQ2QsT0FBTyxDQUFFLEVBQUUsQ0FFWCxRQUFRLENBQUUsUUFBUSxDQUVsQixLQUFLLENBQUUsSUFBSSxDQUNYLE1BQU0sQ0FBRSxJQUFJLENBRVosZ0JBQWdCLENBQUUsSUFBSSxnQkFBZ0IsQ0FBQyxDQUV2QyxPQUFPLENBQUUsR0FBRyxDQUNaLE9BQU8sQ0FBRSxFQUFFLEFBQ2YsQ0FBQyxBQUVELElBQUksZUFBQyxDQUFDLEFBQ0YsV0FBVyxDQUFFLEdBQUcsQUFDcEIsQ0FBQyJ9 */";
  append_dev(document.head, style);
}

function create_fragment(ctx) {
  let section;
  let div;
  let header;
  let h3;
  let code0;
  let t0;
  let t1;
  let pre;
  let code1;
  let t2_value = TEMPLATE_CODE({
    class_name:
    /*component*/
    ctx[0]
  }) + "";
  let t2;
  let t3;
  let footer;
  let button;
  let dispose;
  const block = {
    c: function create() {
      section = element("section");
      div = element("div");
      header = element("header");
      h3 = element("h3");
      code0 = element("code");
      t0 = text(
      /*component*/
      ctx[0]);
      t1 = space();
      pre = element("pre");
      code1 = element("code");
      t2 = text(t2_value);
      t3 = space();
      footer = element("footer");
      button = element("button");
      button.textContent = "OKAY!";
      attr_dev(code0, "class", "svelte-1mwkqje");
      add_location(code0, file, 53, 16, 919);
      add_location(h3, file, 52, 12, 898);
      add_location(header, file, 51, 8, 877);
      attr_dev(code1, "class", "svelte-1mwkqje");
      add_location(code1, file, 58, 12, 1007);
      add_location(pre, file, 57, 8, 989);
      attr_dev(button, "class", "button primary");
      add_location(button, file, 62, 12, 1123);
      attr_dev(footer, "class", "is-right");
      add_location(footer, file, 61, 8, 1085);
      attr_dev(div, "class", "card");
      add_location(div, file, 50, 4, 850);
      attr_dev(section, "class", "svelte-1mwkqje");
      toggle_class(section, "is-hidden", !
      /*component*/
      ctx[0]);
      add_location(section, file, 49, 0, 779);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor, remount) {
      insert_dev(target, section, anchor);
      append_dev(section, div);
      append_dev(div, header);
      append_dev(header, h3);
      append_dev(h3, code0);
      append_dev(code0, t0);
      append_dev(div, t1);
      append_dev(div, pre);
      append_dev(pre, code1);
      append_dev(code1, t2);
      append_dev(div, t3);
      append_dev(div, footer);
      append_dev(footer, button);
      if (remount) run_all(dispose);
      dispose = [listen_dev(button, "click",
      /*on_affirmative_click*/
      ctx[1], false, false, false), listen_dev(section, "click",
      /*on_overlay_click*/
      ctx[2], false, false, false)];
    },
    p: function update(ctx, [dirty]) {
      if (dirty &
      /*component*/
      1) set_data_dev(t0,
      /*component*/
      ctx[0]);
      if (dirty &
      /*component*/
      1 && t2_value !== (t2_value = TEMPLATE_CODE({
        class_name:
        /*component*/
        ctx[0]
      }) + "")) set_data_dev(t2, t2_value);

      if (dirty &
      /*component*/
      1) {
        toggle_class(section, "is-hidden", !
        /*component*/
        ctx[0]);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(section);
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
    component = ""
  } = $$props;

  function on_affirmative_click(event) {
    $$invalidate(0, component = "");
  }

  function on_overlay_click(event) {
    if (event.target.tagName === "SECTION") $$invalidate(0, component = "");
  }

  const writable_props = ["component"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ComponentOverlay> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  validate_slots("ComponentOverlay", $$slots, []);

  $$self.$set = $$props => {
    if ("component" in $$props) $$invalidate(0, component = $$props.component);
  };

  $$self.$capture_state = () => ({
    TEMPLATE_CODE,
    component,
    on_affirmative_click,
    on_overlay_click
  });

  $$self.$inject_state = $$props => {
    if ("component" in $$props) $$invalidate(0, component = $$props.component);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [component, on_affirmative_click, on_overlay_click];
}

class ComponentOverlay extends SvelteComponentDev {
  constructor(options) {
    super(options);
    if (!document.getElementById("svelte-1mwkqje-style")) add_css();
    init(this, options, instance, create_fragment, safe_not_equal, {
      component: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ComponentOverlay",
      options,
      id: create_fragment.name
    });
  }

  get component() {
    throw new Error("<ComponentOverlay>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set component(value) {
    throw new Error("<ComponentOverlay>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

export default ComponentOverlay;