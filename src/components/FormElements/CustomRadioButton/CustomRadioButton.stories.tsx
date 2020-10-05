import { storiesOf } from "@storybook/react";
import React from "react";

import { CustomRadioButton } from "components/FormElements";

storiesOf("Form Elements/Radio Button", module).add("Default", () => (
  <>
    <CustomRadioButton
      value="warning"
      name="redundancy_policy"
      labelText="Warning"
    />
    <CustomRadioButton
      value="enforce"
      name="redundancy_policy"
      labelText="Enforce"
    />
  </>
));
