import styled, { css } from 'styled-components';

import styles from 'styles/values';

const commonLabelStyle = css<{ disabled?: boolean; small?: boolean; medium?: boolean }>`
    font-size: ${styles.typographyScale.TYPE16};
    font-family: ${styles.font.PRIMARY};
    color: ${(props): string => (props.disabled ? styles.color.shade.LIGHT : styles.color.shade.DARK)};
    line-height: ${styles.lineHeight.LHEIGHT1_5};
    padding: 4px 8px;
    border-radius: ${styles.borderRadius.PRIMARY};
    border: 1px solid ${styles.color.shade.LIGHT};
    width: ${(props): string => (props.small ? '150px' : props.medium ? '210px' : '495px')};
    margin: 8px 0;
    transition: ${styles.transition.PRIMARY};
    :hover {
        border: 1px solid ${styles.color.shade.NEUTRAL};
        :disabled {
            border: 1px solid ${styles.color.shade.LIGHT};
        }
    }
    :focus {
        outline: 0;
        border: 1px solid ${styles.color.brand.PRIMARY};
        :disabled {
            border: 1px solid ${styles.color.shade.LIGHT};
        }
    }
`;

const StyledFormDropdownList = styled.ul`
    position: absolute;
    display: none;
    list-style: none;
    margin: 0;
    padding: 0;
    top: calc(100% - 5px);
    width: 100%;
    background: ${styles.color.shade.WHITE};
    border: 1px solid ${styles.color.shade.LIGHT};
    border-radius: ${styles.borderRadius.PRIMARY};
    z-index: 2;
`;

const StyledFormDropdownListItem = styled.li`
    padding: 4px 8px;
    cursor: pointer;
    transition: ${styles.transition.PRIMARY};
    color: ${styles.color.shade.DARK};
    :hover {
        color: ${styles.color.shade.WHITE};
        background-color: ${styles.color.brand.PRIMARY};
    }
    :first-of-type {
        border-radius: ${styles.borderRadius.PRIMARY} ${styles.borderRadius.PRIMARY} 0 0;
    }
    :last-of-type {
        border-radius: 0 0 ${styles.borderRadius.PRIMARY} ${styles.borderRadius.PRIMARY};
    }
`;

const StyledFormFieldDropdownWrapper = styled.div`
    position: relative;
    display: inline-block;
    svg {
        position: absolute;
        width: 8px;
        height: 8px;
        right: 16px;
        top: 50%;
        transform: translate(0, -50%);
        transition: ${styles.transition.PRIMARY};
    }
`;

const StyledFormFieldDropdown = styled.input`
    ${commonLabelStyle};
    cursor: pointer;
    text-align: left;
    :focus {
        + ${StyledFormDropdownList} {
            display: block;
        }
        ~ svg {
            transform: rotate(180deg) translate(0, 50%);
        }
    }
`;

export { StyledFormFieldDropdown, StyledFormFieldDropdownWrapper, StyledFormDropdownList, StyledFormDropdownListItem };
