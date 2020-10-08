import styled from "styled-components";

import styles from "../../../styles/values";

const StyledCustomRadioButtonLabel = styled.label<{ disabled?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  color: ${(props): string =>
    props.disabled ? styles.color.shade.DARK04 : styles.color.shade.DARK06};
  cursor: pointer;
  pointer-events: ${(props): string => (props.disabled ? "none" : "auto")};
  margin: 0;
  transition: ${styles.transition.PRIMARY};
  :before {
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 8px;
    border: 1px solid ${styles.color.shade.LIGHT};
    border-radius: ${styles.borderRadius.CIRCLE};
    box-sizing: border-box;
    transition: ${styles.transition.PRIMARY};
  }
  :hover {
    color: ${styles.color.shade.DARK08};
    :before {
      border-color: ${styles.color.brand.PRIMARY};
    }
  }
`;

const StyledCustomRadioButton = styled.input<{ disabled?: boolean }>`
  display: none;
  :checked + label {
    color: ${styles.color.shade.DARK};
    :before {
      border: 5px solid
        ${(props): string =>
          props.disabled
            ? styles.color.shade.LIGHT
            : styles.color.brand.PRIMARY};
    }
  }
`;

export { StyledCustomRadioButton, StyledCustomRadioButtonLabel };
