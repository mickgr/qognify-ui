import { storiesOf } from "@storybook/react";
import React from "react";

import InputBar from "./InputBar";

storiesOf("Input Bar/Variants", module).add("inline", () => (
  <InputBar text={"change!!!"} disabled={false} afterText={"change!!!"} />
));
