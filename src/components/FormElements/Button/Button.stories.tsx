import React from "react";
import { FormattedMessage } from "react-intl";

import { storiesOf } from "@storybook/react";

import { Button } from "components/FormElements";

storiesOf("Button/Variants", module)
  .add("Default", () => (
    <Button
      isPrimary
      onClick={(): void => {
        alert("hey");
      }}
      text={<FormattedMessage id="storybook_button" />}
    />
  ))
  .add("Disabled", () => (
    <Button
      isPrimary
      onClick={(): void => {
        alert("WTF?");
      }}
      disabled
      text={<FormattedMessage id="storybook_button" />}
    />
  ))
  .add("Secondary", () => (
    <Button
      onClick={(): void => {
        alert("Click my neighbour below, and you will get a prize!");
      }}
      text={<FormattedMessage id="storybook_button" />}
    />
  ))
  .add("Secondary Disabled", () => (
    <Button
      onClick={(): void => {
        alert("No prize :(");
      }}
      disabled
      text={<FormattedMessage id="storybook_button" />}
    />
  ));
