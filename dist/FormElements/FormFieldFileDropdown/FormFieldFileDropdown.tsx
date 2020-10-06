import { Icon } from "components/common/Icon";
import React, { ChangeEvent, FocusEvent } from "react";

import styles from "styles/values";

import {
  StyledFormDropdownList,
  StyledFormDropdownListItem,
  StyledFormFieldDropdown,
  StyledFormFieldDropdownWrapper,
} from "./FormFieldFileDropdownStyles";

interface Option {
  id: string;
  option: string;
}

export interface Props {
  small?: boolean;
  medium?: boolean;
  disabled?: boolean;
  value?: string;
  name: string;
  id: string;
  // TODO: this is obviously a mock void, temporary here and event assigned to any type to be compatible with input field
  onChange: (e: ChangeEvent) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  options: Option[];
  onClick: () => void;
  accept?: string;
  multiple?: boolean;
}

const FormFieldFileDropdown: React.FC<Props> = ({
  disabled = false,
  value,
  name,
  id,
  onChange,
  onBlur,
  small,
  medium,
  options,
  onClick,
  accept,
  multiple,
}: Props) => (
  <StyledFormFieldDropdownWrapper>
    <StyledFormFieldDropdown
      small={small}
      medium={medium}
      value={value}
      name={name}
      id={id}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      accept={accept}
      multiple={multiple}
    />
    <StyledFormDropdownList>
      {options.map((option) => (
        <StyledFormDropdownListItem key={option.id} onClick={onClick}>
          {option.option}
        </StyledFormDropdownListItem>
      ))}
    </StyledFormDropdownList>

    <Icon
      d={Icon.res.DROPDOWN_CHEVRON}
      color={styles.color.shade.DARK}
      height={8}
      width={8}
    />
  </StyledFormFieldDropdownWrapper>
);

export default FormFieldFileDropdown;
