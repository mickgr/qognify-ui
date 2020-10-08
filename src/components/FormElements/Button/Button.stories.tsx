import React from "react";
import { Meta, Story } from "@storybook/react";

import { Button } from "..";
import { Props } from "./Button";

export default {
  title: "Form Elements/Button",
  component: Button,
  args: {
    text: "Button",
  },
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
export const Secondary = Template.bind({});
Secondary.args = {
  isPrimary: false,
};
export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  isPrimary: false,
  disabled: true,
};
