import { shallow } from "enzyme";
import React from "react";
import "jest-styled-components";

import InputNumberStepper, { Props } from "../InputNumberStepper";
import {
  StyledInputNumberStepperMinus,
  StyledInputNumberStepperPlus,
} from "../InputNumberStepperStyles";
import { FormField } from "../../FormField";

describe("input number stepper tests", () => {
  let props: Props;
  const defaultStep = 1;
  const defaultValue = 4;
  const minValue = 2;
  const onChangeMethod = jest.fn();

  beforeEach(() => {
    props = {
      maxValue: undefined,
      minValue: minValue,
      step: defaultStep,
      onChange: onChangeMethod,
      value: defaultValue,
    };
  });

  it("should render default input number stepper", () => {
    const wrapper = shallow(<InputNumberStepper {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render default input number stepper with undefined step", () => {
    const wrapper = shallow(<InputNumberStepper {...props} step={undefined} />);
    expect(wrapper.find(FormField).prop("step")).toEqual(defaultStep);
  });

  it("should render default input number stepper with undefined minValue", () => {
    const wrapper = shallow(
      <InputNumberStepper {...props} minValue={undefined} />
    );
    expect(wrapper.find(FormField).prop("minValue")).toEqual(0);
  });

  it("should simulate click on minus stepper", () => {
    const wrapper = shallow(<InputNumberStepper {...props} />);
    wrapper.find(StyledInputNumberStepperMinus).simulate("click");
    expect(wrapper.find(FormField).prop("value")).toEqual(defaultValue - 1);
  });

  it("should simulate click on plus stepper", () => {
    const wrapper = shallow(<InputNumberStepper {...props} />);
    wrapper.find(StyledInputNumberStepperPlus).simulate("click");
    expect(wrapper.find(FormField).prop("value")).toEqual(defaultValue + 1);
  });

  it("should simulate click on minus stepper with default step", () => {
    const wrapper = shallow(<InputNumberStepper {...props} step={undefined} />);
    wrapper.find(StyledInputNumberStepperMinus).simulate("click");
    expect(wrapper.find(FormField).prop("value")).toEqual(defaultValue - 1);
  });

  it("should simulate click on plus stepper with default step", () => {
    const wrapper = shallow(<InputNumberStepper {...props} step={undefined} />);
    wrapper.find(StyledInputNumberStepperPlus).simulate("click");
    expect(wrapper.find(FormField).prop("value")).toEqual(defaultValue + 1);
  });
});
