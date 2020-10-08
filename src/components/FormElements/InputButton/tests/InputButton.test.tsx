import { mount, shallow } from "enzyme";
import React from "react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import InputButton, { Props } from "../InputButton";
import { StyledInputButton } from "../InputButtonStyles";

import styles from "../../../../styles/values";

describe("input button tests", () => {
  let props: Props;
  const onChangeMethod = jest.fn();
  const onClickMethod = jest.fn();
  const defaultValue = "default test value";
  const newValue = "new test value";
  beforeEach(() => {
    props = {
      disabled: undefined,
      type: undefined,
      id: undefined,
      onChange: onChangeMethod,
      onClick: onClickMethod,
      multiple: undefined,
      accept: undefined,
      value: undefined,
    };
  });

  it("should render default input bar", () => {
    const wrapper = shallow(<InputButton {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render default input bar and click on it", () => {
    const wrapper = shallow(<InputButton {...props} />);
    wrapper.simulate("click");
    expect(onClickMethod).toHaveBeenCalled();
  });

  it("should render default input bar and trigger change method", () => {
    const wrapper = mount(<InputButton {...props} value={defaultValue} />);
    const field = wrapper.find(StyledInputButton);
    field.simulate("change");
    expect(onChangeMethod).toHaveBeenCalled();
  });

  it("should render input bar", () => {
    const wrapper = renderer.create(<StyledInputButton />).toJSON();
    expect(wrapper).toHaveStyleRule("opacity", "1");
    expect(wrapper).toHaveStyleRule(
      "background-color",
      `${styles.color.brand.PRIMARY}`
    );
    expect(wrapper).toHaveStyleRule(
      "background-color",
      `${styles.color.brand.PRIMARY_HOVER}`,
      { modifier: ":hover" }
    );
  });

  it("should render disabled input bar", () => {
    const wrapper = renderer
      .create(<StyledInputButton disabled={true} />)
      .toJSON();
    expect(wrapper).toHaveStyleRule("opacity", "0.6");
    expect(wrapper).toHaveStyleRule(
      "background-color",
      `${styles.color.shade.DARK03}`
    );
    expect(wrapper).toHaveStyleRule(
      "background-color",
      `${styles.color.shade.DARK03}`,
      { modifier: ":hover" }
    );
  });
});
