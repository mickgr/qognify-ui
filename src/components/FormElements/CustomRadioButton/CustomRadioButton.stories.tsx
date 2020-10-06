import React from "react";
import { Meta, Story } from "@storybook/react";

import { CustomRadioButton } from "components/FormElements";
import { Props } from "./CustomRadioButton";

export default {
  title: "Form Elements/Radio Button",
  component: CustomRadioButton,
  args: {
    value: "Option1",
    name: "options",
    labelText: "Option 1",
  },
} as Meta;

const Template: Story<Props> = (args) => <CustomRadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};
export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  checked: true,
  disabled: true,
};

export const Multiple = (
  args: JSX.IntrinsicAttributes & Props & { children?: React.ReactNode }
) => (
  <>
    <CustomRadioButton {...args} />
    <CustomRadioButton value="Option2" name="options" labelText="Option 2" />
  </>
);

// storiesOf("Form Elements/Radio Button", module).add("Default", () => (
//   <>
//     <CustomRadioButton
//       value="warning"
//       name="redundancy_policy"
//       labelText="Warning"
//     />
//     <CustomRadioButton
//       value="enforce"
//       name="redundancy_policy"
//       labelText="Enforce"
//     />
//   </>
// ));
