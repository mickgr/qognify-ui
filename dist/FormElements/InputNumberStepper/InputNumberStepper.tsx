import React, { useState } from "react";

import { FormField } from "..";

import styles from "styles/values";

import {
  StyledInputNumberStepper,
  StyledInputNumberStepperMinus,
  StyledInputNumberStepperPlus,
} from "./InputNumberStepperStyles";
import { Icon } from "../..";

export interface Props {
  maxValue?: number;
  minValue?: number;
  step?: number;
  value: number;
  onBlur?: () => void;
  onChange?: () => void;
}

const InputNumberStepper: React.FC<Props> = ({
  maxValue,
  minValue,
  step,
  value,
  onChange,
}: Props) => {
  const [currentValue, setCurrentValue] = useState(value);

  const plusStep = (): void => setCurrentValue(currentValue + (step || 1));
  const minusStep = (): void => setCurrentValue(currentValue - (step || 1));

  return (
    <StyledInputNumberStepper>
      <FormField
        id="numberStepper"
        type="number"
        onChange={onChange}
        name="number stepper"
        maxValue={maxValue}
        minValue={minValue || 0}
        step={step || 1}
        value={currentValue}
      />
      <StyledInputNumberStepperPlus onClick={plusStep}>
        <Icon
          d={Icon.res.DROPDOWN_CHEVRON}
          color={styles.color.shade.DARK}
          width={8}
          height={14}
        />
      </StyledInputNumberStepperPlus>
      <StyledInputNumberStepperMinus onClick={minusStep}>
        <Icon
          d={Icon.res.DROPDOWN_CHEVRON}
          color={styles.color.shade.DARK}
          width={8}
          height={14}
        />
      </StyledInputNumberStepperMinus>
    </StyledInputNumberStepper>
  );
};

export default InputNumberStepper;
