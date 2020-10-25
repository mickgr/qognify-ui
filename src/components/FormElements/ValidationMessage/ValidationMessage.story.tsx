import React from "react";

import { storiesOf } from "@storybook/react";

import { FormField, ValidationMessage } from "..";

import styles from "../../../styles/values";
import { Icon } from "../..";

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
      text={"change!!!"}
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
