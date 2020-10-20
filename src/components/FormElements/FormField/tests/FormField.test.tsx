import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import FormField, { Props } from "../FormField";
import { StyledFormField } from "../FormFieldStyles";

import styles from "../../../../styles/values";

describe("form field tests", () => {
  let props: Props;
  const onChangeMethod = jest.fn();
  const onBlurMethod = jest.fn();
  beforeEach(() => {
    props = {
      type: "text",
      name: "form field",
      id: "formField123",
      onChange: onChangeMethod,
      onBlur: onBlurMethod,
      small: undefined,
      medium: undefined,
      disabled: undefined,
      value: undefined,
      maxValue: undefined,
      minValue: undefined,
      step: undefined,
      error: undefined,
    };
  });

  it("should render default form field", () => {
    const wrapper = shallow(<FormField {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render default StyledFormField", () => {
    const wrapper = renderer.create(<StyledFormField />).toJSON();
    expect(wrapper).toHaveStyleRule("color", `${styles.color.shade.DARK}`);
    expect(wrapper).toHaveStyleRule(
      "border",
      `1px solid ${styles.color.shade.LIGHT}`
    );
    expect(wrapper).toHaveStyleRule("width", "495px");
    expect(wrapper).toHaveStyleRule(
      "border",
      `1px solid ${styles.color.shade.NEUTRAL}`,
      { modifier: ":hover" }
    );
    expect(wrapper).toHaveStyleRule(
      "border",
      `1px solid ${styles.color.brand.PRIMARY}`,
      { modifier: ":focus" }
    );
  });

  it("should render disabled StyledFormField", () => {
    const wrapper = renderer
      .create(<StyledFormField disabled={true} />)
      .toJSON();
    expect(wrapper).toHaveStyleRule("color", `${styles.color.shade.LIGHT}`);
  });

  it("should render default StyledFormField with error", () => {
    const wrapper = renderer.create(<StyledFormField error={true} />).toJSON();
    expect(wrapper).toHaveStyleRule("color", `${styles.color.shade.DARK}`);
    expect(wrapper).toHaveStyleRule(
      "border",
      `1px solid ${styles.color.utility.ERROR}`
    );
    expect(wrapper).toHaveStyleRule("width", "495px");
    expect(wrapper).toHaveStyleRule(
      "border",
      `1px solid ${styles.color.utility.ERROR}`,
      { modifier: ":hover" }
    );
    expect(wrapper).toHaveStyleRule(
      "border",
      `1px solid ${styles.color.utility.ERROR}`,
      { modifier: ":focus" }
    );
  });

  it("should render default small StyledFormField", () => {
    const wrapper = renderer.create(<StyledFormField small={true} />).toJSON();
    expect(wrapper).toHaveStyleRule("color", `${styles.color.shade.DARK}`);
    expect(wrapper).toHaveStyleRule(
      "border",
      `1px solid ${styles.color.shade.LIGHT}`
    );
    expect(wrapper).toHaveStyleRule("width", "150px");
    expect(wrapper).toHaveStyleRule(
      "border",
      `1px solid ${styles.color.shade.NEUTRAL}`,
      { modifier: ":hover" }
    );
    expect(wrapper).toHaveStyleRule(
      "border",
      `1px solid ${styles.color.brand.PRIMARY}`,
      { modifier: ":focus" }
    );
  });

  it("should render default medium StyledFormField", () => {
    const wrapper = renderer.create(<StyledFormField medium={true} />).toJSON();
    expect(wrapper).toHaveStyleRule("color", `${styles.color.shade.DARK}`);
    expect(wrapper).toHaveStyleRule(
      "border",
      `1px solid ${styles.color.shade.LIGHT}`
    );
    expect(wrapper).toHaveStyleRule("width", "210px");
    expect(wrapper).toHaveStyleRule(
      "border",
      `1px solid ${styles.color.shade.NEUTRAL}`,
      { modifier: ":hover" }
    );
    expect(wrapper).toHaveStyleRule(
      "border",
      `1px solid ${styles.color.brand.PRIMARY}`,
      { modifier: ":focus" }
    );
  });
});
