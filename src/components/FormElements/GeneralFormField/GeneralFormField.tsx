import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { ValidationMessage } from "components/FormElements/ValidationMessage";
import { Icon } from "components/common/Icon";
import styles from "styles/values";
import {
  StyledGeneralFormField,
  StyledGeneralFormLabel,
  StyledGeneralFormLabelTextarea,
  StyledGeneralFormLabelText,
} from "./GeneralFormFieldStyles";
import {
  FormFieldTextarea,
  FormField,
  FormFieldDropdown,
} from "components/FormElements";
import { Option } from "../FormFieldDropdown/FormFieldDropdown";

export enum FieldType {
  ROW,
  TEXT_AREA,
  DROP_DOWN,
}

export interface GeneralFormFieldProps {
  name: string;
  title: string;
  handleChange: (e: React.ChangeEvent) => void;
  handleBlur: (e: React.FocusEvent) => void;
  medium?: boolean;
  value?: string;
  placeholder?: string;
  maxLength?: number;
  fieldType?: FieldType;
  error?: string;
  isDisabled?: boolean;
  options?: Option[];
  onClick?: (id: string) => void;
  type?: string;
}

const GeneralFormField: React.FC<GeneralFormFieldProps> = (
  props: GeneralFormFieldProps
) => {
  const {
    name,
    title,
    placeholder,
    maxLength,
    fieldType,
    value,
    error,
    isDisabled,
    handleChange,
    handleBlur,
    medium,
    options = [],
    onClick,
    type = "text",
  } = props;

  const intl = useIntl();
  let ContainerComponent;
  let FormFieldComponent;
  switch (fieldType) {
    case FieldType.TEXT_AREA:
      ContainerComponent = StyledGeneralFormLabelTextarea;
      FormFieldComponent = FormFieldTextarea;
      break;
    case FieldType.DROP_DOWN:
      ContainerComponent = StyledGeneralFormLabel;
      FormFieldComponent = FormFieldDropdown;
      break;
    case FieldType.ROW:
    default:
      ContainerComponent = StyledGeneralFormLabel;
      FormFieldComponent = FormField;
      break;
  }

  return (
    <StyledGeneralFormField id={`StyledGeneralFormField_${name}`}>
      <ContainerComponent medium={medium}>
        <StyledGeneralFormLabelText>
          {intl.formatMessage({ id: title })}
        </StyledGeneralFormLabelText>
        <FormFieldComponent
          medium={medium}
          type={type}
          name={name}
          value={value}
          id={name}
          error={!!error}
          disabled={isDisabled}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          maxLength={maxLength}
          options={options}
          onClick={onClick}
        />
      </ContainerComponent>
      {error && (
        <ValidationMessage
          id={`${name}Error`}
          text={<FormattedMessage id={error} />}
          icon={
            <Icon
              d={Icon.res.CIRCLE_ERROR}
              color={styles.color.utility.ERROR}
              width={16}
              height={16}
            />
          }
        />
      )}
    </StyledGeneralFormField>
  );
};

export default GeneralFormField;
