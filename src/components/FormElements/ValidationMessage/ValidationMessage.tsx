import React from "react";

import {
  StyledValidation,
  StyledValidationIcon,
  StyledValidationTip,
  StyledValidationWrapper,
} from "./ValidationMessageStyles";
import { ToolTipData } from "../../../styles/common";

export interface Props {
  id: string;
  text: string;
  icon: React.ReactNode;
}

type ValidationMessageType = React.FC<Props> & { Wrapper: React.FC };

const ValidationMessage: ValidationMessageType = ({ icon, text }: Props) => (
  <StyledValidation>
    <StyledValidationTip {...ToolTipData} content={text} placement="right">
      <StyledValidationIcon>{icon}</StyledValidationIcon>
    </StyledValidationTip>
  </StyledValidation>
);

ValidationMessage.Wrapper = StyledValidationWrapper; // for storybook and edge cases
export default ValidationMessage;
