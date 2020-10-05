import React from "react";
import GlobalStyles from "styles/globalStyles/globalStyles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const locale = DEFAULT_LOCALE;
export const decorators = [
  (Story) => (
    <div>
      <GlobalStyles />
      <Story />
    </div>
  ),
];
