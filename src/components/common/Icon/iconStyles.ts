import styled from "styled-components";
import styles from "../../../styles/values";

export type boxSizeType = "extraWide" | "wide" | "compact" | "high";
const extraWide = "0 0 48 24";
const wide = "0 0 36 24";
const compact = "0 0 24 24";
const high = "0 0 24 36";

export const StyledArrowIcon = styled.div<{
  isPointedUp?: boolean;
  fillColor?: string;
}>`
  svg {
    path {
      fill: ${(props): string =>
        props.fillColor ? props.fillColor : styles.color.shade.DARK};
    }
    margin-left: 12px;
    transition: ${styles.transition.PRIMARY};
    ${(props): string =>
      props.isPointedUp
        ? `
            transform: rotate(180deg);
        `
        : ""}
  }
`;

export const Svg = styled.svg.attrs<{
  boxSize?: boxSizeType;
  viewBox?: string;
}>(({ boxSize = "compact", height, width, viewBox }) => ({
  ["aria-hidden"]: "true",
  viewBox: viewBox ?? { extraWide, wide, compact, high }[boxSize],
  role: "presentation",
  height: height,
  width: width,
}))``;
