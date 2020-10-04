import { shallow } from 'enzyme';
import React from 'react';

import renderer from 'react-test-renderer';
import 'jest-styled-components';

import styles from 'styles/values';

import Checkbox, { Props } from '../Checkbox';
import { StyledCheckbox, StyledCheckboxIcon, StyledCheckboxLabel } from '../CheckboxStyles';

describe('Checkbox test', () => {
	let props: Props;
	const onChangeMethod = jest.fn();
	beforeEach(() => {
		props = {
			selected: false,
			semiSelected: false,
			onChange: onChangeMethod,
			id: undefined
		};
	});

	it('should render Checkbox', () => {
		const wrapper = shallow(<Checkbox {...props} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render Checkbox with id', () => {
		const wrapper = shallow(<Checkbox {...props} id={'rnd2323'} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should simulate click on Checkbox', () => {
		const wrapper = shallow(<Checkbox {...props} />);
		wrapper.find(StyledCheckbox).simulate('change');
		expect(onChangeMethod).toHaveBeenCalled();
	});

	it('should render selected checkbox', () => {
		const wrapper = shallow(<Checkbox {...props} selected={true} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render selected checkbox icon', () => {
		const wrapper = shallow(<Checkbox {...props} selected={true} />);
		expect(wrapper.find(StyledCheckboxIcon).prop('src')).toEqual(styles.icon.checkmark_white);
	});

	it('should render semiSelected checkbox icon', () => {
		const wrapper = shallow(<Checkbox {...props} semiSelected={true} />);
		expect(wrapper.find(StyledCheckboxIcon).prop('src')).toEqual(styles.icon.semi_selected);
	});

	it('should render selected checkbox label', () => {
		const wrapper = renderer.create(<StyledCheckboxLabel checked={true} semiSelected={false} />).toJSON();
		expect(wrapper).toHaveStyleRule('border', `1px solid ${styles.color.brand.PRIMARY}`);
		expect(wrapper).toHaveStyleRule('background', `${styles.color.brand.PRIMARY}`);
	});

	it('should render semiSelected checkbox label', () => {
		const wrapper = renderer.create(<StyledCheckboxLabel checked={false} semiSelected={true} />).toJSON();
		expect(wrapper).toHaveStyleRule('border', `1px solid ${styles.color.brand.PRIMARY}`);
		expect(wrapper).toHaveStyleRule('background', `${styles.color.brand.PRIMARY}`);
	});

	it('should render unselected and unselected checkbox label', () => {
		const wrapper = renderer.create(<StyledCheckboxLabel checked={false} semiSelected={false} />).toJSON();
		expect(wrapper).toHaveStyleRule('border', `1px solid ${styles.color.shade.LIGHT}`);
		expect(wrapper).toHaveStyleRule('background', 'none');
	});


});
