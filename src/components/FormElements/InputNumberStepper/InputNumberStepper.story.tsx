import { storiesOf } from '@storybook/react';
import React from 'react';

import InputNumberStepper from './InputNumberStepper';

storiesOf('Input Number Stepper/Variants', module).add('inline', () => <InputNumberStepper value={1} />);
