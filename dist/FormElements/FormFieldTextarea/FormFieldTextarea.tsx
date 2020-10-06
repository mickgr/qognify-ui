import React, { ChangeEvent, FocusEvent } from 'react';

import { StyledFormFieldTextarea } from './FormFieldTextareaStyles';

export interface Props {
    small?: boolean;
    medium?: boolean;
    disabled?: boolean;
    value?: string;
    name: string;
    id: string;
    onChange: (e: ChangeEvent) => void;
    onBlur: (e: FocusEvent) => void;
    error?: boolean;
}

const FormFieldTextarea: React.FC<Props> = ({
    disabled = false,
    error = false,
    value,
    name,
    id,
    onChange,
    onBlur,
    small,
    medium,
}: Props) => (
    <StyledFormFieldTextarea
        small={small}
        medium={medium}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        rows={3}
        disabled={disabled}
        error={error}
    />
);

export default FormFieldTextarea;
