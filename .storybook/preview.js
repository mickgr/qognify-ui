import React from "react";
import { IntlProvider } from "react-intl";
import GlobalStyles from "styles/globalStyles/globalStyles";
import { DEFAULT_LOCALE, getMessages } from "res/i18n/i18n";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const locale = DEFAULT_LOCALE;
export const decorators = [
  (Story) => (
    <div>
      <GlobalStyles />
      <IntlProvider
        locale={locale}
        key={locale}
        messages={getMessages(locale)}
        textComponent={"span"}>
        <Story />
      </IntlProvider>
    </div>
  ),
];
