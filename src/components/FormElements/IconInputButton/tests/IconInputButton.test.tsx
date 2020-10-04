import { mount, shallow } from 'enzyme';
import React from 'react';
import FormattedMessage from 'react-intl/dist/components/message';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Icon } from 'components/common';
import { DEFAULT_LOCALE, getMessages } from 'res/i18n/i18n';

import IconInputButton, { Props } from '../IconInputButton';
import { StyledIconInputButton, StyledIconInputButtonLabel } from '../IconInputButtonStyles';

import styles from 'styles/values'
import { IntlProvider } from 'react-intl';

describe('icon input button tests', () => {
	let props: Props;
	const onClickMethod = jest.fn();
	const onChangeMethod = jest.fn();

	beforeEach(() => {
		props = {
			disabled: undefined,
			type: undefined,
			id: undefined,
			accept: undefined,
			multiple: undefined,
			icon: <Icon d={Icon.res.REFRESH} />,
			text: <FormattedMessage id={'loading'} />,
			onClick: onClickMethod,
			onChange: onChangeMethod,
			certMetdata: null
		};
	});

	it('should render default icon input button', () => {
		const wrapper = shallow(
			<IntlProvider locale={'en'}>
				<IconInputButton {...props} />
			</IntlProvider>
		);
		expect(wrapper.exists()).toBe(true);
	});

	it('should render default icon input button and perform change', () => {
		const wrapper = mount(
			<IntlProvider locale={'en'} messages={getMessages(DEFAULT_LOCALE)}>
				<IconInputButton {...props} />
			</IntlProvider>
		);
		wrapper.find(StyledIconInputButton).props().onChange()
		wrapper.simulate('change');
		expect(onChangeMethod).toHaveBeenCalled();
	});

	// TODO: Designs have changed - revive later
	// it('should render default StyledIconInputButtonLabel', () => {
	// 	const wrapper = renderer.create(<StyledIconInputButtonLabel />).toJSON();
	// 	expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.DARK}`);
	// });

	// TODO: Designs have changed - revive later
	// it('should render disabled StyledIconInputButtonLabel', () => {
	// 	const wrapper = renderer.create(<StyledIconInputButtonLabel disabled={true} />).toJSON();
	// 	expect(wrapper).toHaveStyleRule('color', `${styles.color.shade.DARK04}`);
	// });

});
