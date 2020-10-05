import { shallow } from 'enzyme';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Button } from 'components/common';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import styles from 'styles/values';

import { Props } from '../Button';
import { StyledButton } from '../ButtonStyles';

describe('Button test', () => {
	let props: Props;
	const clickMethod = jest.fn();
	beforeEach(() => {
		props = {
			text: <FormattedMessage id={'loading'} />,
			onClick: clickMethod,
			disabled: undefined,
			type: undefined,
			id: undefined,
			accept: undefined,
			onChange: undefined,
			multiple: undefined,
			value: undefined,
			isPrimary: undefined
		};
	});

	it('should render Button', () => {
		const wrapper = shallow(<Button {...props} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render primary button', () => {
		const wrapper = shallow(<Button {...props} isPrimary={true} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render disabled Button', () => {
		const wrapper = shallow(<Button {...props} disabled={true} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render Button type button', () => {
		const wrapper = shallow(<Button {...props} type={'button'} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render Button type reset', () => {
		const wrapper = shallow(<Button {...props} type={'reset'} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render Button type submit', () => {
		const wrapper = shallow(<Button {...props} type={'submit'} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render Button with unique id', () => {
		const wrapper = shallow(<Button {...props} id={'sadf785sasf'} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render Button with present value', () => {
		const wrapper = shallow(<Button {...props} value={'test value'} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render primary StyledButton', () => {
		const wrapper = renderer.create(<StyledButton isPrimary={true} />).toJSON();
		expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.WHITE}`);
		expect(wrapper).toHaveStyleRule('background-color', `${styles.color.brand.PRIMARY}`);
		expect(wrapper).toHaveStyleRule('text-decoration', 'none');
		expect(wrapper).toHaveStyleRule('background-color', `${styles.color.brand.PRIMARY_HOVER}`, {modifier: ':hover'});
		expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.WHITE}`, {modifier: ':hover'});
		expect(wrapper).toHaveStyleRule('background-color', `${styles.color.brand.PRIMARY}`, {modifier: ':hover:active'});
		expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.WHITE}`, {modifier: ':hover:active'});
	});

	it('should render disabled primary StyledButton', () => {
		const wrapper = renderer.create(<StyledButton isPrimary={true} disabled={true} />).toJSON();
		expect(wrapper).toHaveStyleRule('background-color', `${styles.color.shade.DARK03}`, {modifier: ':disabled'});
		expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.WHITE}`, {modifier: ':disabled'});
	});

	it('should render secondary StyledButton', () => {
		const wrapper = renderer.create(<StyledButton />).toJSON();
		expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.DARK}`);
		expect(wrapper).toHaveStyleRule('background-color', `${styles.color.shade.TRANSPARENT}`);
		expect(wrapper).toHaveStyleRule('text-decoration', 'underline');
		expect(wrapper).toHaveStyleRule('background-color', `${styles.color.shade.TRANSPARENT}`, {modifier: ':hover'});
		expect(wrapper).toHaveStyleRule('color', `${styles.color.brand.PRIMARY_HOVER}`, {modifier: ':hover'});
		expect(wrapper).toHaveStyleRule('background-color', `${styles.color.shade.TRANSPARENT}`, {modifier: ':hover:active'});
		expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.DARK}`, {modifier: ':hover:active'});
	});

	it('should render disabled secondary StyledButton', () => {
		const wrapper = renderer.create(<StyledButton disabled={true} />).toJSON();
		expect(wrapper).toHaveStyleRule('background-color', `${styles.color.shade.TRANSPARENT}`, {modifier: ':disabled'});
		expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.DARK04}`, {modifier: ':disabled'});
	});

});