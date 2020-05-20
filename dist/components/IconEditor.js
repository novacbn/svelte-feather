/* src/components/IconEditor.svelte generated by Svelte v3.22.3 */
import { SvelteComponentDev, add_location, append_dev, attr_dev, detach_dev, dispatch_dev, element, init, insert_dev, listen_dev, noop, run_all, safe_not_equal, set_input_value, space, to_number, validate_slots } from "/dist/web_modules/svelte/internal.js";
import { ICON_SIZES } from "/dist/web_modules/svelte-feather.js";
const file = "src/components/IconEditor.svelte";

function add_css() {
  var style = element("style");
  style.id = "svelte-kfj89x-style";
  style.textContent = "h4.svelte-kfj89x{margin-top:0}input[type=\"color\"].svelte-kfj89x{display:block;width:100%;height:100%;padding:0.35rem;border:1px solid var(--color-lightGrey);border-radius:4px;transition:all 0.2s ease}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbkVkaXRvci5zdmVsdGUiLCJzb3VyY2VzIjpbIkljb25FZGl0b3Iuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICAgIGltcG9ydCB7SUNPTl9TSVpFU30gZnJvbSBcInN2ZWx0ZS1mZWF0aGVyXCI7XG5cbiAgICBjb25zdCBSQU5HRV9JQ09OX1NJWkVTID0gW1xuICAgICAgICBJQ09OX1NJWkVTLnRpbnksXG4gICAgICAgIElDT05fU0laRVMuc21hbGwsXG4gICAgICAgIElDT05fU0laRVMuZGVmYXVsdCxcbiAgICAgICAgSUNPTl9TSVpFUy5sYXJnZSxcbiAgICAgICAgSUNPTl9TSVpFUy5odWdlXG4gICAgXTtcblxuICAgIGNvbnN0IFJBTkdFX0lDT05fTElORUNBUCA9IFtcInJvdW5kXCIsIFwiYnV0dFwiLCBcInNxdWFyZVwiXTtcblxuICAgIGNvbnN0IFJBTkdFX0lDT05fTElORUpPSU4gPSBbXCJyb3VuZFwiLCBcImFyY3NcIiwgXCJiZXZlbFwiLCBcIm1pdGVyXCIsIFwibWl0ZXItY2xpcFwiXTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgY29sb3IgPSBcImN1cnJlbnRDb2xvclwiO1xuICAgIGV4cG9ydCBsZXQgZmlsbCA9IFwibm9uZVwiO1xuICAgIGV4cG9ydCBsZXQgbGluZWNhcCA9IFwicm91bmRcIjtcbiAgICBleHBvcnQgbGV0IGxpbmVqb2luID0gXCJyb3VuZFwiO1xuICAgIGV4cG9ydCBsZXQgc2l6ZSA9IElDT05fU0laRVMuZGVmYXVsdDtcbiAgICBleHBvcnQgbGV0IHdpZHRoID0gXCIycHhcIjtcblxuICAgIGxldCBsaW5lY2FwX3JhbmdlID0gXCIwXCI7XG4gICAgbGV0IGxpbmVqb2luX3JhbmdlID0gXCIwXCI7XG4gICAgbGV0IHNpemVfcmFuZ2UgPSAyO1xuICAgIGxldCB3aWR0aF9yYW5nZSA9IFwiMlwiO1xuXG4gICAgZnVuY3Rpb24gb25fcmVzZXRfY2xpY2soZXZlbnQpIHtcbiAgICAgICAgY29sb3IgPSBcImN1cnJlbnRDb2xvclwiO1xuXG4gICAgICAgIGZpbGwgPSBcIm5vbmVcIjtcblxuICAgICAgICBsaW5lY2FwID0gXCJyb3VuZFwiO1xuICAgICAgICBsaW5lY2FwX3JhbmdlID0gXCIwXCI7XG5cbiAgICAgICAgbGluZWpvaW4gPSBcInJvdW5kXCI7XG4gICAgICAgIGxpbmVqb2luX3JhbmdlID0gXCIwXCI7XG5cbiAgICAgICAgc2l6ZSA9IElDT05fU0laRVMuZGVmYXVsdDtcbiAgICAgICAgc2l6ZV9yYW5nZSA9IDI7XG5cbiAgICAgICAgd2lkdGggPSBcIjJweFwiO1xuICAgICAgICB3aWR0aF9yYW5nZSA9IFwiMlwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uX2xpbmVjYXBfaW5wdXQoZXZlbnQpIHtcbiAgICAgICAgbGluZWNhcCA9IFJBTkdFX0lDT05fTElORUNBUFtwYXJzZUludChsaW5lY2FwX3JhbmdlKV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25fbGluZWpvaW5faW5wdXQoZXZlbnQpIHtcbiAgICAgICAgbGluZWpvaW4gPSBSQU5HRV9JQ09OX0xJTkVKT0lOW3BhcnNlSW50KGxpbmVqb2luX3JhbmdlKV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25fc2l6ZV9pbnB1dChldmVudCkge1xuICAgICAgICBzaXplID0gUkFOR0VfSUNPTl9TSVpFU1twYXJzZUludChzaXplX3JhbmdlKV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25fd2lkdGhfaW5wdXQoZXZlbnQpIHtcbiAgICAgICAgd2lkdGggPSB3aWR0aF9yYW5nZS50b1N0cmluZygpICsgXCJweFwiO1xuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgaDQge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cblxuICAgIGlucHV0W3R5cGU9XCJjb2xvclwiXSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgcGFkZGluZzogMC4zNXJlbTtcblxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1saWdodEdyZXkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICB9XG48L3N0eWxlPlxuXG48IS0tXG4gICAgVE9ETzogTmVlZHMgZGVib3VuY2luZyBmb3IgaW5wdXRcbi0tPlxuXG48aGVhZGVyIGNsYXNzPVwicm93XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC03XCI+XG4gICAgICAgIDxoND5DdXN0b21pemU8L2g0PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC01IHRleHQtcmlnaHRcIj5cbiAgICAgICAgPGJ1dHRvbiBvbjpjbGljaz17b25fcmVzZXRfY2xpY2t9PlJFU0VUPC9idXR0b24+XG4gICAgPC9kaXY+XG48L2hlYWRlcj5cblxuPGxhYmVsPlNpemU8L2xhYmVsPlxuPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICBsaXN0PVwibGlzdC1zaXplc1wiXG4gICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgIG1heD1cIjRcIlxuICAgICAgICAgICAgc3RlcD1cIjFcIlxuICAgICAgICAgICAgYmluZDp2YWx1ZT17c2l6ZV9yYW5nZX1cbiAgICAgICAgICAgIG9uOmlucHV0PXtvbl9zaXplX2lucHV0fSAvPlxuXG4gICAgICAgIDxkYXRhbGlzdCBpZD1cImxpc3Qtc2l6ZXNcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCIgLz5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCIgLz5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCIgLz5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCIgLz5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCIgLz5cbiAgICAgICAgPC9kYXRhbGlzdD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYmluZDp2YWx1ZT17c2l6ZX0gLz5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG48bGFiZWw+U3Ryb2tlIFdpZHRoPC9sYWJlbD5cbjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLThcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgbGlzdD1cImxpc3Qtd2lkdGhzXCJcbiAgICAgICAgICAgIG1pbj1cIjAuNVwiXG4gICAgICAgICAgICBtYXg9XCIzXCJcbiAgICAgICAgICAgIHN0ZXA9XCIwLjVcIlxuICAgICAgICAgICAgYmluZDp2YWx1ZT17d2lkdGhfcmFuZ2V9XG4gICAgICAgICAgICBvbjppbnB1dD17b25fd2lkdGhfaW5wdXR9IC8+XG5cbiAgICAgICAgPGRhdGFsaXN0IGlkPVwibGlzdC13aWR0aHNcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwLjVcIiAvPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIiAvPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEuNVwiIC8+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiIC8+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMi41XCIgLz5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCIgLz5cbiAgICAgICAgPC9kYXRhbGlzdD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYmluZDp2YWx1ZT17d2lkdGh9IC8+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPGxhYmVsPlN0cm9rZSBMaW5lIENhcDwvbGFiZWw+XG48ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgIGxpc3Q9XCJsaXN0LWxpbmVjYXBcIlxuICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICBtYXg9XCIyXCJcbiAgICAgICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgICAgIGJpbmQ6dmFsdWU9e2xpbmVjYXBfcmFuZ2V9XG4gICAgICAgICAgICBvbjppbnB1dD17b25fbGluZWNhcF9pbnB1dH0gLz5cblxuICAgICAgICA8ZGF0YWxpc3QgaWQ9XCJsaXN0LWxpbmVjYXBcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCIgLz5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCIgLz5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCIgLz5cbiAgICAgICAgPC9kYXRhbGlzdD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYmluZDp2YWx1ZT17bGluZWNhcH0gLz5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG48bGFiZWw+U3Ryb2tlIExpbmUgSm9pbjwvbGFiZWw+XG48ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgIGxpc3Q9XCJsaXN0LWxpbmVqb2luXCJcbiAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgbWF4PVwiNFwiXG4gICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICBiaW5kOnZhbHVlPXtsaW5lam9pbl9yYW5nZX1cbiAgICAgICAgICAgIG9uOmlucHV0PXtvbl9saW5lam9pbl9pbnB1dH0gLz5cblxuICAgICAgICA8ZGF0YWxpc3QgaWQ9XCJsaXN0LWxpbmVqb2luXCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiIC8+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiIC8+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiIC8+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiIC8+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiIC8+XG4gICAgICAgIDwvZGF0YWxpc3Q+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGJpbmQ6dmFsdWU9e2xpbmVqb2lufSAvPlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxsYWJlbD5Db2xvcjwvbGFiZWw+XG48ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGJpbmQ6dmFsdWU9e2NvbG9yfSAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNvbG9yXCIgYmluZDp2YWx1ZT17Y29sb3J9IC8+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPGxhYmVsPkZpbGw8L2xhYmVsPlxuPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBiaW5kOnZhbHVlPXtmaWxsfSAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNvbG9yXCIgYmluZDp2YWx1ZT17ZmlsbH0gLz5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFSSxFQUFFLGNBQUMsQ0FBQyxBQUNBLFVBQVUsQ0FBRSxDQUFDLEFBQ2pCLENBQUMsQUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFDLENBQUMsQUFDakIsT0FBTyxDQUFFLEtBQUssQ0FFZCxLQUFLLENBQUUsSUFBSSxDQUNYLE1BQU0sQ0FBRSxJQUFJLENBRVosT0FBTyxDQUFFLE9BQU8sQ0FFaEIsTUFBTSxDQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxDQUN4QyxhQUFhLENBQUUsR0FBRyxDQUVsQixVQUFVLENBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEFBQzdCLENBQUMifQ== */";
  append_dev(document.head, style);
}

