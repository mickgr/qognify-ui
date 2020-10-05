import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { DropdownButton } from "components/FormElements";
import { Icon } from "components/common/Icon";
import {
  DropdownItemModel,
  DropdownItemType,
} from "components/FormElements/DropdownButton/DropdownItem";

const options: DropdownItemModel[] = [
  {
    id: "sag345rqwe",
    text: "Israel",
    type: DropdownItemType.Option,
  },
  {
    id: "sa23412dfe",
    text: "Germany",
    type: DropdownItemType.Option,
  },
  {
    id: "asdf235we",
    text: "Croatia",
    type: DropdownItemType.Option,
  },
];

storiesOf("Form Elements/Dropdown Button", module).add("Default", () => (
  <DropdownButton
    onSelectionChanged={action("it should open now")}
    icon={<Icon d={Icon.res.ADD} />}
    items={options}
    text="Droppy"
    selectedIds={new Set<string>()}
    setSelectedIds={() => {}}
  />
));
