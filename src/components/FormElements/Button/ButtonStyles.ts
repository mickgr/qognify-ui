import styled, { css } from "styled-components";

import styles from "styles/values";
import { LongTextEllipsis } from "styles/common";

const button = css`
  border-radius: ${styles.borderRadius.SECONDARY};
  transition: ${styles.transition.PRIMARY};
  border: 0;
  text-align: center;
  background-color: ${styles.color.brand.PRIMARY};
  padding: 4px 20px;
  font-family: ${styles.font.PRIMARY};
  font-weight: ${styles.fontWeight.REGULAR};
  font-size: ${styles.typographyScale.TYPE16};
  line-height: ${styles.lineHeight.LHEIGHT1_5};
  display: block;
  cursor: pointer;
`;

const StyledButton = styled.button<{
  disabled?: boolean;
  isPrimary?: boolean;
  width?: string;
}>`
    ${button}
     ${LongTextEllipsis}
    color: ${(props): string =>
      !props.isPrimary ? styles.color.shade.DARK : styles.color.shade.WHITE};
    background-color: ${(props): string =>
      !props.isPrimary
        ? styles.color.shade.TRANSPARENT
        : styles.color.brand.PRIMARY};
    text-decoration: ${(props): string =>
      !props.isPrimary ? "underline" : "none"};
    width: ${(props): string => (props.width ? props.width : "auto")};
    &:hover {
        background-color: ${(props): string =>
          !props.isPrimary
            ? styles.color.shade.TRANSPARENT
            : styles.color.brand.PRIMARY_HOVER};
		color: ${(props): string =>
      !props.isPrimary
        ? styles.color.brand.PRIMARY_HOVER
        : styles.color.shade.WHITE};
		&:active {
			background-color: ${(props): string | null =>
        !props.disabled
          ? !props.isPrimary
            ? styles.color.shade.TRANSPARENT
            : styles.color.brand.PRIMARY
          : null};
			color: ${(props): string | null =>
        !props.disabled
          ? !props.isPrimary
            ? styles.color.shade.DARK
            : styles.color.shade.WHITE
          : null};
		}
	}
    &:hover,
    &:focus {
        outline: 0;
    }
    &:disabled {
    	cursor: default;
    	background-color: ${(props): string =>
        !props.isPrimary
          ? styles.color.shade.TRANSPARENT
          : styles.color.shade.DARK03};
	color: ${(props): string =>
    !props.isPrimary ? styles.color.shade.DARK04 : styles.color.shade.WHITE};
	};
`;

export { StyledButton };