function create_fragment(ctx) {
  let header;
  let div0;
  let h4;
  let t1;
  let div1;
  let button;
  let t3;
  let label0;
  let t5;
  let div4;
  let div2;
  let input0;
  let t6;
  let datalist0;
  let option0;
  let option1;
  let option2;
  let option3;
  let option4;
  let t7;
  let div3;
  let input1;
  let t8;
  let label1;
  let t10;
  let div7;
  let div5;
  let input2;
  let t11;
  let datalist1;
  let option5;
  let option6;
  let option7;
  let option8;
  let option9;
  let option10;
  let t12;
  let div6;
  let input3;
  let t13;
  let label2;
  let t15;
  let div10;
  let div8;
  let input4;
  let t16;
  let datalist2;
  let option11;
  let option12;
  let option13;
  let t17;
  let div9;
  let input5;
  let t18;
  let label3;
  let t20;
  let div13;
  let div11;
  let input6;
  let t21;
  let datalist3;
  let option14;
  let option15;
  let option16;
  let option17;
  let option18;
  let t22;
  let div12;
  let input7;
  let t23;
  let label4;
  let t25;
  let div16;
  let div14;
  let input8;
  let t26;
  let div15;
  let input9;
  let t27;
  let label5;
  let t29;
  let div19;
  let div17;
  let input10;
  let t30;
  let div18;
  let input11;
  let dispose;
  const block = {
    c: function create() {
      header = element("header");
      div0 = element("div");
      h4 = element("h4");
      h4.textContent = "Customize";
      t1 = space();
      div1 = element("div");
      button = element("button");
      button.textContent = "RESET";
      t3 = space();
      label0 = element("label");
      label0.textContent = "Size";
      t5 = space();
      div4 = element("div");
      div2 = element("div");
      input0 = element("input");
      t6 = space();
      datalist0 = element("datalist");
      option0 = element("option");
      option1 = element("option");
      option2 = element("option");
      option3 = element("option");
      option4 = element("option");
      t7 = space();
      div3 = element("div");
      input1 = element("input");
      t8 = space();
      label1 = element("label");
      label1.textContent = "Stroke Width";
      t10 = space();
      div7 = element("div");
      div5 = element("div");
      input2 = element("input");
      t11 = space();
      datalist1 = element("datalist");
      option5 = element("option");
      option6 = element("option");
      option7 = element("option");
      option8 = element("option");
      option9 = element("option");
      option10 = element("option");
      t12 = space();
      div6 = element("div");
      input3 = element("input");
      t13 = space();
      label2 = element("label");
      label2.textContent = "Stroke Line Cap";
      t15 = space();
      div10 = element("div");
      div8 = element("div");
      input4 = element("input");
      t16 = space();
      datalist2 = element("datalist");
      option11 = element("option");
      option12 = element("option");
      option13 = element("option");
      t17 = space();
      div9 = element("div");
      input5 = element("input");
      t18 = space();
      label3 = element("label");
      label3.textContent = "Stroke Line Join";
      t20 = space();
      div13 = element("div");
      div11 = element("div");
      input6 = element("input");
      t21 = space();
      datalist3 = element("datalist");
      option14 = element("option");
      option15 = element("option");
      option16 = element("option");
      option17 = element("option");
      option18 = element("option");
      t22 = space();
      div12 = element("div");
      input7 = element("input");
      t23 = space();
      label4 = element("label");
      label4.textContent = "Color";
      t25 = space();
      div16 = element("div");
      div14 = element("div");
      input8 = element("input");
      t26 = space();
      div15 = element("div");
      input9 = element("input");
      t27 = space();
      label5 = element("label");
      label5.textContent = "Fill";
      t29 = space();
      div19 = element("div");
      div17 = element("div");
      input10 = element("input");
      t30 = space();
      div18 = element("div");
      input11 = element("input");
      attr_dev(h4, "class", "svelte-kfj89x");
      add_location(h4, file, 90, 8, 1875);
      attr_dev(div0, "class", "col-7");
      add_location(div0, file, 89, 4, 1847);
      add_location(button, file, 94, 8, 1949);
      attr_dev(div1, "class", "col-5 text-right");
      add_location(div1, file, 93, 4, 1910);
      attr_dev(header, "class", "row");
      add_location(header, file, 88, 0, 1822);
      add_location(label0, file, 98, 0, 2020);
      attr_dev(input0, "type", "range");
      attr_dev(input0, "list", "list-sizes");
      attr_dev(input0, "min", "0");
      attr_dev(input0, "max", "4");
      attr_dev(input0, "step", "1");
      add_location(input0, file, 101, 8, 2090);
      option0.__value = "0";
      option0.value = option0.__value;
      add_location(option0, file, 111, 12, 2337);
      option1.__value = "1";
      option1.value = option1.__value;
      add_location(option1, file, 112, 12, 2370);
      option2.__value = "2";
      option2.value = option2.__value;
      add_location(option2, file, 113, 12, 2403);
      option3.__value = "3";
      option3.value = option3.__value;
      add_location(option3, file, 114, 12, 2436);
      option4.__value = "4";
      option4.value = option4.__value;
      add_location(option4, file, 115, 12, 2469);
      attr_dev(datalist0, "id", "list-sizes");
      add_location(datalist0, file, 110, 8, 2298);
      attr_dev(div2, "class", "col-8");
      add_location(div2, file, 100, 4, 2062);
      attr_dev(input1, "type", "text");
      add_location(input1, file, 120, 8, 2552);
      attr_dev(div3, "class", "col");
      add_location(div3, file, 119, 4, 2526);
      attr_dev(div4, "class", "row");
      add_location(div4, file, 99, 0, 2040);
      add_location(label1, file, 124, 0, 2611);
      attr_dev(input2, "type", "range");
      attr_dev(input2, "list", "list-widths");
      attr_dev(input2, "min", "0.5");
      attr_dev(input2, "max", "3");
      attr_dev(input2, "step", "0.5");
      add_location(input2, file, 127, 8, 2689);
      option5.__value = "0.5";
      option5.value = option5.__value;
      add_location(option5, file, 137, 12, 2944);
      option6.__value = "1";
      option6.value = option6.__value;
      add_location(option6, file, 138, 12, 2979);
      option7.__value = "1.5";
      option7.value = option7.__value;
      add_location(option7, file, 139, 12, 3012);
      option8.__value = "2";
      option8.value = option8.__value;
      add_location(option8, file, 140, 12, 3047);
      option9.__value = "2.5";
      option9.value = option9.__value;
      add_location(option9, file, 141, 12, 3080);
      option10.__value = "3";
      option10.value = option10.__value;
      add_location(option10, file, 142, 12, 3115);
      attr_dev(datalist1, "id", "list-widths");
      add_location(datalist1, file, 136, 8, 2904);
      attr_dev(div5, "class", "col-8");
      add_location(div5, file, 126, 4, 2661);
      attr_dev(input3, "type", "text");
      add_location(input3, file, 147, 8, 3198);
      attr_dev(div6, "class", "col");
      add_location(div6, file, 146, 4, 3172);
      attr_dev(div7, "class", "row");
      add_location(div7, file, 125, 0, 2639);
      add_location(label2, file, 151, 0, 3258);
      attr_dev(input4, "type", "range");
      attr_dev(input4, "list", "list-linecap");
      attr_dev(input4, "min", "0");
      attr_dev(input4, "max", "2");
      attr_dev(input4, "step", "1");
      add_location(input4, file, 154, 8, 3339);
      option11.__value = "0";
      option11.value = option11.__value;
      add_location(option11, file, 164, 12, 3596);
      option12.__value = "1";
      option12.value = option12.__value;
      add_location(option12, file, 165, 12, 3629);
      option13.__value = "2";
      option13.value = option13.__value;
      add_location(option13, file, 166, 12, 3662);
      attr_dev(datalist2, "id", "list-linecap");
      add_location(datalist2, file, 163, 8, 3555);
      attr_dev(div8, "class", "col-8");
      add_location(div8, file, 153, 4, 3311);
      attr_dev(input5, "type", "text");
      add_location(input5, file, 171, 8, 3745);
      attr_dev(div9, "class", "col");
      add_location(div9, file, 170, 4, 3719);
      attr_dev(div10, "class", "row");
      add_location(div10, file, 152, 0, 3289);
      add_location(label3, file, 175, 0, 3807);
      attr_dev(input6, "type", "range");
      attr_dev(input6, "list", "list-linejoin");
      attr_dev(input6, "min", "0");
      attr_dev(input6, "max", "4");
      attr_dev(input6, "step", "1");
      add_location(input6, file, 178, 8, 3889);
      option14.__value = "0";
      option14.value = option14.__value;
      add_location(option14, file, 188, 12, 4150);
      option15.__value = "1";
      option15.value = option15.__value;
      add_location(option15, file, 189, 12, 4183);
      option16.__value = "2";
      option16.value = option16.__value;
      add_location(option16, file, 190, 12, 4216);
      option17.__value = "3";
      option17.value = option17.__value;
      add_location(option17, file, 191, 12, 4249);
      option18.__value = "4";
      option18.value = option18.__value;
      add_location(option18, file, 192, 12, 4282);
      attr_dev(datalist3, "id", "list-linejoin");
      add_location(datalist3, file, 187, 8, 4108);
      attr_dev(div11, "class", "col-8");
      add_location(div11, file, 177, 4, 3861);
      attr_dev(input7, "type", "text");
      add_location(input7, file, 197, 8, 4365);
      attr_dev(div12, "class", "col");
      add_location(div12, file, 196, 4, 4339);
      attr_dev(div13, "class", "row");
      add_location(div13, file, 176, 0, 3839);
      add_location(label4, file, 201, 0, 4428);
      attr_dev(input8, "type", "text");
      add_location(input8, file, 204, 8, 4499);
      attr_dev(div14, "class", "col-8");
      add_location(div14, file, 203, 4, 4471);
      attr_dev(input9, "type", "color");
      attr_dev(input9, "class", "svelte-kfj89x");
      add_location(input9, file, 208, 8, 4582);
      attr_dev(div15, "class", "col");
      add_location(div15, file, 207, 4, 4556);
      attr_dev(div16, "class", "row");
      add_location(div16, file, 202, 0, 4449);
      add_location(label5, file, 212, 0, 4643);
      attr_dev(input10, "type", "text");
      add_location(input10, file, 215, 8, 4713);
      attr_dev(div17, "class", "col-8");
      add_location(div17, file, 214, 4, 4685);
      attr_dev(input11, "type", "color");
      attr_dev(input11, "class", "svelte-kfj89x");
      add_location(input11, file, 219, 8, 4795);
      attr_dev(div18, "class", "col");
      add_location(div18, file, 218, 4, 4769);
      attr_dev(div19, "class", "row");
      add_location(div19, file, 213, 0, 4663);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor, remount) {
      insert_dev(target, header, anchor);
      append_dev(header, div0);
      append_dev(div0, h4);
      append_dev(header, t1);
      append_dev(header, div1);
      append_dev(div1, button);
      insert_dev(target, t3, anchor);
      insert_dev(target, label0, anchor);
      insert_dev(target, t5, anchor);
      insert_dev(target, div4, anchor);
      append_dev(div4, div2);
      append_dev(div2, input0);
      set_input_value(input0,
      /*size_range*/
      ctx[8]);
      append_dev(div2, t6);
      append_dev(div2, datalist0);
      append_dev(datalist0, option0);
      append_dev(datalist0, option1);
      append_dev(datalist0, option2);
      append_dev(datalist0, option3);
      append_dev(datalist0, option4);
      append_dev(div4, t7);
      append_dev(div4, div3);
      append_dev(div3, input1);
      set_input_value(input1,
      /*size*/
      ctx[4]);
      insert_dev(target, t8, anchor);
      insert_dev(target, label1, anchor);
      insert_dev(target, t10, anchor);
      insert_dev(target, div7, anchor);
      append_dev(div7, div5);
      append_dev(div5, input2);
      set_input_value(input2,
      /*width_range*/
      ctx[9]);
      append_dev(div5, t11);
      append_dev(div5, datalist1);
      append_dev(datalist1, option5);
      append_dev(datalist1, option6);
      append_dev(datalist1, option7);
      append_dev(datalist1, option8);
      append_dev(datalist1, option9);
      append_dev(datalist1, option10);
      append_dev(div7, t12);
      append_dev(div7, div6);
      append_dev(div6, input3);
      set_input_value(input3,
      /*width*/
      ctx[5]);
      insert_dev(target, t13, anchor);
      insert_dev(target, label2, anchor);
      insert_dev(target, t15, anchor);
      insert_dev(target, div10, anchor);
      append_dev(div10, div8);
      append_dev(div8, input4);
      set_input_value(input4,
      /*linecap_range*/
      ctx[6]);
      append_dev(div8, t16);
      append_dev(div8, datalist2);
      append_dev(datalist2, option11);
      append_dev(datalist2, option12);
      append_dev(datalist2, option13);
      append_dev(div10, t17);
      append_dev(div10, div9);
      append_dev(div9, input5);
      set_input_value(input5,
      /*linecap*/
      ctx[2]);
      insert_dev(target, t18, anchor);
      insert_dev(target, label3, anchor);
      insert_dev(target, t20, anchor);
      insert_dev(target, div13, anchor);
      append_dev(div13, div11);
      append_dev(div11, input6);
      set_input_value(input6,
      /*linejoin_range*/
      ctx[7]);
      append_dev(div11, t21);
      append_dev(div11, datalist3);
      append_dev(datalist3, option14);
      append_dev(datalist3, option15);
      append_dev(datalist3, option16);
      append_dev(datalist3, option17);
      append_dev(datalist3, option18);
      append_dev(div13, t22);
      append_dev(div13, div12);
      append_dev(div12, input7);
      set_input_value(input7,
      /*linejoin*/
      ctx[3]);
      insert_dev(target, t23, anchor);
      insert_dev(target, label4, anchor);
      insert_dev(target, t25, anchor);
      insert_dev(target, div16, anchor);
      append_dev(div16, div14);
      append_dev(div14, input8);
      set_input_value(input8,
      /*color*/
      ctx[0]);
      append_dev(div16, t26);
      append_dev(div16, div15);
      append_dev(div15, input9);
      set_input_value(input9,
      /*color*/
      ctx[0]);
      insert_dev(target, t27, anchor);
      insert_dev(target, label5, anchor);
      insert_dev(target, t29, anchor);
      insert_dev(target, div19, anchor);
      append_dev(div19, div17);
      append_dev(div17, input10);
      set_input_value(input10,
      /*fill*/
      ctx[1]);
      append_dev(div19, t30);
      append_dev(div19, div18);
      append_dev(div18, input11);
      set_input_value(input11,
      /*fill*/
      ctx[1]);
      if (remount) run_all(dispose);
      dispose = [listen_dev(button, "click",
      /*on_reset_click*/
      ctx[10], false, false, false), listen_dev(input0, "change",
      /*input0_change_input_handler*/
      ctx[15]), listen_dev(input0, "input",
      /*input0_change_input_handler*/
      ctx[15]), listen_dev(input0, "input",
      /*on_size_input*/
      ctx[13], false, false, false), listen_dev(input1, "input",
      /*input1_input_handler*/
      ctx[16]), listen_dev(input2, "change",
      /*input2_change_input_handler*/
      ctx[17]), listen_dev(input2, "input",
      /*input2_change_input_handler*/
      ctx[17]), listen_dev(input2, "input",
      /*on_width_input*/
      ctx[14], false, false, false), listen_dev(input3, "input",
      /*input3_input_handler*/
      ctx[18]), listen_dev(input4, "change",
      /*input4_change_input_handler*/
      ctx[19]), listen_dev(input4, "input",
      /*input4_change_input_handler*/
      ctx[19]), listen_dev(input4, "input",
      /*on_linecap_input*/
      ctx[11], false, false, false), listen_dev(input5, "input",
      /*input5_input_handler*/
      ctx[20]), listen_dev(input6, "change",
      /*input6_change_input_handler*/
      ctx[21]), listen_dev(input6, "input",
      /*input6_change_input_handler*/
      ctx[21]), listen_dev(input6, "input",
      /*on_linejoin_input*/
      ctx[12], false, false, false), listen_dev(input7, "input",
      /*input7_input_handler*/
      ctx[22]), listen_dev(input8, "input",
      /*input8_input_handler*/
      ctx[23]), listen_dev(input9, "input",
      /*input9_input_handler*/
      ctx[24]), listen_dev(input10, "input",
      /*input10_input_handler*/
      ctx[25]), listen_dev(input11, "input",
      /*input11_input_handler*/
      ctx[26])];
    },
    p: function update(ctx, [dirty]) {
      if (dirty &
      /*size_range*/
      256) {
        set_input_value(input0,
        /*size_range*/
        ctx[8]);
      }

      if (dirty &
      /*size*/
      16 && input1.value !==
      /*size*/
      ctx[4]) {
        set_input_value(input1,
        /*size*/
        ctx[4]);
      }

      if (dirty &
      /*width_range*/
      512) {
        set_input_value(input2,
        /*width_range*/
        ctx[9]);
      }

      if (dirty &
      /*width*/
      32 && input3.value !==
      /*width*/
      ctx[5]) {
        set_input_value(input3,
        /*width*/
        ctx[5]);
      }

      if (dirty &
      /*linecap_range*/
      64) {
        set_input_value(input4,
        /*linecap_range*/
        ctx[6]);
      }

      if (dirty &
      /*linecap*/
      4 && input5.value !==
      /*linecap*/
      ctx[2]) {
        set_input_value(input5,
        /*linecap*/
        ctx[2]);
      }

      if (dirty &
      /*linejoin_range*/
      128) {
        set_input_value(input6,
        /*linejoin_range*/
        ctx[7]);
      }

      if (dirty &
      /*linejoin*/
      8 && input7.value !==
      /*linejoin*/
      ctx[3]) {
        set_input_value(input7,
        /*linejoin*/
        ctx[3]);
      }

      if (dirty &
      /*color*/
      1 && input8.value !==
      /*color*/
      ctx[0]) {
        set_input_value(input8,
        /*color*/
        ctx[0]);
      }

      if (dirty &
      /*color*/
      1) {
        set_input_value(input9,
        /*color*/
        ctx[0]);
      }

      if (dirty &
      /*fill*/
      2 && input10.value !==
      /*fill*/
      ctx[1]) {
        set_input_value(input10,
        /*fill*/
        ctx[1]);
      }

      if (dirty &
      /*fill*/
      2) {
        set_input_value(input11,
        /*fill*/
        ctx[1]);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(header);
      if (detaching) detach_dev(t3);
      if (detaching) detach_dev(label0);
      if (detaching) detach_dev(t5);
      if (detaching) detach_dev(div4);
      if (detaching) detach_dev(t8);
      if (detaching) detach_dev(label1);
      if (detaching) detach_dev(t10);
      if (detaching) detach_dev(div7);
      if (detaching) detach_dev(t13);
      if (detaching) detach_dev(label2);
      if (detaching) detach_dev(t15);
      if (detaching) detach_dev(div10);
      if (detaching) detach_dev(t18);
      if (detaching) detach_dev(label3);
      if (detaching) detach_dev(t20);
      if (detaching) detach_dev(div13);
      if (detaching) detach_dev(t23);
      if (detaching) detach_dev(label4);
      if (detaching) detach_dev(t25);
      if (detaching) detach_dev(div16);
      if (detaching) detach_dev(t27);
      if (detaching) detach_dev(label5);
      if (detaching) detach_dev(t29);
      if (detaching) detach_dev(div19);
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

const RANGE_ICON_SIZES = [ICON_SIZES.tiny, ICON_SIZES.small, ICON_SIZES.default, ICON_SIZES.large, ICON_SIZES.huge];
const RANGE_ICON_LINECAP = ["round", "butt", "square"];
const RANGE_ICON_LINEJOIN = ["round", "arcs", "bevel", "miter", "miter-clip"];

function instance($$self, $$props, $$invalidate) {
  let {
    color = "currentColor"
  } = $$props;
  let {
    fill = "none"
  } = $$props;
  let {
    linecap = "round"
  } = $$props;
  let {
    linejoin = "round"
  } = $$props;
  let {
    size = ICON_SIZES.default
  } = $$props;
  let {
    width = "2px"
  } = $$props;
  let linecap_range = "0";
  let linejoin_range = "0";
  let size_range = 2;
  let width_range = "2";

  function on_reset_click(event) {
    $$invalidate(0, color = "currentColor");
    $$invalidate(1, fill = "none");
    $$invalidate(2, linecap = "round");
    $$invalidate(6, linecap_range = "0");
    $$invalidate(3, linejoin = "round");
    $$invalidate(7, linejoin_range = "0");
    $$invalidate(4, size = ICON_SIZES.default);
    $$invalidate(8, size_range = 2);
    $$invalidate(5, width = "2px");
    $$invalidate(9, width_range = "2");
  }

  function on_linecap_input(event) {
    $$invalidate(2, linecap = RANGE_ICON_LINECAP[parseInt(linecap_range)]);
  }

  function on_linejoin_input(event) {
    $$invalidate(3, linejoin = RANGE_ICON_LINEJOIN[parseInt(linejoin_range)]);
  }

  function on_size_input(event) {
    $$invalidate(4, size = RANGE_ICON_SIZES[parseInt(size_range)]);
  }

  function on_width_input(event) {
    $$invalidate(5, width = width_range.toString() + "px");
  }

  const writable_props = ["color", "fill", "linecap", "linejoin", "size", "width"];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<IconEditor> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  validate_slots("IconEditor", $$slots, []);

  function input0_change_input_handler() {
    size_range = to_number(this.value);
    $$invalidate(8, size_range);
  }

  function input1_input_handler() {
    size = this.value;
    $$invalidate(4, size);
  }

  function input2_change_input_handler() {
    width_range = to_number(this.value);
    $$invalidate(9, width_range);
  }

  function input3_input_handler() {
    width = this.value;
    $$invalidate(5, width);
  }

  function input4_change_input_handler() {
    linecap_range = to_number(this.value);
    $$invalidate(6, linecap_range);
  }

  function input5_input_handler() {
    linecap = this.value;
    $$invalidate(2, linecap);
  }

  function input6_change_input_handler() {
    linejoin_range = to_number(this.value);
    $$invalidate(7, linejoin_range);
  }

  function input7_input_handler() {
    linejoin = this.value;
    $$invalidate(3, linejoin);
  }

  function input8_input_handler() {
    color = this.value;
    $$invalidate(0, color);
  }

  function input9_input_handler() {
    color = this.value;
    $$invalidate(0, color);
  }

  function input10_input_handler() {
    fill = this.value;
    $$invalidate(1, fill);
  }

  function input11_input_handler() {
    fill = this.value;
    $$invalidate(1, fill);
  }

  $$self.$set = $$props => {
    if ("color" in $$props) $$invalidate(0, color = $$props.color);
    if ("fill" in $$props) $$invalidate(1, fill = $$props.fill);
    if ("linecap" in $$props) $$invalidate(2, linecap = $$props.linecap);
    if ("linejoin" in $$props) $$invalidate(3, linejoin = $$props.linejoin);
    if ("size" in $$props) $$invalidate(4, size = $$props.size);
    if ("width" in $$props) $$invalidate(5, width = $$props.width);
  };

  $$self.$capture_state = () => ({
    ICON_SIZES,
    RANGE_ICON_SIZES,
    RANGE_ICON_LINECAP,
    RANGE_ICON_LINEJOIN,
    color,
    fill,
    linecap,
    linejoin,
    size,
    width,
    linecap_range,
    linejoin_range,
    size_range,
    width_range,
    on_reset_click,
    on_linecap_input,
    on_linejoin_input,
    on_size_input,
    on_width_input
  });

  $$self.$inject_state = $$props => {
    if ("color" in $$props) $$invalidate(0, color = $$props.color);
    if ("fill" in $$props) $$invalidate(1, fill = $$props.fill);
    if ("linecap" in $$props) $$invalidate(2, linecap = $$props.linecap);
    if ("linejoin" in $$props) $$invalidate(3, linejoin = $$props.linejoin);
    if ("size" in $$props) $$invalidate(4, size = $$props.size);
    if ("width" in $$props) $$invalidate(5, width = $$props.width);
    if ("linecap_range" in $$props) $$invalidate(6, linecap_range = $$props.linecap_range);
    if ("linejoin_range" in $$props) $$invalidate(7, linejoin_range = $$props.linejoin_range);
    if ("size_range" in $$props) $$invalidate(8, size_range = $$props.size_range);
    if ("width_range" in $$props) $$invalidate(9, width_range = $$props.width_range);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [color, fill, linecap, linejoin, size, width, linecap_range, linejoin_range, size_range, width_range, on_reset_click, on_linecap_input, on_linejoin_input, on_size_input, on_width_input, input0_change_input_handler, input1_input_handler, input2_change_input_handler, input3_input_handler, input4_change_input_handler, input5_input_handler, input6_change_input_handler, input7_input_handler, input8_input_handler, input9_input_handler, input10_input_handler, input11_input_handler];
}

class IconEditor extends SvelteComponentDev {
  constructor(options) {
    super(options);
    if (!document.getElementById("svelte-kfj89x-style")) add_css();
    init(this, options, instance, create_fragment, safe_not_equal, {
      color: 0,
      fill: 1,
      linecap: 2,
      linejoin: 3,
      size: 4,
      width: 5
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "IconEditor",
      options,
      id: create_fragment.name
    });
  }

  get color() {
    throw new Error("<IconEditor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set color(value) {
    throw new Error("<IconEditor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get fill() {
    throw new Error("<IconEditor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set fill(value) {
    throw new Error("<IconEditor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get linecap() {
    throw new Error("<IconEditor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set linecap(value) {
    throw new Error("<IconEditor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get linejoin() {
    throw new Error("<IconEditor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set linejoin(value) {
    throw new Error("<IconEditor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get size() {
    throw new Error("<IconEditor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set size(value) {
    throw new Error("<IconEditor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  get width() {
    throw new Error("<IconEditor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set width(value) {
    throw new Error("<IconEditor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

export default IconEditor;