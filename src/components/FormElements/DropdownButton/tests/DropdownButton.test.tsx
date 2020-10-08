import { shallow, mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import DropdownButton, { Props, SelectionMode } from "../DropdownButton";
import { StyledDropdownItem } from "../DropdownButtonStyles";

import styles from "../../../../styles/values";
import { DropdownItemModel, DropdownItemType } from "../DropdownItem";
import { Icon } from "../../..";

describe("dropdown button tests", () => {
  let props: Props<DropdownItemModel>;
  const clickMethod = jest.fn();
  const firstElementId = "saf2323";
  const optionsData: DropdownItemModel[] = [
    {
      id: firstElementId,
      text: "text some text",
      type: DropdownItemType.Option,
    },
    { id: "ssdf233", text: "text some test", type: DropdownItemType.Option },
    { id: "sa87667", text: "test some text", type: DropdownItemType.Option },
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

  it("should render dropdown button with a default selected option", () => {
    const defaultSelectedIds = new Set<string>();
    defaultSelectedIds.add(firstElementId);

    const wrapper = mount(
      <DropdownButton
        {...props}
        isShowClearSelection={false}
        selectedIds={defaultSelectedIds}
      />
    );
    expect((wrapper.find("DropdownItem").at(0).props() as any).isSelected).toBe(
      true
    );
  });

  it("should render dropdown button", () => {
    const wrapper = shallow(<DropdownButton {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render disabled dropdown button", () => {
    const wrapper = shallow(<DropdownButton {...props} disabled={true} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render dropdown button with icon", () => {
    const wrapper = shallow(
      <DropdownButton {...props} icon={<Icon d={Icon.res.REFRESH} />} />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it("should render dropdown button with text", () => {
    const wrapper = shallow(<DropdownButton {...props} text="loading" />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render dropdown button options with checkbox", () => {
    const wrapper = shallow(
      <DropdownButton {...props} selectionMode={SelectionMode.MultiSelect} />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it("should render StyledDropdownOption", () => {
    const wrapper = renderer
      .create(
        <StyledDropdownItem
          isCheckboxRendered={false}
          isClickable={true}
          isSelected={true}
        />
      )
      .toJSON();
    expect(wrapper).toHaveStyleRule("color", `${styles.color.shade.WHITE}`, {
      modifier: ":hover",
    });
    expect(wrapper).toHaveStyleRule(
      "background-color",
      `${styles.color.brand.PRIMARY_HOVER}`,
      { modifier: ":hover" }
    );
  });

  it("should render StyledDropdownOption with checkbox", () => {
    const wrapper = renderer
      .create(
        <StyledDropdownItem
          isCheckboxRendered={true}
          isClickable={true}
          isSelected={true}
        />
      )
      .toJSON();
    expect(wrapper).toHaveStyleRule("color", `${styles.color.shade.DARK}`, {
      modifier: ":hover",
    });
    expect(wrapper).toHaveStyleRule(
      "background-color",
      `${styles.color.shade.WHITE}`,
      { modifier: ":hover" }
    );
  });
});
