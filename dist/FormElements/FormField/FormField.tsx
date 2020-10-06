import React, { ChangeEvent, FocusEvent } from 'react';

import { StyledFormField, StyledFormFieldWrapper } from './FormFieldStyles';

export interface Props {
    small?: boolean;
    medium?: boolean;
    disabled?: boolean;
    value?: string | number | null;
    type: 'email' | 'number' | 'password' | 'search' | 'text' | 'tel' | string;
    name: string;
    id: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent) => void;
    onBlur?: (e: FocusEvent) => void;
    maxValue?: number;
    minValue?: number;
    step?: number;
    error?: boolean;
    button?: React.ReactNode;
    maxLength?: number;
}

const FormField: React.FC<Props> = ({
    disabled = false,
    error = false,
    value,
    type,
    name,
    id,
    placeholder,
    onChange,
    onBlur,
    small,
    step,
    medium,
    minValue,
    maxValue,
    button,
    maxLength,
}: Props) => (
    <StyledFormFieldWrapper>
        <StyledFormField
            small={small}
            medium={medium}
            type={type}
            value={value || ''}
            name={name}
            id={id}
            disabled={disabled}
            onChange={onChange}
            onBlur={onBlur}
            max={maxValue}
            min={minValue}
            step={step}
            error={error}
            button={button}
            placeholder={placeholder}
            maxLength={maxLength}
        />
        {button && button}
    </StyledFormFieldWrapper>
);

FormField.displayName = 'FormField';

export default FormField;
