import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import SvgIcon from "../SvgIcon.vue";

describe("SvgIcon", () => {
  it("renders properly", () => {
    const wrapper = mount(SvgIcon, { props: { name: "nav-home" } });

    expect(wrapper.html()).toContain('href="#icon-nav-home"');
  });
  it("check color prop", () => {
    const wrapper = mount(SvgIcon, {
      props: { name: "nav-home", color: "red" },
    });

    expect(wrapper.html()).toContain('fill="red"');
  });
  it("check iconClasses prop", () => {
    const wrapper = mount(SvgIcon, {
      props: { name: "nav-home", iconClasses: ["cl-1", "cl-2"] },
    });

    expect(wrapper.html()).toContain('class="cl-1 cl-23"');
  });
});
