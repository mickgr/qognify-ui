import React from 'react';

import { StyledButton } from './ButtonStyles';
export interface Props {
    text: React.ReactNode;
    disabled?: boolean;
    type?: 'button' | 'reset' | 'submit';
    id?: string;
    accept?: string;
    onChange?: (e: Event) => void;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    multiple?: boolean;
    value?: string;
    isPrimary?: boolean;
    width?: string;
}

const Button = ({ text, disabled = false, type, id, onClick, value, isPrimary, width }: Props): JSX.Element => (
    <StyledButton {...{ disabled, type, id, value, isPrimary, width }} onClick={onClick || undefined}>
        {text}
    </StyledButton>
);

export default Button;
