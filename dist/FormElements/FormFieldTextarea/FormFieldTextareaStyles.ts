import styled from 'styled-components';

import styles from 'styles/values';

const StyledFormFieldTextarea = styled.textarea<{ small?: boolean; medium?: boolean; error?: boolean }>`
    font-size: ${styles.typographyScale.TYPE16};
    font-family: ${styles.font.PRIMARY};
    color: ${(props): string => (props.disabled ? styles.color.shade.LIGHT : styles.color.shade.DARK)};
    line-height: ${styles.lineHeight.LHEIGHT1_5};
    padding: 4px 8px;
    border-radius: ${styles.borderRadius.PRIMARY};
    border: 1px solid ${styles.color.shade.LIGHT};
    width: ${(props): string => (props.small ? '150px' : props.medium ? '210px' : '495px')};
    margin: 12px 0;
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
    resize: none;
`;

export { StyledFormFieldTextarea };
