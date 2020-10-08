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
Default.args = {
  isPrimary: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
  isPrimary: true,
  disabled: true,
};
export const Secondary = Template.bind({});
Secondary.args = {};
export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  disabled: true,
};
