import React from "react";
import styles from "../../../styles/values";
import { ToolTipData } from "../../../styles/common";
import { Tooltip } from "react-tippy";
import iconsBank from "./iconsBank";
import { boxSizeType, StyledArrowIcon, Svg } from "./iconStyles";

const Icon: IconType = ({
  d,
  width = 24,
  height = 24,
  boxSize,
  color,
  viewBox,
}) => (
  <Svg {...{ width, height, boxSize, viewBox }}>
    <path d={d} fill={color || styles.color.shade.WHITE} />
  </Svg>
);
Icon.res = iconsBank;

export default Icon;

export type Props = {
  d: string;
  width?: number;
  height?: number;
  boxSize?: boxSizeType;
  color?: string;
  viewBox?: string;
};

type IconType = {
  (props: Props): JSX.Element;
  res: typeof iconsBank;
};

interface ArrowIconProps {
  isPointedUp?: boolean;
  fillColor?: string;
}

export const ArrowIcon: React.FC<ArrowIconProps> = (props: ArrowIconProps) => {
  return (
    <StyledArrowIcon
      isPointedUp={props.isPointedUp}
      fillColor={props.fillColor}>
      <Icon d={Icon.res.DROPDOWN_CHEVRON} height={8} width={8} />
    </StyledArrowIcon>
  );
};

interface InfoIconWithTooltipProps {
  content: string;
}

export const InfoIconWithTooltip: React.FC<InfoIconWithTooltipProps> = (
  props: InfoIconWithTooltipProps
) => {
  return (
    <Tooltip
      title={props.content}
      {...ToolTipData}
      position="bottom"
      theme="light">
      <img src={styles.icon.info} />
    </Tooltip>
  );
};
