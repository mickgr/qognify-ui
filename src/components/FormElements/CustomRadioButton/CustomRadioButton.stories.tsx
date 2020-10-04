import { storiesOf } from "@storybook/react";
import React from "react";
import { FormattedMessage } from "react-intl";

import { CustomRadioButton } from "components/FormElements";

storiesOf("Radio Button/Variants", module).add("Default", () => (
  <>
    <CustomRadioButton
      value="warning"
      name="redundancy_policy"
      labelText={<FormattedMessage id="machine_redundancy_policy_warning" />}
    />
    <CustomRadioButton
      value="enforce"
      name="redundancy_policy"
      labelText={<FormattedMessage id="machine_redundancy_policy_enforce" />}
    />
  </>
));
