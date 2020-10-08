import { action } from "@storybook/addon-actions";
import { Meta, storiesOf, Story } from "@storybook/react";
import React from "react";

import { Checkbox } from "..";
import { Props } from "./Checkbox";

export default {
  title: "Form Elements/Checkbox",
  component: Checkbox,
} as Meta;

const Template: Story<Props> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
};

export const SemiSelected = Template.bind({});
SemiSelected.args = {
  semiSelected: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  selected: true,
  disabled: true,
};
