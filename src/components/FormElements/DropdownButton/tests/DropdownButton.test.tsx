import { shallow, mount } from 'enzyme';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Icon } from 'components/common/Icon';

import DropdownButton, { Props } from '../DropdownButton';
import { StyledDropdownItem, StyledDropdownItems, StyledDropdownButtonTitle } from '../DropdownButtonStyles';

import styles from 'styles/values'
import { DropdownItemModel, DropdownItemType } from '../DropdownItem';

describe('dropdown button tests', () => {
	let props: Props;
	const clickMethod = jest.fn();
	const firstElementId = 'saf2323';
	const optionsData: DropdownItemModel[] = [
		{ id: firstElementId, text: 'text some text', type: DropdownItemType.Option },
		{ id: 'ssdf233', text: 'text some test', type: DropdownItemType.Option },
		{ id: 'sa87667', text: 'test some text', type: DropdownItemType.Option }
	];
	beforeEach(() => {
		props = {
			selectedIds: new Set<string>(),
			setSelectedIds: jest.fn(),
			disabled: undefined,
			onSelectionChanged: clickMethod,
			icon: undefined,
			text: undefined,
			items: optionsData,
		};
	});

	it('should render dropdown button with a default selected option', () => {
		const defaultSelectedIds = new Set<string>();
		defaultSelectedIds.add(firstElementId);
		
		const wrapper = mount(<DropdownButton {...props} isShowClearSelection={false} selectedIds={defaultSelectedIds} />);
		expect((wrapper.find('DropdownItem').at(0).props() as any).isSelected).toBe(true);
	});

	it('should render dropdown button', () => {
		const wrapper = shallow(<DropdownButton {...props} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render disabled dropdown button', () => {
		const wrapper = shallow(<DropdownButton {...props} disabled={true} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render dropdown button with icon', () => {
		const wrapper = shallow(<DropdownButton {...props} icon={<Icon d={Icon.res.REFRESH} />} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render dropdown button with text', () => {
		const wrapper = shallow(<DropdownButton {...props} text={<FormattedMessage id={'loading'} />} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render dropdown button options with checkbox', () => {
		const wrapper = shallow(<DropdownButton {...props} isMultiSelect={true} />);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render StyledDropdownOption', () => {
		const wrapper = renderer.create(<StyledDropdownItem isCheckboxRendered={false} isClickable={true} />).toJSON();
		expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.WHITE}`, { modifier: ':hover' });
		expect(wrapper).toHaveStyleRule('background-color', `${styles.color.brand.PRIMARY_HOVER}`, { modifier: ':hover' });
	});

	it('should render StyledDropdownOption with checkbox', () => {
		const wrapper = renderer.create(<StyledDropdownItem isCheckboxRendered={true} isClickable={true} />).toJSON();
		expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.DARK}`, { modifier: ':hover' });
		expect(wrapper).toHaveStyleRule('background-color', `${styles.color.shade.WHITE}`, { modifier: ':hover' });
	});
});
