import React, { useCallback } from "react";
import {
  StyledDropdownButtonWrapper,
  StyledDropdownButtonTitle,
  StyleMainIconContainer,
  StyledDropdownItems,
  StyledDropdownDelimiter,
  StyledDropdownItem,
} from "./DropdownButtonStyles";
import { DropdownItem, DropdownItemType } from ".";
import {
  DropdownItemModel,
  DropdownItemOptionStateIndicator,
} from "./DropdownItem";
import { ArrowIcon, useDropdownOpenToggle } from "../..";

export enum SelectionMode {
  SingleSelect,
  MultiStateSingleSelect,
  MultiSelect,
}

export interface Props<T extends DropdownItemModel> {
  id?: string;
  disabled?: boolean;
  /**
   * null is received as the parameter if the clear selection button was clicked
   */
  onSelectionChanged?: (lastClickedItemModel: T | null) => void;
  /**
   * This is relevant for SelectionMode.MultiStateSingleSelect.
   * It is triggered when a selected option is clicked.
   */
  onMultiStateSingleSelectItemClicked?: (lastClickedItemModel: T) => void;
  icon?: React.ReactNode;
  text?: React.ReactNode;
  items: T[];
  selectionMode?: SelectionMode;
  isShowArrowIcon?: boolean;
  clearSelectionItemText?: string;
  selectedIds: Set<string>;
  setSelectedIds: React.Dispatch<React.SetStateAction<Set<string>>>;
  dropdownItemOptionStateIndicatorComponent?: DropdownItemOptionStateIndicator<
    T
  >;
  isShowClearSelection?: boolean;
}

function DropdownButton<T extends DropdownItemModel>(
  props: Props<T>
): JSX.Element {
  const {
    id,
    disabled = false,
    icon,
    text,
    items,
    selectionMode = SelectionMode.SingleSelect,
    onSelectionChanged,
    onMultiStateSingleSelectItemClicked,
    isShowArrowIcon = true,
    clearSelectionItemText,
    selectedIds,
    setSelectedIds,
    dropdownItemOptionStateIndicatorComponent,
    isShowClearSelection = true,
  } = props;

  const [isOpen, setIsOpen, node] = useDropdownOpenToggle();

  const setNewSelection = useCallback(
    (newSelectedIds: Set<string> | null, lastClickedItemModel: T | null) => {
      // If newSelectedIds is null, the selection should not change
      if (newSelectedIds !== null) {
        setSelectedIds(newSelectedIds);
        if (onSelectionChanged) {
          onSelectionChanged(lastClickedItemModel);
        }

        if (selectionMode === SelectionMode.SingleSelect) {
          setIsOpen(false);
        }
      }
    },
    [onSelectionChanged, setSelectedIds, setIsOpen, selectionMode]
  );

  const onClearSelectionClick = useCallback(() => {
    setNewSelection(new Set<string>(), null);
  }, [setNewSelection]);

  const onDropdownItemClick = useCallback(
    (clickedDropdownItem: T) => {
      // Only clicked dropdown item option may change the current selection.
      // (Clear selection click is handled in onClearSelectionClick)
      if (clickedDropdownItem.type === DropdownItemType.Option) {
        let newSelectedIds: Set<string> | null = null;

        switch (selectionMode) {
          case SelectionMode.SingleSelect:
          case SelectionMode.MultiStateSingleSelect:
            // The selection is changed if the clicked option wasn't selected
            if (!selectedIds.has(clickedDropdownItem.id)) {
              newSelectedIds = new Set<string>();
              newSelectedIds.add(clickedDropdownItem.id);
            }
            // When the clicked option was already selected, the selection isn't changed.
            // We should trigger onMultiStateSingleSelectItemClicked for SelectionMode.MultiStateSingleSelect
            else if (
              selectionMode === SelectionMode.MultiStateSingleSelect &&
              onMultiStateSingleSelectItemClicked
            ) {
              onMultiStateSingleSelectItemClicked(clickedDropdownItem);
            }
            break;
          case SelectionMode.MultiSelect:
            newSelectedIds = new Set(selectedIds);
            // The item is currently selected and need to deselect it
            if (selectedIds.has(clickedDropdownItem.id)) {
              newSelectedIds.delete(clickedDropdownItem.id);
            } else {
              newSelectedIds.add(clickedDropdownItem.id);
            }
            break;
          default:
            break;
        }

        setNewSelection(newSelectedIds, clickedDropdownItem);
      }
    },
    [
      onMultiStateSingleSelectItemClicked,
      selectedIds,
      selectionMode,
      setNewSelection,
    ]
  );

  const onDropdownButtonClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [setIsOpen, isOpen]);

  return (
    <StyledDropdownButtonWrapper id={id} disabled={disabled} ref={node}>
      <StyledDropdownButtonTitle onClick={onDropdownButtonClick}>
        {!!icon && (
          <StyleMainIconContainer
            isAnythingSelected={selectedIds && selectedIds.size > 0}>
            {icon}
          </StyleMainIconContainer>
        )}
        {!!text && text}
        {isShowArrowIcon && <ArrowIcon isPointedUp={isOpen} />}
      </StyledDropdownButtonTitle>
      <StyledDropdownItems isOpen={isOpen}>
        {items.map((item) => (
          <DropdownItem<T>
            key={item.id}
            model={item}
            isMultiSelect={selectionMode === SelectionMode.MultiSelect}
            onClick={onDropdownItemClick}
            isSelected={selectedIds.has(item.id)}
            dropdownItemOptionStateIndicatorComponent={
              dropdownItemOptionStateIndicatorComponent
            }
          />
        ))}
        {isShowClearSelection && (
          <>
            <StyledDropdownDelimiter />
            <StyledDropdownItem
              isSelected={false}
              key="clear_selection"
              onClick={onClearSelectionClick}
              isCheckboxRendered={false}
              isClickable>
              {clearSelectionItemText
                ? clearSelectionItemText
                : "Clear Selection"}
            </StyledDropdownItem>
          </>
        )}
      </StyledDropdownItems>
    </StyledDropdownButtonWrapper>
  );
}

export default DropdownButton;
