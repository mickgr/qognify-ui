import { createGlobalStyle } from "styled-components";

import styles from "../values";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600&display=swap');
  body {
    font-family: ${styles.font.PRIMARY};
    margin: 0;
    color: ${styles.color.shade.WHITE};
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }

  .tippy-tooltip {
    overflow-wrap: break-word;
  }
  
  ::-webkit-scrollbar-track
  {
    background-color: ${styles.color.shade.WHITE};
  }

  ::-webkit-scrollbar
  {
    height: 8px;
    width: 8px;
    background-color: ${styles.color.shade.DARK06};
  }

  ::-webkit-scrollbar-thumb
  {
    border-radius: 25px;
    background-color: ${styles.color.shade.DARK06};
  }
`;
export default GlobalStyles;
