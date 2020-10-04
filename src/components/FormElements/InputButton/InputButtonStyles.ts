import styled, { css } from 'styled-components';

import styles from 'styles/values';
import { LongTextEllipsis } from 'styles/common';

const button = css`
    border-radius: ${styles.borderRadius.SECONDARY};
    transition: ${styles.transition.PRIMARY};
    border: 0;
    text-align: center;
`;

const StyledInputButtonText = styled.span`
    ${LongTextEllipsis}
    margin: 0 8px;
`;
const StyledInputButton = styled.div<{ disabled?: boolean }>`
    ${button};
    opacity: ${(props): number => (props.disabled ? 0.6 : 1)};
    color: ${styles.color.shade.WHITE};
    background-color: ${(props): string => (props.disabled ? styles.color.shade.DARK03 : styles.color.brand.PRIMARY)};
    padding: 8px 42px;
    font-weight: ${styles.fontWeight.REGULAR};
    font-size: ${styles.typographyScale.TYPE16};
    line-height: ${styles.lineHeight.LHEIGHT1_5};
    display: block;
    cursor: pointer;
    transition: ${styles.transition.PRIMARY};
    align-self: baseline;
    &:hover {
        background-color: ${(props): string =>
            props.disabled ? styles.color.shade.DARK03 : styles.color.brand.PRIMARY_HOVER};
    }
    &:hover,
    &:focus {
        outline: 0;
    }
`;

export { StyledInputButton, StyledInputButtonText };
