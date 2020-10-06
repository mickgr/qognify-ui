import styled from 'styled-components';

import styles from 'styles/values';
import { LongTextEllipsis } from 'styles/common';

const StyledDropdownItems = styled.ul<{ isOpen: boolean }>`
    display: ${(props): string => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    width: auto;
    max-width: 500px;
    box-shadow: ${styles.shadow.main.PRIMARY};
    list-style: none;
    margin: 0;
    padding: 0;
    right: 0;
    border-radius: ${styles.borderRadius.PRIMARY};
    background-color: ${styles.color.shade.WHITE};
    align: ${(props): string => (props.isOpen ? 'left' : 'right')};
    width: max-content;
`;

const StyledDropdownDelimiter = styled.li`
    height: 2px;
    background-color: ${styles.color.shade.SILVER};
`;

const StyledDropdownItemContentContainer = styled.div`
    flex-grow: 1;
`;

const SelectedDropdownOptionTextColor = styles.color.shade.WHITE;

const StyledDropdownItem = styled.li<{ isCheckboxRendered: boolean; isClickable: boolean; isSelected: boolean }>`
    display: flex;
    margin: 0;
    padding: 6px 12px;
    transition: ${styles.transition.PRIMARY};
    :first-of-type {
        border-radius: ${styles.borderRadius.PRIMARY} ${styles.borderRadius.PRIMARY} 0 0;
    }
    :last-of-type {
        border-radius: 0 0 ${styles.borderRadius.PRIMARY} ${styles.borderRadius.PRIMARY};
    }
    ${(props): string => {
        const selectedAttributes = props.isSelected
            ? `
        color: ${props.isCheckboxRendered ? styles.color.shade.DARK : SelectedDropdownOptionTextColor};
        background-color: ${!props.isCheckboxRendered ? styles.color.brand.PRIMARY : styles.color.shade.WHITE};`
            : '';

        const clickableAttributes = props.isClickable
            ? `
    :hover {
        color: ${props.isCheckboxRendered ? styles.color.shade.DARK : styles.color.shade.WHITE};
        background-color: ${!props.isCheckboxRendered ? styles.color.brand.PRIMARY_HOVER : styles.color.shade.WHITE};
    }`
            : '';

        return `${selectedAttributes}
         ${clickableAttributes} 
         cursor: ${props.isClickable ? 'pointer' : 'auto'}
         `;
    }}
`;

const StyledDropdownItemText = styled.div<{ isBold?: boolean }>`
    text-align: left;
    ${(props): string =>
        props.isBold
            ? `
        font-weight: ${styles.fontWeight.SEMIBOLD};
    `
            : ''}
`;

const StyleMainIconContainer = styled.div<{ isAnythingSelected?: boolean }>`
    display: flex;
    align-items: center;
    svg {
        path {
            fill: ${(props): string =>
                props.isAnythingSelected ? styles.color.brand.PRIMARY : styles.color.shade.DARK};
        }
    }
`;

const StyledDropdownButtonTitle = styled.div`
    display: flex;
    align-items: center;
`;

const StyledDropdownButtonWrapper = styled.div<{ disabled?: boolean }>`
    position: relative;
    font-size: ${styles.typographyScale.TYPE16};
    text-transform: normal;
    display: flex;
    align-items: center;
    padding: 5px;
    color: ${(props): string => (props.disabled ? styles.color.shade.DARK04 : styles.color.shade.DARK)};
    cursor: pointer;
    transition: ${styles.transition.PRIMARY};
    pointer-events: ${(props): string => (props.disabled ? 'none' : 'inherit')};
    z-index: 1;
`;

const StyledDropdownitemsWithCheckbox = styled.div`
    display: flex;
    align-items: center;
    margin: 0;
    transition: ${styles.transition.PRIMARY};
    > label {
        margin-right: 12px;
        transition: ${styles.transition.PRIMARY};
    }
    :hover {
        > label {
            border-color: ${styles.color.brand.PRIMARY_HOVER};
        }
    }
    :first-of-type {
        border-radius: ${styles.borderRadius.PRIMARY} ${styles.borderRadius.PRIMARY} 0 0;
    }
    :last-of-type {
        border-radius: 0 0 ${styles.borderRadius.PRIMARY} ${styles.borderRadius.PRIMARY};
    }
    > span {
        max-width: 200px;
        ${LongTextEllipsis}
    }
`;
export {
    StyledDropdownButtonWrapper,
    StyledDropdownItem,
    StyledDropdownItems,
    StyledDropdownItemText,
    StyledDropdownitemsWithCheckbox,
    StyledDropdownDelimiter,
    StyledDropdownButtonTitle,
    StyledDropdownItemContentContainer,
    SelectedDropdownOptionTextColor,
    StyleMainIconContainer,
};
