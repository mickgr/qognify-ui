import { mount, shallow } from "enzyme";
import React from "react";
import "jest-styled-components";

import IconInputButton, { Props } from "../IconInputButton";
import { StyledIconInputButton } from "../IconInputButtonStyles";

import styles from "styles/values";
import { Icon } from "components/common/Icon";

describe("icon input button tests", () => {
  let props: Props;
  const onClickMethod = jest.fn();
  const onChangeMethod = jest.fn();

  beforeEach(() => {
    props = {
      disabled: undefined,
      type: undefined,
      id: undefined,
      accept: undefined,
      multiple: undefined,
      icon: <Icon d={Icon.res.REFRESH} />,
      text: "loading",
      onClick: onClickMethod,
      onChange: onChangeMethod,
    };
  });

  it("should render default icon input button", () => {
    const wrapper = shallow(<IconInputButton {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render default icon input button and perform change", () => {
    const wrapper = mount(<IconInputButton {...props} />);
    wrapper.find(StyledIconInputButton).props().onChange();
    wrapper.simulate("change");
    expect(onChangeMethod).toHaveBeenCalled();
  });

  // TODO: Designs have changed - revive later
  // it('should render default StyledIconInputButtonLabel', () => {
  // 	const wrapper = renderer.create(<StyledIconInputButtonLabel />).toJSON();
  // 	expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.DARK}`);
  // });

  // TODO: Designs have changed - revive later
  // it('should render disabled StyledIconInputButtonLabel', () => {
  // 	const wrapper = renderer.create(<StyledIconInputButtonLabel disabled={true} />).toJSON();
  // 	expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.DARK04}`);
  // });
});
