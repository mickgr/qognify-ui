import { mount, shallow } from "enzyme";
import React from "react";

import renderer from "react-test-renderer";
import "jest-styled-components";

import styles from "../../../../styles/values";

import Checkbox, { Props } from "../Checkbox";
import {
  StyledCheckbox,
  StyledCheckboxIcon,
  StyledCheckboxLabel,
} from "../CheckboxStyles";

describe("Checkbox test", () => {
  let props: Props;
  const onChangeMethod = jest.fn();
  beforeEach(() => {
    props = {
      selected: false,
      semiSelected: false,
      onChange: onChangeMethod,
      id: undefined,
    };
  });

  it("should render Checkbox", () => {
    const wrapper = shallow(<Checkbox {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render Checkbox with id", () => {
    const wrapper = shallow(<Checkbox {...props} id={"rnd2323"} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should simulate click on Checkbox", () => {
    const wrapper = shallow(<Checkbox {...props} />);
    wrapper.find(StyledCheckbox).simulate("change");
    expect(onChangeMethod).toHaveBeenCalled();
  });

  it("should render ok selected checkbox", () => {
    const wrapper = shallow(<Checkbox {...props} selected={true} />);
    expect(wrapper.exists()).toBe(true);
  });
  it("should render ok semi selected checkbox", () => {
    const wrapper = shallow(<Checkbox {...props} semiSelected={true} />);
    expect(wrapper.exists()).toBe(true);
  });
  it("should render ok disabled checkbox", () => {
    const wrapper = shallow(<Checkbox {...props} disabled={true} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should not render not selected checkbox icon", () => {
    const wrapper = shallow(<Checkbox {...props} />);
    expect(wrapper.find(StyledCheckboxIcon)).toHaveLength(0);

    expect(wrapper.find(StyledCheckboxLabel)).toHaveStyleRule(
      "background",
      "none"
    );
  });
  it("should render selected checkbox icon", () => {
    const wrapper = mount(<Checkbox {...props} selected={true} />);
    expect(wrapper.find(StyledCheckboxIcon).prop("src")).toEqual(
      styles.icon.checkmark_white
    );
    expect(wrapper.find(StyledCheckboxLabel)).toHaveStyleRule(
      "border",
      `1px solid ${styles.color.brand.PRIMARY}`
    );
    expect(wrapper.find(StyledCheckboxLabel)).toHaveStyleRule(
      "background",
      `${styles.color.brand.PRIMARY}`
    );
  });

  it("should render semiSelected checkbox icon", () => {
    const wrapper = shallow(<Checkbox {...props} semiSelected={true} />);
    expect(wrapper.find(StyledCheckboxIcon).prop("src")).toEqual(
      styles.icon.semi_selected
    );

    expect(wrapper.find(StyledCheckboxLabel)).toHaveStyleRule(
      "border",
      `1px solid ${styles.color.brand.PRIMARY}`
    );
    expect(wrapper.find(StyledCheckboxLabel)).toHaveStyleRule(
      "background",
      `${styles.color.brand.PRIMARY}`
    );
  });
});
