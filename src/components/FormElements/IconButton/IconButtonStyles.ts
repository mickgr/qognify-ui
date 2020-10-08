import styled, { css } from "styled-components";

import styles from "../../../styles/values";
import { LongTextEllipsis } from "../../../styles/common";

const buttonReset = css`
  border-radius: ${styles.borderRadius.SECONDARY};
  transition: ${styles.transition.PRIMARY};
  border: 0;
  text-align: center;
  padding: 7px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover,
  :focus {
    outline: 0;
  }
`;

const StyledIconButton = styled.button<{
  disabled?: boolean;
  isSecondaryButton: boolean;
  text: boolean;
  rotateIcon?: boolean;
}>`
    ${buttonReset};
    ${LongTextEllipsis} 
    font-weight: ${(props): number | false =>
      props.text && styles.fontWeight.REGULAR};
    font-size: ${(props): string | false =>
      props.text && styles.typographyScale.TYPE16};
    line-height: ${(props): number | false =>
      props.text && styles.lineHeight.LHEIGHT1_5};
    font-family: ${styles.font.PRIMARY};
    color: ${styles.color.shade.DARK};
    background-color: ${styles.color.shade.TRANSPARENT};
    text-decoration: ${(props): string =>
      props.isSecondaryButton ? "underline" : "none"};
    min-width: 0;
    &:hover {
        background-color: ${(props): string =>
          props.isSecondaryButton
            ? styles.color.shade.TRANSPARENT
            : styles.color.shade.DARK01};
        color: ${(props): string =>
          props.isSecondaryButton
            ? styles.color.brand.PRIMARY_HOVER
            : styles.color.shade.DARK};
        &:active {
            background-color: ${(props): string | null =>
              !props.disabled
                ? props.isSecondaryButton
                  ? styles.color.shade.TRANSPARENT
                  : styles.color.shade.DARK01
                : null};
            color: ${(props): string | null =>
              !props.disabled
                ? props.isSecondaryButton
                  ? styles.color.shade.DARK
                  : styles.color.shade.DARK
                : null};
        }
    }
    &:hover,
    &:focus {
        outline: 0;
    }
    &:disabled {
        cursor: default;
        background-color: ${styles.color.shade.TRANSPARENT};
        color: ${(props): string =>
          props.isSecondaryButton
            ? styles.color.shade.DARK03
            : styles.color.shade.DARK03};
    }
    svg {
        path {
            fill: ${styles.color.shade.DARK};
        }
        transform: rotateZ(${(props): string =>
          props.rotateIcon ? "90deg" : "0deg"});
        flex: 1 100 auto;
    }
    span {
    }
`;
const StyledIconButtonText = styled.span`
  ${LongTextEllipsis}
`;

const StyledIconButtonIcon = styled.div<{ disabled: boolean }>`
  opacity: ${(props): number => (props.disabled ? 0.4 : 1)};
`;

const StyledIconButtonWrapper = styled.div`
  margin-bottom: 16px;
`;

export {
  StyledIconButtonWrapper,
  StyledIconButtonText,
  StyledIconButton,
  StyledIconButtonIcon,
};
