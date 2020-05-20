/* src/Application.svelte generated by Svelte v3.22.3 */
import { SvelteComponentDev, add_flush_callback, add_location, append_dev, attr_dev, bind, binding_callbacks, component_subscribe, create_component, destroy_component, detach_dev, dispatch_dev, element, init, insert_dev, mount_component, safe_not_equal, set_store_value, space, transition_in, transition_out, validate_slots, validate_store } from "/svelte-feather/dist/"web_modules/svelte/internal.js";
import { query_param } from "/svelte-feather/dist/"web_modules/svelte-commons.js";
import { ICON_SIZES } from "/svelte-feather/dist/"web_modules/svelte-feather.js";
import ICONS from "./icons.js";
import ComponentOverlay from "./components/ComponentOverlay.js";
import IconEditor from "./components/IconEditor.js";
import IconGrid from "./components/IconGrid.js";
import PageHeader from "./components/PageHeader.js";
import PageNav from "./components/PageNav.js";
import PageFooter from "./components/PageFooter.js";
import SearchBar from "./components/SearchBar.js";
const file = "src/Application.svelte";

function add_css() {
  var style = element("style");
  style.id = "svelte-1i3vc5u-style";
  style.textContent = "main.svelte-1i3vc5u{margin-top:4rem;margin-bottom:2rem;margin-left:2rem;margin-right:2rem}aside.svelte-1i3vc5u{position:sticky;top:2rem;margin-left:3rem;max-width:450px;height:fit-content}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGljYXRpb24uc3ZlbHRlIiwic291cmNlcyI6WyJBcHBsaWNhdGlvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQge3F1ZXJ5X3BhcmFtfSBmcm9tIFwic3ZlbHRlLWNvbW1vbnNcIjtcbiAgICBpbXBvcnQge0lDT05fU0laRVN9IGZyb20gXCJzdmVsdGUtZmVhdGhlclwiO1xuXG4gICAgaW1wb3J0IElDT05TIGZyb20gXCIuL2ljb25zXCI7XG5cbiAgICBpbXBvcnQgQ29tcG9uZW50T3ZlcmxheSBmcm9tIFwiLi9jb21wb25lbnRzL0NvbXBvbmVudE92ZXJsYXlcIjtcbiAgICBpbXBvcnQgSWNvbkVkaXRvciBmcm9tIFwiLi9jb21wb25lbnRzL0ljb25FZGl0b3JcIjtcbiAgICBpbXBvcnQgSWNvbkdyaWQgZnJvbSBcIi4vY29tcG9uZW50cy9JY29uR3JpZFwiO1xuICAgIGltcG9ydCBQYWdlSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvUGFnZUhlYWRlclwiO1xuICAgIGltcG9ydCBQYWdlTmF2IGZyb20gXCIuL2NvbXBvbmVudHMvUGFnZU5hdlwiO1xuICAgIGltcG9ydCBQYWdlRm9vdGVyIGZyb20gXCIuL2NvbXBvbmVudHMvUGFnZUZvb3RlclwiO1xuICAgIGltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4vY29tcG9uZW50cy9TZWFyY2hCYXJcIjtcblxuICAgIGNvbnN0IGNvbXBvbmVudCA9IHF1ZXJ5X3BhcmFtKFwiY29tcG9uZW50XCIsIFwiXCIpO1xuICAgIGNvbnN0IHNlYXJjaCA9IHF1ZXJ5X3BhcmFtKFwic2VhcmNoXCIsIFwiXCIpO1xuXG4gICAgY29uc3QgY29sb3IgPSBxdWVyeV9wYXJhbShcImNvbG9yXCIsIFwiY3VycmVudENvbG9yXCIpO1xuICAgIGNvbnN0IGZpbGwgPSBxdWVyeV9wYXJhbShcImZpbGxcIiwgXCJub25lXCIpO1xuICAgIGNvbnN0IGxpbmVjYXAgPSBxdWVyeV9wYXJhbShcImxpbmVjYXBcIiwgXCJyb3VuZFwiKTtcbiAgICBjb25zdCBsaW5lam9pbiA9IHF1ZXJ5X3BhcmFtKFwibGluZWpvaW5cIiwgXCJyb3VuZFwiKTtcbiAgICBjb25zdCBzaXplID0gcXVlcnlfcGFyYW0oXCJzaXplXCIsIElDT05fU0laRVMuZGVmYXVsdCk7XG4gICAgY29uc3Qgd2lkdGggPSBxdWVyeV9wYXJhbShcIndpZHRoXCIsIFwiMnB4XCIpO1xuXG4gICAgZnVuY3Rpb24gb25faWNvbl9jbGljayhldmVudCkge1xuICAgICAgICAkY29tcG9uZW50ID0gZXZlbnQuZGV0YWlsLmNsYXNzX25hbWU7XG4gICAgfVxuXG4gICAgbGV0IF9pY29ucyA9IFtdO1xuICAgICQ6IHtcbiAgICAgICAgaWYgKCRzZWFyY2gpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaCA9ICRzZWFyY2gudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgX2ljb25zID0gSUNPTlMubWFwKCh7Y2xhc3NfbmFtZSwgY29tcG9uZW50LCBkaXNwbGF5X25hbWUsIG5hbWUsIHRhZ3N9KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZpc2libGUgPVxuICAgICAgICAgICAgICAgICAgICBjbGFzc19uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoKSB8fFxuICAgICAgICAgICAgICAgICAgICBuYW1lLmluY2x1ZGVzKHNlYXJjaCkgfHxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoKTtcblxuICAgICAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHRhZyBvZiB0YWdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnLmluY2x1ZGVzKHNlYXJjaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB7Y2xhc3NfbmFtZSwgY29tcG9uZW50LCBkaXNwbGF5X25hbWUsIG5hbWUsIHRhZ3MsIHZpc2libGV9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfaWNvbnMgPSBJQ09OUy5tYXAoKGljb24pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLmljb24sIHZpc2libGU6IHRydWV9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIG1haW4ge1xuICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgfVxuXG4gICAgYXNpZGUge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDJyZW07XG5cbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNyZW07XG5cbiAgICAgICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB9XG48L3N0eWxlPlxuXG48Q29tcG9uZW50T3ZlcmxheSBiaW5kOmNvbXBvbmVudD17JGNvbXBvbmVudH0gLz5cblxuPFBhZ2VOYXYgLz5cbjxQYWdlSGVhZGVyIC8+XG5cbjxtYWluIGNsYXNzPVwicm93XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICA8U2VhcmNoQmFyIGNvdW50PXtfaWNvbnMubGVuZ3RofSBiaW5kOnZhbHVlPXskc2VhcmNofSAvPlxuXG4gICAgICAgIDxJY29uR3JpZFxuICAgICAgICAgICAgaWNvbnM9e19pY29uc31cbiAgICAgICAgICAgIGNvbG9yPXskY29sb3J9XG4gICAgICAgICAgICBmaWxsPXskZmlsbH1cbiAgICAgICAgICAgIGxpbmVjYXA9eyRsaW5lY2FwfVxuICAgICAgICAgICAgbGluZWpvaW49eyRsaW5lam9pbn1cbiAgICAgICAgICAgIHNpemU9eyRzaXplfVxuICAgICAgICAgICAgd2lkdGg9eyR3aWR0aH1cbiAgICAgICAgICAgIG9uOmNsaWNrPXtvbl9pY29uX2NsaWNrfSAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGFzaWRlIGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgPEljb25FZGl0b3JcbiAgICAgICAgICAgIGJpbmQ6Y29sb3I9eyRjb2xvcn1cbiAgICAgICAgICAgIGJpbmQ6ZmlsbD17JGZpbGx9XG4gICAgICAgICAgICBiaW5kOmxpbmVjYXA9eyRsaW5lY2FwfVxuICAgICAgICAgICAgYmluZDpsaW5lam9pbj17JGxpbmVqb2lufVxuICAgICAgICAgICAgYmluZDpzaXplPXskc2l6ZX1cbiAgICAgICAgICAgIGJpbmQ6d2lkdGg9eyR3aWR0aH0gLz5cbiAgICA8L2FzaWRlPlxuPC9tYWluPlxuXG48UGFnZUZvb3RlciAvPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJESSxJQUFJLGVBQUMsQ0FBQyxBQUNGLFVBQVUsQ0FBRSxJQUFJLENBQ2hCLGFBQWEsQ0FBRSxJQUFJLENBRW5CLFdBQVcsQ0FBRSxJQUFJLENBQ2pCLFlBQVksQ0FBRSxJQUFJLEFBQ3RCLENBQUMsQUFFRCxLQUFLLGVBQUMsQ0FBQyxBQUNILFFBQVEsQ0FBRSxNQUFNLENBQ2hCLEdBQUcsQ0FBRSxJQUFJLENBRVQsV0FBVyxDQUFFLElBQUksQ0FFakIsU0FBUyxDQUFFLEtBQUssQ0FDaEIsTUFBTSxDQUFFLFdBQVcsQUFDdkIsQ0FBQyJ9 */";
  append_dev(document.head, style);
}

