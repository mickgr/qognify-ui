import React from 'react';

import { StyledCustomRadioButton, StyledCustomRadioButtonLabel } from './CustomRadioButtonStyles';

export interface Props {
    value: string;
    name: string;
    labelText: React.ReactNode;
    disabled?: boolean;
    checked?: boolean;
}

const CustomRadioButton: React.FC<Props> = ({ value, name, labelText, disabled, checked }) => (
    <>
        <StyledCustomRadioButton
            checked={checked}
            id={name + value}
            name={name}
            value={value}
            type="radio"
            disabled={disabled}
        />
        <StyledCustomRadioButtonLabel htmlFor={name + value} disabled={disabled}>
            {labelText}
        </StyledCustomRadioButtonLabel>
    </>
);
export default CustomRadioButton;
