import React, { ChangeEvent, FocusEvent } from "react";

import { Icon, useDropdownOpenToggle } from "../..";
import styles from "styles/values";
import {
  StyledFormDropdownList,
  StyledFormDropdownListItem,
  StyledFormFieldDropdown,
  StyledFormFieldDropdownWrapper,
} from "./FormFieldDropdownStyles";

export interface Option {
  id: string;
  option: string;
}

export interface Props {
  small?: boolean;
  medium?: boolean;
  matchParent?: boolean;
  disabled?: boolean;
  value?: string;
  name: string;
  id: string;
  onChange?: (e: ChangeEvent) => void;
  onBlur?: (e: FocusEvent) => void;
  options: Option[];
  onClick?: (id: string) => void;
  widthVW?: number;
}

const FormFieldDropdown: React.FC<Props> = ({
  disabled = false,
  value,
  name,
  id,
  onChange,
  small,
  medium,
  matchParent,
  options,
  onClick,
  widthVW,
}: Props) => {
  const [isOpen, setIsOpen, node] = useDropdownOpenToggle();

  const inItemClicked = (itemId: string) => (): void => {
    if (onClick) onClick(itemId);
    setIsOpen(false);
  };

  return (
    <StyledFormFieldDropdownWrapper ref={node} widthVW={widthVW}>
      <StyledFormFieldDropdown
        small={small}
        medium={medium}
        matchParent={matchParent}
        value={value}
        name={name}
        id={id}
        disabled={disabled}
        onChange={onChange ? onChange : undefined}
        onClick={(): void => setIsOpen(true)}
      />
      <StyledFormDropdownList isOpen={isOpen}>
        {options.map((option) => (
          <StyledFormDropdownListItem
            key={option.id}
            onClick={inItemClicked(option.id)}>
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
};

export default FormFieldDropdown;
