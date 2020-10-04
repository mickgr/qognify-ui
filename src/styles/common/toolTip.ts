import Popper from 'popper.js';
export type Placement = Popper.Placement;

export interface ToolTipProps {
    arrow?: boolean;
    arrowType?: 'sharp' | 'round';
    placement?: Placement;
}

export const ToolTipData: ToolTipProps = {
    arrow: true,
    arrowType: 'sharp',
    placement: 'bottom',
};
