import styled from 'styled-components';

import styles from 'styles/values';

const StyledCheckboxLabel = styled.label<{ semiSelected: boolean; checked: boolean }>`
    display: flex;
    justify-content: center;
    width: 22px;
    height: 22px;
    border: 1px solid
        ${(props): string =>
            props.checked || props.semiSelected ? styles.color.brand.PRIMARY : styles.color.shade.LIGHT};
    border-radius: ${styles.borderRadius.PRIMARY};
    background: ${(props): string => (props.checked || props.semiSelected ? styles.color.brand.PRIMARY : 'none')};
    transition: ${styles.transition.PRIMARY};
    :hover {
        border-color: ${styles.color.brand.PRIMARY};
    }
    align-items: center;
    cursor: pointer;
    flex-shrink: 0;
`;

const StyledCheckboxIcon = styled.img`
    width: 12px;
`;

const StyledCheckbox = styled.input`
    display: none;
`;

export { StyledCheckbox, StyledCheckboxIcon, StyledCheckboxLabel };
