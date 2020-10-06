import { storiesOf } from '@storybook/react';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import InputBar from './InputBar';

storiesOf('Input Bar/Variants', module).add('inline', () => (
    <InputBar
        text={<FormattedMessage id="input_bar_machines_spare_retention_redundancy" />}
        disabled={false}
        afterText={<FormattedMessage id="input_bar_machines_spare_retention_redundancy_days" />}
    />
));
