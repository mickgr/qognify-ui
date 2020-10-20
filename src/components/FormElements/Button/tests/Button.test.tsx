import { mount } from "enzyme";
import React from "react";

import "jest-styled-components";
import styles from "../../../../styles/values";
import Button, { Props } from "../Button";

describe("Button test", () => {
  let props: Props;
  beforeEach(() => {
    props = {
      text: "loading",
      disabled: undefined,
      id: undefined,
      isPrimary: undefined,
    };
  });

  it("should render Button", () => {
    const wrapper = mount(<Button {...props} />);
    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe("loading");
  });

  it("should render Button with id", () => {
    const wrapper = mount(<Button {...props} id={"sadf785sasf"} />);
    const button = wrapper.find("button");
    expect((button.props() as any).id).toEqual("sadf785sasf");
  });

  it("should render primary button by default", () => {
    const wrapper = mount(<Button {...props} />);
    const button = wrapper.find("button");

    expect(button).toHaveStyleRule(
      "background-color",
      `${styles.color.brand.PRIMARY}`
    );
    expect(button).toHaveStyleRule("text-decoration", "none");
  });
  it("should render enabled button by default", () => {
    const wrapper = mount(<Button {...props} />);
    const button = wrapper.find("button");
    expect((button.props() as any).disabled).not.toEqual(true);
  });
  it("should render secondary button ", () => {
    const wrapper = mount(<Button {...props} isPrimary={false} />);
    const button = wrapper.find("button");

    expect(button).toHaveStyleRule(
      "background-color",
      `${styles.color.shade.TRANSPARENT}`
    );
    expect(button).toHaveStyleRule("text-decoration", "underline");
  });

  it("should render disabled Button", () => {
    const wrapper = mount(<Button {...props} disabled={true} />);
    const button = wrapper.find("button");
    expect((button.props() as any).disabled).toEqual(true);

    expect(button).toHaveStyleRule(
      "background-color",
      `${styles.color.shade.DARK03}`,
      { modifier: ":disabled" }
    );
    expect(button).toHaveStyleRule("color", `${styles.color.shade.WHITE}`, {
      modifier: ":disabled",
    });
  });
  it("should render disabled secondary Button", () => {
    const wrapper = mount(
      <Button {...props} isPrimary={false} disabled={true} />
    );
    const button = wrapper.find("button");
    expect((button.props() as any).disabled).toEqual(true);

    expect(button).toHaveStyleRule(
      "background-color",
      `${styles.color.shade.TRANSPARENT}`,
      { modifier: ":disabled" }
    );
    expect(button).toHaveStyleRule("text-decoration", "underline");

    expect(button).toHaveStyleRule("color", `${styles.color.shade.DARK04}`, {
      modifier: ":disabled",
    });
  });
  it("should have width", () => {
    const wrapper = mount(<Button {...props} width="123px" />);
    const button = wrapper.find("button");
    expect((button.props() as any).width).toEqual("123px");
  });
  it("should expose onClick event", () => {
    const onClickMethod = jest.fn();
    const wrapper = mount(<Button {...props} onClick={onClickMethod} />);
    wrapper.find("button").simulate("click");
    expect(onClickMethod).toBeCalled();
  });
});
