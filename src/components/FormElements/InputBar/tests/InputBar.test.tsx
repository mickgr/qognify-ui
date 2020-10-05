import { shallow } from "enzyme";
import React from "react";
import "jest-styled-components";

import InputBar, { Props } from "../InputBar";

describe("input bar tests", () => {
  let props: Props;
  const onChangeMethod = jest.fn();
  const onBlurMethod = jest.fn();
  beforeEach(() => {
    props = {
      disabled: undefined,
      type: undefined,
      text: undefined,
      afterText: undefined,
      onChange: onChangeMethod,
      onBlur: onBlurMethod,
    };
  });

  it("should render default input bar", () => {
    const wrapper = shallow(<InputBar {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render default input bar", () => {
    const wrapper = shallow(<InputBar {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render default input bar with after text", () => {
    const wrapper = shallow(<InputBar {...props} afterText="loading" />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render default input bar with text", () => {
    const wrapper = shallow(<InputBar {...props} text="loading" />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render default input bar of type number", () => {
    const wrapper = shallow(<InputBar {...props} type={"number"} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render disabled input bar", () => {
    const wrapper = shallow(<InputBar {...props} disabled={true} />);
    expect(wrapper.exists()).toBe(true);
  });
});
