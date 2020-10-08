import styled from "styled-components";

import styles from "../../../styles/values";
import { LongTextEllipsis } from "../../../styles/common";

const StyledIconInputButton = styled.input`
  display: none;
`;
const StyledIconInputButtonLabel = styled.label<{
  disabled?: boolean;
  error?: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${styles.color.shade.WHITE};
  border: 1px solid
    ${(props): string =>
      props.error ? styles.color.utility.ERROR : styles.color.shade.LIGHT};
  box-sizing: border-box;
  width: 210px;
  height: 32px;
  cursor: pointer;
  transition: ${styles.transition.PRIMARY};
  :hover {
    background-color: ${styles.color.shade.DARK01};
  }
`;

const StyledEllipsisText = styled.div`
  flex: 1;
  ${LongTextEllipsis}
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 56px;
  color: ${styles.color.shade.DARK};
  opacity: 0.4;
  padding-left: 8px;
  padding-right: 4px;
`;

const StyledTooltipDiv = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const StyledBoldTitle = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

export {
  StyledIconInputButtonLabel,
  StyledIconInputButton,
  StyledBoldTitle,
  StyledTooltipDiv,
  StyledEllipsisText,
};
