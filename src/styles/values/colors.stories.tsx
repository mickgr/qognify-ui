import { Meta, storiesOf, Story } from "@storybook/react";
import React from "react";
import styles from ".";

// A component for displaying individual color swatches.
const Color = (props) => (
  <li
    style={{
      borderRadius: "5px",
      border: "1px solid lightgray",
      padding: "5px",
    }}>
    <span
      style={{
        background: props.color,
        display: "block",
        height: "4em",
        marginBottom: "0.3em",
        borderRadius: "5px",
        border: "1px solid lightgray",
      }}
    />
    <span style={{ textTransform: "capitalize", color: "black" }}>
      {props.name}
    </span>
  </li>
);

// A component for displaying a group of colors.
const ColorGroup = (props) => (
  <ul
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(120px, 175px))",
      gridGap: "20px",
      marginBottom: "40px",
    }}>
    {Object.keys(props.group).map(function (colorName, keyIndex) {
      return (
        <Color color={props.group[colorName]} name={colorName} key={keyIndex} />
      );
    })}
  </ul>
);

export default {
  title: "Styles/Colors",
  component: ColorGroup,
  args: {},
} as Meta;

const Template: Story = (args) => <ColorGroup {...args} />;

export const Shade = Template.bind({});
Shade.args = { group: styles.color.shade };

export const Brand = Template.bind({});
Brand.args = { group: styles.color.brand };

export const Utility = Template.bind({});
Utility.args = { group: styles.color.utility };

export const Gradient = Template.bind({});
Gradient.args = { group: styles.color.gradient };
