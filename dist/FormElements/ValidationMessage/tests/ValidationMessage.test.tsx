import { shallow } from "enzyme";
import React from "react";

import { ValidationMessage } from "..";
import { Icon } from "../../..";
import { Props } from "../ValidationMessage";

describe("Validation message test", () => {
  let props: Props;
  beforeEach(() => {
    props = {
      id: "234sdfas",
      text: "loading",
      icon: <Icon d={Icon.res.DEVICE_AUDIO_IN} />,
    };
  });

  it("should render validation message component", () => {
    const wrapper = shallow(<ValidationMessage {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
});
