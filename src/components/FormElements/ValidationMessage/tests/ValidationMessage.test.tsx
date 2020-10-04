import { shallow } from 'enzyme';
import React from 'react';

import { Icon, ValidationMessage } from 'components/common';
import { FormattedMessage } from 'react-intl';
import Props from './ValidationMessage'

describe('Validation message test', () => {
	let props: Props;
	beforeEach(() => {
		props = {
			id: '234sdfas',
			text: <FormattedMessage id={'loading'} />,
			icon: <Icon d={Icon.res.DEVICE_AUDIO_IN} />
		};
	});

	it('should render validation message component', () => {
		const wrapper = shallow(<ValidationMessage {...props} />);
		expect(wrapper.exists()).toBe(true);
	});
});