function create_fragment(ctx) {
  let updating_component;
  let t0;
  let t1;
  let t2;
  let main;
  let div;
  let updating_value;
  let t3;
  let t4;
  let aside;
  let updating_color;
  let updating_fill;
  let updating_linecap;
  let updating_linejoin;
  let updating_size;
  let updating_width;
  let t5;
  let current;

  function componentoverlay_component_binding(value) {
    /*componentoverlay_component_binding*/
    ctx[18].call(null, value);
  }

  let componentoverlay_props = {};

  if (
  /*$component*/
  ctx[1] !== void 0) {
    componentoverlay_props.component =
    /*$component*/
    ctx[1];
  }

  const componentoverlay = new ComponentOverlay({
    props: componentoverlay_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(componentoverlay, "component", componentoverlay_component_binding));
  const pagenav = new PageNav({
    $$inline: true
  });
  const pageheader = new PageHeader({
    $$inline: true
  });

  function searchbar_value_binding(value) {
    /*searchbar_value_binding*/
    ctx[19].call(null, value);
  }

  let searchbar_props = {
    count:
    /*_icons*/
    ctx[0].length
  };

  if (
  /*$search*/
  ctx[2] !== void 0) {
    searchbar_props.value =
    /*$search*/
    ctx[2];
  }

  const searchbar = new SearchBar({
    props: searchbar_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(searchbar, "value", searchbar_value_binding));
  const icongrid = new IconGrid({
    props: {
      icons:
      /*_icons*/
      ctx[0],
      color:
      /*$color*/
      ctx[3],
      fill:
      /*$fill*/
      ctx[4],
      linecap:
      /*$linecap*/
      ctx[5],
      linejoin:
      /*$linejoin*/
      ctx[6],
      size:
      /*$size*/
      ctx[7],
      width:
      /*$width*/
      ctx[8]
    },
    $$inline: true
  });
  icongrid.$on("click",
  /*on_icon_click*/
  ctx[17]);

  function iconeditor_color_binding(value) {
    /*iconeditor_color_binding*/
    ctx[20].call(null, value);
  }

  function iconeditor_fill_binding(value) {
    /*iconeditor_fill_binding*/
    ctx[21].call(null, value);
  }

  function iconeditor_linecap_binding(value) {
    /*iconeditor_linecap_binding*/
    ctx[22].call(null, value);
  }

  function iconeditor_linejoin_binding(value) {
    /*iconeditor_linejoin_binding*/
    ctx[23].call(null, value);
  }

  function iconeditor_size_binding(value) {
    /*iconeditor_size_binding*/
    ctx[24].call(null, value);
  }

  function iconeditor_width_binding(value) {
    /*iconeditor_width_binding*/
    ctx[25].call(null, value);
  }

  let iconeditor_props = {};

  if (
  /*$color*/
  ctx[3] !== void 0) {
    iconeditor_props.color =
    /*$color*/
    ctx[3];
  }

  if (
  /*$fill*/
  ctx[4] !== void 0) {
    iconeditor_props.fill =
    /*$fill*/
    ctx[4];
  }

  if (
  /*$linecap*/
  ctx[5] !== void 0) {
    iconeditor_props.linecap =
    /*$linecap*/
    ctx[5];
  }

  if (
  /*$linejoin*/
  ctx[6] !== void 0) {
    iconeditor_props.linejoin =
    /*$linejoin*/
    ctx[6];
  }

  if (
  /*$size*/
  ctx[7] !== void 0) {
    iconeditor_props.size =
    /*$size*/
    ctx[7];
  }

  if (
  /*$width*/
  ctx[8] !== void 0) {
    iconeditor_props.width =
    /*$width*/
    ctx[8];
  }

  const iconeditor = new IconEditor({
    props: iconeditor_props,
    $$inline: true
  });
  binding_callbacks.push(() => bind(iconeditor, "color", iconeditor_color_binding));
  binding_callbacks.push(() => bind(iconeditor, "fill", iconeditor_fill_binding));
  binding_callbacks.push(() => bind(iconeditor, "linecap", iconeditor_linecap_binding));
  binding_callbacks.push(() => bind(iconeditor, "linejoin", iconeditor_linejoin_binding));
  binding_callbacks.push(() => bind(iconeditor, "size", iconeditor_size_binding));
  binding_callbacks.push(() => bind(iconeditor, "width", iconeditor_width_binding));
  const pagefooter = new PageFooter({
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(componentoverlay.$$.fragment);
      t0 = space();
      create_component(pagenav.$$.fragment);
      t1 = space();
      create_component(pageheader.$$.fragment);
      t2 = space();
      main = element("main");
      div = element("div");
      create_component(searchbar.$$.fragment);
      t3 = space();
      create_component(icongrid.$$.fragment);
      t4 = space();
      aside = element("aside");
      create_component(iconeditor.$$.fragment);
      t5 = space();
      create_component(pagefooter.$$.fragment);
      attr_dev(div, "class", "col");
      add_location(div, file, 84, 4, 2342);
      attr_dev(aside, "class", "col-3 svelte-1i3vc5u");
      add_location(aside, file, 98, 4, 2695);
      attr_dev(main, "class", "row svelte-1i3vc5u");
      add_location(main, file, 83, 0, 2319);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(componentoverlay, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(pagenav, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(pageheader, target, anchor);
      insert_dev(target, t2, anchor);
      insert_dev(target, main, anchor);
      append_dev(main, div);
      mount_component(searchbar, div, null);
      append_dev(div, t3);
      mount_component(icongrid, div, null);
      append_dev(main, t4);
      append_dev(main, aside);
      mount_component(iconeditor, aside, null);
      insert_dev(target, t5, anchor);
      mount_component(pagefooter, target, anchor);
      current = true;
    },
    p: function update(ctx, [dirty]) {
      const componentoverlay_changes = {};

      if (!updating_component && dirty &
      /*$component*/
      2) {
        updating_component = true;
        componentoverlay_changes.component =
        /*$component*/
        ctx[1];
        add_flush_callback(() => updating_component = false);
      }

      componentoverlay.$set(componentoverlay_changes);
      const searchbar_changes = {};
      if (dirty &
      /*_icons*/
      1) searchbar_changes.count =
      /*_icons*/
      ctx[0].length;

      if (!updating_value && dirty &
      /*$search*/
      4) {
        updating_value = true;
        searchbar_changes.value =
        /*$search*/
        ctx[2];
        add_flush_callback(() => updating_value = false);
      }

      searchbar.$set(searchbar_changes);
      const icongrid_changes = {};
      if (dirty &
      /*_icons*/
      1) icongrid_changes.icons =
      /*_icons*/
      ctx[0];
      if (dirty &
      /*$color*/
      8) icongrid_changes.color =
      /*$color*/
      ctx[3];
      if (dirty &
      /*$fill*/
      16) icongrid_changes.fill =
      /*$fill*/
      ctx[4];
      if (dirty &
      /*$linecap*/
      32) icongrid_changes.linecap =
      /*$linecap*/
      ctx[5];
      if (dirty &
      /*$linejoin*/
      64) icongrid_changes.linejoin =
      /*$linejoin*/
      ctx[6];
      if (dirty &
      /*$size*/
      128) icongrid_changes.size =
      /*$size*/
      ctx[7];
      if (dirty &
      /*$width*/
      256) icongrid_changes.width =
      /*$width*/
      ctx[8];
      icongrid.$set(icongrid_changes);
      const iconeditor_changes = {};

      if (!updating_color && dirty &
      /*$color*/
      8) {
        updating_color = true;
        iconeditor_changes.color =
        /*$color*/
        ctx[3];
        add_flush_callback(() => updating_color = false);
      }

      if (!updating_fill && dirty &
      /*$fill*/
      16) {
        updating_fill = true;
        iconeditor_changes.fill =
        /*$fill*/
        ctx[4];
        add_flush_callback(() => updating_fill = false);
      }

      if (!updating_linecap && dirty &
      /*$linecap*/
      32) {
        updating_linecap = true;
        iconeditor_changes.linecap =
        /*$linecap*/
        ctx[5];
        add_flush_callback(() => updating_linecap = false);
      }

      if (!updating_linejoin && dirty &
      /*$linejoin*/
      64) {
        updating_linejoin = true;
        iconeditor_changes.linejoin =
        /*$linejoin*/
        ctx[6];
        add_flush_callback(() => updating_linejoin = false);
      }

      if (!updating_size && dirty &
      /*$size*/
      128) {
        updating_size = true;
        iconeditor_changes.size =
        /*$size*/
        ctx[7];
        add_flush_callback(() => updating_size = false);
      }

      if (!updating_width && dirty &
      /*$width*/
      256) {
        updating_width = true;
        iconeditor_changes.width =
        /*$width*/
        ctx[8];
        add_flush_callback(() => updating_width = false);
      }

      iconeditor.$set(iconeditor_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(componentoverlay.$$.fragment, local);
      transition_in(pagenav.$$.fragment, local);
      transition_in(pageheader.$$.fragment, local);
      transition_in(searchbar.$$.fragment, local);
      transition_in(icongrid.$$.fragment, local);
      transition_in(iconeditor.$$.fragment, local);
      transition_in(pagefooter.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(componentoverlay.$$.fragment, local);
      transition_out(pagenav.$$.fragment, local);
      transition_out(pageheader.$$.fragment, local);
      transition_out(searchbar.$$.fragment, local);
      transition_out(icongrid.$$.fragment, local);
      transition_out(iconeditor.$$.fragment, local);
      transition_out(pagefooter.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(componentoverlay, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(pagenav, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(pageheader, detaching);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(main);
      destroy_component(searchbar);
      destroy_component(icongrid);
      destroy_component(iconeditor);
      if (detaching) detach_dev(t5);
      destroy_component(pagefooter, detaching);
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
  let $component;
  let $search;
  let $color;
  let $fill;
  let $linecap;
  let $linejoin;
  let $size;
  let $width;
  const component = query_param("component", "");
  validate_store(component, "component");
  component_subscribe($$self, component, value => $$invalidate(1, $component = value));
  const search = query_param("search", "");
  validate_store(search, "search");
  component_subscribe($$self, search, value => $$invalidate(2, $search = value));
  const color = query_param("color", "currentColor");
  validate_store(color, "color");
  component_subscribe($$self, color, value => $$invalidate(3, $color = value));
  const fill = query_param("fill", "none");
  validate_store(fill, "fill");
  component_subscribe($$self, fill, value => $$invalidate(4, $fill = value));
  const linecap = query_param("linecap", "round");
  validate_store(linecap, "linecap");
  component_subscribe($$self, linecap, value => $$invalidate(5, $linecap = value));
  const linejoin = query_param("linejoin", "round");
  validate_store(linejoin, "linejoin");
  component_subscribe($$self, linejoin, value => $$invalidate(6, $linejoin = value));
  const size = query_param("size", ICON_SIZES.default);
  validate_store(size, "size");
  component_subscribe($$self, size, value => $$invalidate(7, $size = value));
  const width = query_param("width", "2px");
  validate_store(width, "width");
  component_subscribe($$self, width, value => $$invalidate(8, $width = value));

  function on_icon_click(event) {
    set_store_value(component, $component = event.detail.class_name);
  }

  let _icons = [];
  const writable_props = [];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Application> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  validate_slots("Application", $$slots, []);

  function componentoverlay_component_binding(value) {
    $component = value;
    component.set($component);
  }

  function searchbar_value_binding(value) {
    $search = value;
    search.set($search);
  }

  function iconeditor_color_binding(value) {
    $color = value;
    color.set($color);
  }

  function iconeditor_fill_binding(value) {
    $fill = value;
    fill.set($fill);
  }

  function iconeditor_linecap_binding(value) {
    $linecap = value;
    linecap.set($linecap);
  }

  function iconeditor_linejoin_binding(value) {
    $linejoin = value;
    linejoin.set($linejoin);
  }

  function iconeditor_size_binding(value) {
    $size = value;
    size.set($size);
  }

  function iconeditor_width_binding(value) {
    $width = value;
    width.set($width);
  }

  $$self.$capture_state = () => ({
    query_param,
    ICON_SIZES,
    ICONS,
    ComponentOverlay,
    IconEditor,
    IconGrid,
    PageHeader,
    PageNav,
    PageFooter,
    SearchBar,
    component,
    search,
    color,
    fill,
    linecap,
    linejoin,
    size,
    width,
    on_icon_click,
    _icons,
    $component,
    $search,
    $color,
    $fill,
    $linecap,
    $linejoin,
    $size,
    $width
  });

  $$self.$inject_state = $$props => {
    if ("_icons" in $$props) $$invalidate(0, _icons = $$props._icons);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*$search*/
    4) {
      $: {
        if ($search) {
          const search = $search.toLowerCase();
          $$invalidate(0, _icons = ICONS.map(({
            class_name,
            component,
            display_name,
            name,
            tags
          }) => {
            let visible = class_name.toLowerCase().includes(search) || name.includes(search) || display_name.toLowerCase().includes(search);

            if (!visible) {
              for (const tag of tags) {
                if (tag.includes(search)) {
                  visible = true;
                  break;
                }
              }
            }

            return {
              class_name,
              component,
              display_name,
              name,
              tags,
              visible
            };
          }));
        } else {
          $$invalidate(0, _icons = ICONS.map(icon => {
            return { ...icon,
              visible: true
            };
          }));
        }
      }
    }
  };

  return [_icons, $component, $search, $color, $fill, $linecap, $linejoin, $size, $width, component, search, color, fill, linecap, linejoin, size, width, on_icon_click, componentoverlay_component_binding, searchbar_value_binding, iconeditor_color_binding, iconeditor_fill_binding, iconeditor_linecap_binding, iconeditor_linejoin_binding, iconeditor_size_binding, iconeditor_width_binding];
}

class Application extends SvelteComponentDev {
  constructor(options) {
    super(options);
    if (!document.getElementById("svelte-1i3vc5u-style")) add_css();
    init(this, options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Application",
      options,
      id: create_fragment.name
    });
  }

}

export default Application;