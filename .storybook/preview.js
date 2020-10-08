import React from "react";
import "@storybook/addon-console";
import GlobalStyles from "../src/styles/globalStyles/globalStyles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <div>
      <GlobalStyles />
      <Story />
    </div>
  ),
];
