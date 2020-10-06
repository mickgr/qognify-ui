import React, { useCallback } from "react";

import { Checkbox } from "components/FormElements";

import {
  StyledDropdownItem,
  StyledDropdownitemsWithCheckbox,
  StyledDropdownItemText,
  StyledDropdownDelimiter,
  StyledDropdownItemContentContainer,
} from "components/FormElements/DropdownButton/DropdownButtonStyles";

export enum DropdownItemType {
  Title,
  Delimiter,
  Option,
}

export interface DropdownItemModel {
  id: string;
  text: string;
  type: DropdownItemType;
}

export interface DropdownItemOptionStateIndicatorProps<
  T extends DropdownItemModel
> {
  dropDownItemModel: T;
}

export type DropdownItemOptionStateIndicator<
  T extends DropdownItemModel
> = React.ComponentType<DropdownItemOptionStateIndicatorProps<T>>;

interface Props<T extends DropdownItemModel> {
  // onClick should be used to get the data from option, for storybook we use actions
  onClick: (selectedItem: T) => void;
  model: T;
  isMultiSelect?: boolean;
  isSelected?: boolean;
  dropdownItemOptionStateIndicatorComponent?: DropdownItemOptionStateIndicator<
    T
  >;
}

// https://github.com/Semantic-Org/Semantic-UI-React/issues/3433
// In multiselect, clicking any part of the dropdownItem manipulates the checkbox.
// The checkbox fires two click events, so we need to avoid the one sent from the checkbox.
const onCheckboxClick: (
  e: React.MouseEvent<HTMLInputElement, MouseEvent>
) => void = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
  e.stopPropagation();
};
//In order to avoid getting error for Input element with checked property without onChange handler,
//adding this dummy handler
const onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  e.stopPropagation();
};
function DropdownItem<T extends DropdownItemModel>(
  props: Props<T>
): JSX.Element {
  const {
    model,
    isMultiSelect = false,
    onClick,
    isSelected = false,
    dropdownItemOptionStateIndicatorComponent,
  } = props;

  const onDropdownItemClick = useCallback(() => {
    onClick(model);
  }, [model, onClick]);

  let dropdownItemToRender;

  if (model.type === DropdownItemType.Delimiter) {
    dropdownItemToRender = <StyledDropdownDelimiter />;
  } else {
    const dropdownItemTextComponent = (
      <StyledDropdownItemText isBold={model.type === DropdownItemType.Title}>
        {model.text}
      </StyledDropdownItemText>
    );

    const isShowCheckbox =
      model.type === DropdownItemType.Option && isMultiSelect;
    let dropdownItemContent;

    if (isShowCheckbox) {
      dropdownItemContent = (
        <StyledDropdownitemsWithCheckbox>
          <Checkbox
            selected={isSelected}
            onClick={onCheckboxClick}
            onChange={onCheckboxChange}
          />
          {dropdownItemTextComponent}
        </StyledDropdownitemsWithCheckbox>
      );
    } else {
      dropdownItemContent = dropdownItemTextComponent;
    }

    let stateIndicatorComponent;
    if (
      model.type === DropdownItemType.Option &&
      dropdownItemOptionStateIndicatorComponent
    ) {
      const DropdownItemOptionStateIndicatorComponent = dropdownItemOptionStateIndicatorComponent;
      stateIndicatorComponent = (
        <DropdownItemOptionStateIndicatorComponent dropDownItemModel={model} />
      );
    }

    dropdownItemToRender = (
      <StyledDropdownItem
        isSelected={isSelected}
        key={model.id}
        onClick={onDropdownItemClick}
        isCheckboxRendered={isShowCheckbox}
        isClickable={model.type === DropdownItemType.Option}>
        <StyledDropdownItemContentContainer>
          {dropdownItemContent}
        </StyledDropdownItemContentContainer>
        {stateIndicatorComponent}
      </StyledDropdownItem>
    );
  }

  return dropdownItemToRender;
}

export default DropdownItem;
