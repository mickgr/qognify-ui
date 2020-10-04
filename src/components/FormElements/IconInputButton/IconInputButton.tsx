import React from "react";
import { useIntl } from "react-intl";

import {
  StyledIconInputButton,
  StyledIconInputButtonLabel,
  StyledEllipsisText,
} from "./IconInputButtonStyles";

export interface Props {
  disabled?: boolean;
  type?: "button" | "reset" | "submit" | "file";
  id?: string;
  accept?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  multiple?: boolean;
  icon: React.ReactNode;
  text: React.ReactNode;
  error?: boolean;
}

const IconInputButton: React.FC<Props> = ({
  disabled,
  type,
  id,
  onClick,
  onChange,
  accept,
  multiple,
  icon,
  text,
  error = false,
}: Props) => {
  const intl = useIntl();

  return (
    <StyledIconInputButtonLabel error={error}>
      <StyledIconInputButton
        disabled={disabled}
        type={type}
        id={id}
        accept={accept}
        multiple={multiple}
        onClick={onClick || undefined}
        onChange={onChange}
      />
      <StyledEllipsisText id="certificateName">{text}</StyledEllipsisText>
      {icon}
    </StyledIconInputButtonLabel>
  );
};

export default IconInputButton;
