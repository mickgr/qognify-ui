import React from "react";
// import "@storybook/addon-console"; - view console log on storybook
import GlobalStyles from "../src/styles/globalStyles/globalStyles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <div>
      <GlobalStyles />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Story />
      </div>
    </div>
  ),
];
