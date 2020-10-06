import React from "react";
import iconsBank from "components/common/Icon/iconsBank";
import styles from "styles/values";
import {
  Svg,
  boxSizeType,
  StyledArrowIcon,
} from "components/common/Icon/iconStyles";
import { ToolTipData } from "styles/common";
import { Tooltip } from "react-tippy";

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
