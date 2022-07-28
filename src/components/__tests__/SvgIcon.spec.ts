import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import SvgIcon from "../SvgIcon.vue";

describe("SvgIcon", () => {
  it("renders properly", () => {
    const wrapper = mount(SvgIcon, { props: { name: "nav-home" } });

    expect(wrapper.html()).toContain('href="#icon-nav-home"');
  });
  it("props", () => {
    const wrapper = mount(SvgIcon, {
      props: { name: "nav-home", color: "red", iconClasses: ["cl-1", "cl-2"] },
    });

    expect(wrapper.props()).toStrictEqual({
      name: "nav-home",
      color: "red",
      iconClasses: ["cl-1", "cl-2"],
    });
  });
  it("render with color prop", () => {
    const wrapper = mount(SvgIcon, {
      props: { name: "nav-home", color: "red" },
    });

    expect(wrapper.html()).toContain('fill="red"');
  });
  it("render with iconClasses prop", () => {
    const wrapper = mount(SvgIcon, {
      props: { name: "nav-home", iconClasses: ["cl-1", "cl-2"] },
    });

    expect(wrapper.classes()).toStrictEqual(["cl-1", "cl-2"]);
  });
});
