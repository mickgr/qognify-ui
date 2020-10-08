import { mount, shallow } from "enzyme";
import React from "react";
import "jest-styled-components";

import CustomRadioButton, { Props } from "../CustomRadioButton";
import styles from "styles/values";

describe("Custom radio button test", () => {
  let props: Props;
  beforeEach(() => {
    props = {
      labelText: "Option 1",
      value: "option1",
      name: "options",
    };
  });

  it("should render custom radio button ok", () => {
    const wrapper = shallow(<CustomRadioButton {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render custom radio button with proper props and sub elements", () => {
    const wrapper = mount(<CustomRadioButton {...props} />);
    const input = wrapper.find("input");
    expect(input.exists()).toBe(true);
    const label = wrapper.find("label");
    expect(label.exists()).toBe(true);
    expect((input.props() as any).type).toEqual("radio");
    expect((input.props() as any).id).toEqual(props.name + props.value);
    expect((input.props() as any).name).toEqual(props.name);
    expect((input.props() as any).value).toEqual(props.value);

    expect(label).toHaveStyleRule("color", `${styles.color.shade.DARK06}`);
    expect(label).toHaveStyleRule("pointer-events", "auto");
  });

  it("should render disabled custom radio button", () => {
    const wrapper = mount(<CustomRadioButton {...props} disabled={true} />);
    const input = wrapper.find("input");
    const label = wrapper.find("label");
    expect((input.props() as any).disabled).toEqual(true);

    expect(label).toHaveStyleRule("color", `${styles.color.shade.DARK04}`);
    expect(label).toHaveStyleRule("pointer-events", "none");
  });
});
