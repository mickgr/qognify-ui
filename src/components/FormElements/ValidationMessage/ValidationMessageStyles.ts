import Tippy from "@tippy.js/react";
import styled from "styled-components";

import styles from "../../../styles/values";

const StyledValidationWrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 500px;
  height: 50px;
  color: ${styles.color.shade.DARK};
`;

const StyledValidation = styled.div`
  position: absolute;
  right: -32px;
  top: 50%;
  transform: translate(0, -50%);
`;

const StyledValidationIcon = styled.div`
  display: flex;
`;

const StyledValidationTip = styled(Tippy)`
  background-color: ${styles.color.utility.ERROR};
  border-radius: ${styles.borderRadius.PRIMARY};
  &[x-placement="right"] .tippy-arrow {
    border-right: 7px solid ${styles.color.utility.ERROR};
  }
  &[x-placement="left"] .tippy-arrow {
    border-left: 7px solid ${styles.color.utility.ERROR};
  }
  & .tippy-roundarrow {
    svg {
      fill: ${styles.color.utility.ERROR};
    }
  }
`;

export {
  StyledValidation,
  StyledValidationIcon,
  StyledValidationTip,
  StyledValidationWrapper,
};
