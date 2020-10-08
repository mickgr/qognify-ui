import styled from "styled-components";

import styles from "../../../styles/values";

const StyledInputTitle = styled.span`
  order: 0;
  line-height: ${styles.lineHeight.LHEIGHT1_375};
`;

const StyledInputBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: left;
  align-items: center;
  width: 100%;
  padding-bottom: 12px;
  input {
    width: 90px;
    margin: 0 9px;
  }
`;

export { StyledInputBar, StyledInputTitle };
