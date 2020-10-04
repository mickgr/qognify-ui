import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Checkbox } from "components/FormElements";

const selected = true;
const semiSelected = true;

storiesOf("Checkbox/Variants", module).add("Default", () => (
  <Checkbox
    selected={selected}
    semiSelected={semiSelected}
    onChange={action("check that checkbox")}
  />
));
