import React from "react";
import { Meta, Story } from "@storybook/react";
import { State, Store } from "@sambego/storybook-state";

import { action } from "@storybook/addon-actions";
import { Icon } from "../..";

import { DropdownButton, DropdownItemType } from "..";
import { DropdownItemModel } from "./DropdownItem";
import { Props, SelectionMode } from "./DropdownButton";

const options: DropdownItemModel[] = [
  {
    id: "sag345rqwe",
    text: "Option 1",
    type: DropdownItemType.Option,
  },
  {
    id: "sa23412dfe",
    text: "Option 2",
    type: DropdownItemType.Option,
  },
  {
    id: "asdf235we",
    text: "Option 3",
    type: DropdownItemType.Option,
  },
];

// Special stateful component to be used to demonstrate stateful actions
const store = new Store({
  selected: new Set<string>(),
});
const MultiSelectComp = () => (
  <div>
    <State store={store}>
      {(state) => [
        <DropdownButton
          key="dropdown"
          items={options}
          text={"Dropdown Button"}
          selectionMode={SelectionMode.MultiSelect}
          selectedIds={state.selected}
          setSelectedIds={(selectedOptions) => {
            if (selectedOptions) {
              store.set({ selected: selectedOptions });
            } else {
              store.set({ selected: new Set<string>() });
            }
          }}
        />,
      ]}
    </State>
  </div>
);
const MultiStateSingleSelectComp = () => (
  <div>
    <State store={store}>
      {(state) => [
        <DropdownButton
          key="dropdown"
          items={options}
          text={"Sort By"}
          icon={<Icon d={Icon.res.SORT_BY} />}
          selectionMode={SelectionMode.MultiStateSingleSelect}
          selectedIds={state.selected}
          isShowArrowIcon={true}
          setSelectedIds={(selectedOptions) => {
            if (selectedOptions) {
              store.set({ selected: selectedOptions });
            } else {
              store.set({ selected: new Set<string>() });
            }
          }}
          onMultiStateSingleSelectItemClicked={() => {}}
        />,
      ]}
    </State>
  </div>
);

const selectedOption = new Set<string>();
selectedOption.add("sa23412dfe");

const selectedOptions = new Set<string>();
selectedOptions.add("sa23412dfe");
selectedOptions.add("asdf235we");

export default {
  title: "Form Elements/Dropdown Button",
  component: DropdownButton,
  args: {
    items: options,
    text: "Dropdown Button",
    selectedIds: new Set<string>(),
    setSelectedIds: () => {},
  },
} as Meta;

const Template: Story<Props> = (args) => <DropdownButton {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const MultiSelect = () => <MultiSelectComp />;

//todo - MultiStateSingleSelect - move the arrows logic to the component.

export const MultiStateSingleSelect = Template.bind({});
MultiStateSingleSelect.args = {
  selectionMode: SelectionMode.MultiStateSingleSelect,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Selected = Template.bind({});
Selected.args = {
  selectedIds: selectedOption,
};

export const SelectedMany = Template.bind({});
SelectedMany.args = {
  selectedIds: selectedOptions,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: null,
  icon: <Icon d={Icon.res.SORT_BY} />,
};

//todo - without clear

//todo - with different clear text
