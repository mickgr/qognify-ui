import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import FormFieldFileDropdown, { Props } from '../FormFieldFileDropdown';
import { StyledFormFieldDropdown } from '../FormFieldFileDropdownStyles';

import styles from 'styles/values'

describe('form field file dropdown tests', () => {
	let props: Props;
	const onChangeMethod = jest.fn();
	const onBlurMethod = jest.fn();
	const onClickMethod = jest.fn();
	const dropdownOptions = [
		{id: '113sdd', option: 'test option'},
		{id: '123sdd', option: 'text option'},
		{id: '133sdd', option: 'option texts'}
	];
	beforeEach(() => {
		props = {
			small: undefined,
			medium: undefined,
			disabled: undefined,
			value: undefined,
			accept: undefined,
			multiple: undefined,
			name: 'form field',
			id: 'formField123',
			onChange: onChangeMethod,
			onBlur: onBlurMethod,
			onClick: onClickMethod,
			options: dropdownOptions
		};
	});

	it('should render default form field file dropdown', () => {
		const wrapper = shallow(<FormFieldFileDropdown {...props} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render disabled form field file dropdown', () => {
		const wrapper = shallow(<FormFieldFileDropdown {...props} disabled={true} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render form field file dropdown with value', () => {
		const wrapper = shallow(<FormFieldFileDropdown {...props} value={'test value'} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render default StyledFormFieldDropdown', () => {
		const wrapper = renderer.create(<StyledFormFieldDropdown />).toJSON();
		expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.DARK}`);
		expect(wrapper).toHaveStyleRule('width', '495px');
	});

	it('should render default disabled StyledFormFieldDropdown', () => {
		const wrapper = renderer.create(<StyledFormFieldDropdown disabled={true} />).toJSON();
		expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.LIGHT}`);
		expect(wrapper).toHaveStyleRule('width', '495px');
	});

	it('should render small StyledFormFieldDropdown', () => {
		const wrapper = renderer.create(<StyledFormFieldDropdown small={true} />).toJSON();
		expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.DARK}`);
		expect(wrapper).toHaveStyleRule('width', '150px');
	});

	it('should render medium StyledFormFieldDropdown', () => {
		const wrapper = renderer.create(<StyledFormFieldDropdown medium={true} />).toJSON();
		expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.DARK}`);
		expect(wrapper).toHaveStyleRule('width', '210px');
	});

});
