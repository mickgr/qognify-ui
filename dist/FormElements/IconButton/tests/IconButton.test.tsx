import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import IconButton, { Props } from "../IconButton";
import { StyledIconButton } from "../IconButtonStyles";

import styles from "styles/values";
import { Icon } from "../../..";

describe("icon button tests", () => {
  let props: Props;
  const onClickMethod = jest.fn();

  beforeEach(() => {
    props = {
      disabled: undefined,
      text: undefined,
      isSecondaryButton: undefined,
      isSecondaryIcon: undefined,
      icon: <Icon d={Icon.res.REFRESH} />,
      onClick: onClickMethod,
    };
  });

  it("should render default icon button", () => {
    const wrapper = shallow(<IconButton {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render default icon button with text", () => {
    const wrapper = shallow(<IconButton {...props} text={"loading"} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render icon button with icon on secondary spot", () => {
    const wrapper = shallow(<IconButton {...props} isSecondaryIcon={true} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render default StyledIconButton", () => {
    const wrapper = renderer
      .create(<StyledIconButton isSecondaryButton={false} text={false} />)
      .toJSON();
    expect(wrapper).toHaveStyleRule("text-decoration", "none");
    expect(wrapper).toHaveStyleRule("color", `${styles.color.shade.DARK}`);
    expect(wrapper).toHaveStyleRule(
      "background-color",
      `${styles.color.shade.DARK01}`,
      { modifier: ":hover" }
    );
    expect(wrapper).toHaveStyleRule("color", `${styles.color.shade.DARK}`, {
      modifier: ":hover",
    });
    expect(wrapper).toHaveStyleRule(
      "background-color",
      `${styles.color.shade.DARK01}`,
      { modifier: ":hover:active" }
    );
    expect(wrapper).toHaveStyleRule("color", `${styles.color.shade.DARK}`, {
      modifier: ":hover:active",
    });
    expect(wrapper).toHaveStyleRule("color", `${styles.color.shade.DARK03}`, {
      modifier: ":disabled",
    });
  });

  it("should render disabled StyledIconButton", () => {
    const wrapper = renderer
      .create(
        <StyledIconButton
          disabled={true}
          isSecondaryButton={false}
          text={false}
        />
      )
      .toJSON();
    expect(wrapper).toHaveStyleRule("color", `${styles.color.shade.DARK}`);
  });

  it("should render secondary StyledIconButton", () => {
    const wrapper = renderer
      .create(<StyledIconButton isSecondaryButton={true} text={false} />)
      .toJSON();
    expect(wrapper).toHaveStyleRule("text-decoration", "underline");
    expect(wrapper).toHaveStyleRule("color", `${styles.color.shade.DARK}`);
    expect(wrapper).toHaveStyleRule(
      "background-color",
      `${styles.color.shade.TRANSPARENT}`,
      { modifier: ":hover" }
    );
    expect(wrapper).toHaveStyleRule(
      "color",
      `${styles.color.brand.PRIMARY_HOVER}`,
      { modifier: ":hover" }
    );
    expect(wrapper).toHaveStyleRule(
      "background-color",
      `${styles.color.shade.TRANSPARENT}`,
      { modifier: ":hover:active" }
    );
    expect(wrapper).toHaveStyleRule("color", `${styles.color.shade.DARK}`, {
      modifier: ":hover:active",
    });
    expect(wrapper).toHaveStyleRule("color", `${styles.color.shade.DARK03}`, {
      modifier: ":disabled",
    });
  });

  it("should render default StyledIconButton with text", () => {
    const wrapper = renderer
      .create(<StyledIconButton isSecondaryButton={false} text={true} />)
      .toJSON();
    expect(wrapper).toHaveStyleRule("text-decoration", "none");
    expect(wrapper).toHaveStyleRule("color", `${styles.color.shade.DARK}`);
    expect(wrapper).toHaveStyleRule(
      "background-color",
      `${styles.color.shade.DARK01}`,
      { modifier: ":hover" }
    );
    expect(wrapper).toHaveStyleRule("color", `${styles.color.shade.DARK}`, {
      modifier: ":hover",
    });
    expect(wrapper).toHaveStyleRule(
      "background-color",
      `${styles.color.shade.DARK01}`,
      { modifier: ":hover:active" }
    );
    expect(wrapper).toHaveStyleRule("color", `${styles.color.shade.DARK}`, {
      modifier: ":hover:active",
    });
    expect(wrapper).toHaveStyleRule("color", `${styles.color.shade.DARK03}`, {
      modifier: ":disabled",
    });
    expect(wrapper).toHaveStyleRule(
      "font-weight",
      `${styles.fontWeight.REGULAR}`
    );
    expect(wrapper).toHaveStyleRule(
      "font-size",
      `${styles.typographyScale.TYPE16}`
    );
    expect(wrapper).toHaveStyleRule(
      "line-height",
      `${styles.lineHeight.LHEIGHT1_5}`
    );
  });
});
