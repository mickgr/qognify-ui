import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import FormFieldTextarea, { Props } from '../FormFieldTextarea';
import { StyledFormFieldTextarea } from '../FormFieldTextareaStyles';

import styles from 'styles/values'

describe('form field textarea tests', () => {
	let props: Props;
	const onChangeMethod = jest.fn();
	const onBlurMethod = jest.fn();
	beforeEach(() => {
		props = {
			name: 'form field',
			id: 'formField123',
			onChange: onChangeMethod,
			onBlur: onBlurMethod,
			small: undefined,
			medium: undefined,
			disabled: undefined,
			value: undefined,
			error: undefined
		};
	});

	it('should render default form field', () => {
		const wrapper = shallow(<FormFieldTextarea {...props} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render default StyledFormFieldTextarea', () => {
		const wrapper = renderer.create(<StyledFormFieldTextarea />).toJSON();
		expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.DARK}`);
		expect(wrapper).toHaveStyleRule('width', '495px');
	});

	it('should render disabled StyledFormFieldTextarea', () => {
		const wrapper = renderer.create(<StyledFormFieldTextarea disabled={true} />).toJSON();
		expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.LIGHT}`);
	});


	it('should render default small StyledFormFieldTextarea', () => {
		const wrapper = renderer.create(<StyledFormFieldTextarea small={true} />).toJSON();
		expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.DARK}`);
		expect(wrapper).toHaveStyleRule('width', '150px');
	});

	it('should render default medium StyledFormFieldTextarea', () => {
		const wrapper = renderer.create(<StyledFormFieldTextarea medium={true} />).toJSON();
		expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.DARK}`);
		expect(wrapper).toHaveStyleRule('width', '210px');
	});


});
