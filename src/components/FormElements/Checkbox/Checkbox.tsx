import React, { ChangeEvent } from 'react';

import { StyledCheckbox, StyledCheckboxIcon, StyledCheckboxLabel } from './CheckboxStyles';

import styles from 'styles/values';

export interface Props {
    selected?: boolean;
    disabled?: boolean;
    semiSelected?: boolean;
    id?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

const Checkbox: React.FC<Props> = ({ id, selected, semiSelected, onChange, onClick, disabled = false }: Props) => (
    <StyledCheckboxLabel id={id} checked={selected || false} semiSelected={semiSelected || false}>
        <StyledCheckbox type="checkbox" checked={selected} onChange={onChange} disabled={disabled} onClick={onClick} />
        {selected || semiSelected ? (
            <StyledCheckboxIcon src={selected ? styles.icon.checkmark_white : styles.icon.semi_selected} />
        ) : null}
    </StyledCheckboxLabel>
);
export default Checkbox;
