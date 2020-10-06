import styled, { css } from 'styled-components';

import styles from 'styles/values';

const stepperStyles = css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0px;
    width: 20px;
    border: none;
    cursor: pointer;
    svg {
        path {
            transition: ${styles.transition.PRIMARY};
        }
    }
    :hover {
        svg {
            path {
                fill: ${styles.color.brand.PRIMARY};
            }
        }
    }
`;

const StyledInputNumberStepperPlus = styled.div`
    ${stepperStyles};
    top: 8px;
    transform: rotateZ(180deg);
    border-right: 1px solid ${styles.color.shade.LIGHT};
    border-radius: 0 0 0 4px;
    height: 17px;
`;

const StyledInputNumberStepperMinus = styled.div`
    ${stepperStyles};
    bottom: 8px;
    border-top: 1px solid ${styles.color.shade.LIGHT};
    border-left: 1px solid ${styles.color.shade.LIGHT};
    border-radius: 0 0 4px 0;
    height: 16px;
    svg {
        margin-right: 1px;
    }
`;

const StyledInputNumberStepper = styled.div`
    position: relative;
    border-radius: 0;
    max-width: 85px;
    input {
        width: 100%;
        padding: 3px 8px 3px 24px;
    }
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }

    input[type='number'] {
        -moz-appearance: textfield;
    }
`;

export { StyledInputNumberStepper, StyledInputNumberStepperPlus, StyledInputNumberStepperMinus };
