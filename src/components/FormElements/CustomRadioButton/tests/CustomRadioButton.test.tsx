import { shallow } from 'enzyme';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import CustomRadioButton, { Props } from '../CustomRadioButton';
import { StyledCustomRadioButtonLabel, StyledCustomRadioButton } from '../CustomRadioButtonStyles';

import styles from 'styles/values'

describe('Custom radio button test', () => {
	let props: Props;
	beforeEach(() => {
		props = {
			labelText: <FormattedMessage id={'loading'} />,
			disabled: undefined,
			value: 'test value',
			name: 'test custom button'
		};
	});

	it('should render custom radio button', () => {
		const wrapper = shallow(<CustomRadioButton {...props} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render disabled custom radio button', () => {
		const wrapper = shallow(<CustomRadioButton {...props} disabled={true} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render StyledCustomRadioButtonLabel', () => {
		const wrapper = renderer.create(<StyledCustomRadioButtonLabel />).toJSON();
		expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.DARK06}`);
		expect(wrapper).toHaveStyleRule('pointer-events', 'auto');
	});

	it('should render disabled StyledCustomRadioButtonLabel', () => {
		const wrapper = renderer.create(<StyledCustomRadioButtonLabel disabled={true} />).toJSON();
		expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.DARK04}`);
		expect(wrapper).toHaveStyleRule('pointer-events', 'none');
	});

	it('should render StyledCustomRadioButton', () => {
		const wrapper = renderer.create(<StyledCustomRadioButton />).toJSON();
		expect(wrapper).toHaveStyleRule('border', `5px solid ${styles.color.brand.PRIMARY}`, {modifier: ':checked + label:before'});
	});

	it('should render disabled StyledCustomRadioButton', () => {
		const wrapper = renderer.create(<StyledCustomRadioButton disabled={true} />).toJSON();
		expect(wrapper).toHaveStyleRule('border', `5px solid ${styles.color.shade.LIGHT}`, {modifier: ':checked + label:before'});
	});

});
