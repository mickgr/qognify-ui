import { mount, shallow } from "enzyme";
import React from "react";
import "jest-styled-components";

import styles from "styles/values";
import { Icon } from "..";

interface Props {
  d: string;
  width?: number;
  height?: number;
  wide?: boolean;
  xWide?: boolean;
  color?: string;
}

describe("CustomPieChart test", () => {
  let props: Props;
  const extraWide = "0 0 48 24";
  const wideBox = "0 0 36 24";
  const compactBox = "0 0 24 24";
  beforeEach(() => {
    props = {
      d: Icon.res.DEVICE_PTZ,
      width: undefined,
      height: undefined,
      wide: false,
      xWide: false,
      color: undefined,
    };
  });

  it("should render Icon with default values", () => {
    const wrapper = shallow(<Icon {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render colored Icon", () => {
    const wrapper = shallow(
      <Icon {...props} color={styles.color.brand.PRIMARY} />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it("should render Icon with width of 32", () => {
    const wrapper = shallow(<Icon {...props} width={32} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render colored Icon width height of 32", () => {
    const wrapper = shallow(<Icon {...props} height={32} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render wide Icon", () => {
    const wrapper = mount(<Icon {...props} boxSize="wide" />);
    expect(wrapper.find(`[viewBox="${wideBox}"]`).exists()).toBe(true);
  });

  it("should render extra wide Icon", () => {
    const wrapper = mount(<Icon {...props} boxSize="extraWide" />);
    expect(wrapper.find(`[viewBox="${extraWide}"]`).exists()).toBe(true);
  });

  it("should render compactBox Icon", () => {
    const wrapper = mount(<Icon {...props} />);
    expect(wrapper.find(`[viewBox="${compactBox}"]`).exists()).toBe(true);
  });
});
