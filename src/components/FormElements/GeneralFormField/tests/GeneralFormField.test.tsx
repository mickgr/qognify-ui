import { shallow } from 'enzyme';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FieldType, GeneralFormFieldProps } from '../GeneralFormField';
import { GeneralFormField } from '../index';

const handleBlur = jest.fn();
const handleChange = jest.fn();

const defaultProps: GeneralFormFieldProps = {
    name: 'name',
    title: 'title',
    handleBlur,
    handleChange,
};

const shallowSetup = (propsOverrides: Partial<GeneralFormFieldProps>) => {
    const props = Object.assign(defaultProps, propsOverrides);
    const wrapper = shallow(<GeneralFormField {...props} />);
    return {
        wrapper,
        props,
    };
};

describe('Test case for testing Cluster details form field', () => {
    it('renders', () => {
        shallowSetup({});
    });

    it('renders the appropriate values', () => {
        const { wrapper } = shallowSetup({ value: 'value', placeholder: 'placeholder', maxLength: 100 });
        expect(wrapper.find('FormField').exists()).toBe(true);
        const formFieldProps = wrapper.find('FormField').props();
        expect(formFieldProps.name).toEqual('name');
        expect(formFieldProps.value).toEqual('value');
        expect(formFieldProps.placeholder).toEqual('placeholder');
        expect(formFieldProps.maxLength).toEqual(100);
        expect(formFieldProps.disabled).toEqual(undefined);
        expect(wrapper.find('StyledGeneralFormLabelText').text()).toEqual('title');

        expect((formFieldProps as any).error).toEqual(false);
        expect(wrapper.find('ValidationMessage').exists()).toBe(false);
    });

    it('Disabled when flag is set', () => {
        const { wrapper } = shallowSetup({ isDisabled: true });
        const formFieldProps = wrapper.find('FormField').props();
        expect(formFieldProps.disabled).toEqual(true);
    });

    it('renders the appropriate values', () => {
        const { wrapper } = shallowSetup({ value: 'value', fieldType: FieldType.TEXT_AREA });
        expect(wrapper.find('FormField').exists()).toBe(false);
        expect(wrapper.find('FormFieldTextarea').exists()).toBe(true);
        const formFieldProps = wrapper.find('FormFieldTextarea').props();
        expect(formFieldProps.name).toEqual('name');
        expect(formFieldProps.value).toEqual('value');
        expect(formFieldProps.placeholder).toEqual('placeholder');
        expect(formFieldProps.maxLength).toEqual(100);
        expect(formFieldProps.disabled).toEqual(true);
        expect((formFieldProps as any).error).toEqual(false);
    });

    it('Shows an error when there is one', () => {
        const { wrapper } = shallowSetup({ value: 'value', error: 'error', fieldType: FieldType.ROW });
        expect(wrapper.find('FormField').exists()).toBe(true);
        const formFieldProps = wrapper.find('FormField').props();
        expect((formFieldProps as any).error).toEqual(true);
        expect(wrapper.find('ValidationMessage').exists()).toBe(true);
        expect((wrapper.find('ValidationMessage').props() as any).text).toEqual(<FormattedMessage id="error" />);
    });

    it('Shows an error when there is one', () => {
        const { wrapper } = shallowSetup({});
        const formFieldProps = wrapper.find('FormField').props();
        (formFieldProps as any).onChange();
        expect(handleChange).toBeCalled();
        (formFieldProps as any).onBlur();
        expect(handleBlur).toBeCalled();
    });
});
