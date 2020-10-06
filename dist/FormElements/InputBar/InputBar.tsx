import React from "react";

import { FormField } from "components/FormElements";

import { StyledInputBar, StyledInputTitle } from "./InputBarStyles";

export interface Props {
  text?: React.ReactNode;
  afterText?: React.ReactNode;
  disabled?: boolean;
  type?: string;
  onChange?: () => void;
  onBlur?: () => void;
}

const InputBar: React.FC<Props> = ({
  afterText,
  text,
  disabled,
  type = "text",
  onChange,
  onBlur,
}: Props) => (
  <StyledInputBar>
    {!!text && <StyledInputTitle>{text}</StyledInputTitle>}
    <FormField
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      name="machines_redundancy_retention"
      id="machines_redundancy_retention"
    />
    {!!afterText && <StyledInputTitle>{afterText}</StyledInputTitle>}
  </StyledInputBar>
);

export default InputBar;
