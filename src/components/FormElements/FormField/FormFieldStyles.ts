import styled from 'styled-components';

import styles from 'styles/values';

const StyledFormFieldWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const StyledFormField = styled.input<{
    disabled?: boolean;
    small?: boolean;
    medium?: boolean;
    error?: boolean;
    button?: React.ReactNode;
}>`
    font-size: ${styles.typographyScale.TYPE16};
    font-family: ${styles.font.PRIMARY};
    color: ${(props): string => (props.disabled ? styles.color.shade.LIGHT : styles.color.shade.DARK)};
    line-height: ${styles.lineHeight.LHEIGHT1_5};
    padding: 4px 8px;
    border-radius: ${styles.borderRadius.PRIMARY};
    border: 1px solid ${(props): string => (props.error ? styles.color.utility.ERROR : styles.color.shade.LIGHT)};
    width: ${(props): string => (props.small ? '150px' : props.medium ? '210px' : '495px')};
    margin: 8px 0;
    transition: ${styles.transition.PRIMARY};
    :hover {
        border: 1px solid ${(props): string => (props.error ? styles.color.utility.ERROR : styles.color.shade.NEUTRAL)};
        :disabled {
            border: 1px solid ${styles.color.shade.LIGHT};
        }
    }
    :focus {
        outline: 0;
        border: 1px solid ${(props): string => (props.error ? styles.color.utility.ERROR : styles.color.brand.PRIMARY)};
        :disabled {
            border: 1px solid ${styles.color.shade.LIGHT};
        }
    }
    + button {
        position: absolute;
        right: 0;
        svg {
            width: 16px;
            height: 16px;
        }
    }
`;

StyledFormField.displayName = 'StyledFormField';

export { StyledFormField, StyledFormFieldWrapper };
