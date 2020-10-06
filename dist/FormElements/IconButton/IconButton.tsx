import React, { MouseEvent } from 'react';

import { StyledIconButton, StyledIconButtonIcon, StyledIconButtonText } from './IconButtonStyles';

export interface Props {
    id?: string;
    disabled?: boolean;
    onClick?: () => void;
    icon: React.ReactNode;
    text?: React.ReactNode;
    isSecondaryIcon?: boolean;
    isSecondaryButton?: boolean;
    rotateIcon?: boolean;
    className?: string;
}

const IconButton: React.FC<Props> = ({
    disabled = false,
    onClick,
    icon,
    text,
    isSecondaryIcon = false,
    isSecondaryButton = false,
    rotateIcon,
    className,
    id,
}: Props) => (
    <StyledIconButton
        id={id}
        onClick={(e: MouseEvent): void => {
            e.preventDefault();
            e.stopPropagation();
            onClick && !disabled && onClick();
        }}
        text={!!text}
        {...{ disabled, isSecondaryButton, rotateIcon, className }}
    >
        {!isSecondaryIcon && <StyledIconButtonIcon disabled={disabled}>{icon}</StyledIconButtonIcon>}
        {!!text && <StyledIconButtonText>{text}</StyledIconButtonText>}
        {isSecondaryIcon && <StyledIconButtonIcon disabled={disabled}>{icon}</StyledIconButtonIcon>}
    </StyledIconButton>
);

IconButton.displayName = 'IconButton';

export default IconButton;
