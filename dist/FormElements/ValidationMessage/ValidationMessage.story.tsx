import React from "react";
import { FormattedMessage } from "react-intl";

import { storiesOf } from "@storybook/react";

import { FormField, ValidationMessage } from "components/FormElements";

import styles from "styles/values";
import { Icon } from "components/common/Icon";

storiesOf("Validation Message/Variants", module).add("Error", () => (
  <ValidationMessage.Wrapper>
    <FormField
      type="text"
      name="address"
      value="storybook"
      onChange={(): boolean => true}
      onBlur={(): boolean => true}
      id="address"
      error
    />
    <ValidationMessage
      id="validationMessage"
      text={<FormattedMessage id="mock_long_message" />}
      icon={
        <Icon
          d={Icon.res.CIRCLE_ERROR}
          color={styles.color.utility.ERROR}
          width={16}
          height={16}
        />
      }
    />
  </ValidationMessage.Wrapper>
));
