import React from 'react';

import { StyledInputButton, StyledInputButtonText } from './InputButtonStyles';

export interface Props {
    disabled?: boolean;
    type?: 'button' | 'reset' | 'submit' | 'file';
    id?: string;
    onChange?: () => void;
    onClick?: () => void;
    multiple?: boolean;
    accept?: string;
    value?: string | number;
    className?: string;
}

const InputButton: React.FC<Props> = ({
    disabled = false,
    id,
    onClick,
    onChange,
    value,
    accept,
    multiple,
    className,
}: Props) => (
    <StyledInputButton {...{ disabled, id, accept, multiple, onClick, onChange, className }}>
        {!!value && <StyledInputButtonText>{value}</StyledInputButtonText>}
    </StyledInputButton>
);

InputButton.displayName = 'InputButton';

export default InputButton;
