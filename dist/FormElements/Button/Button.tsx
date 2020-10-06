import React from "react";

import { StyledButton } from "./ButtonStyles";
export interface Props {
  text: React.ReactNode;
  disabled?: boolean;
  id?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isPrimary?: boolean;
  width?: string;
}

const Button = ({
  text,
  disabled = false,
  id,
  onClick,
  isPrimary,
  width,
}: Props): JSX.Element => (
  <StyledButton
    {...{ disabled, id, isPrimary, width }}
    onClick={onClick || undefined}>
    {text}
  </StyledButton>
);

export default Button;
