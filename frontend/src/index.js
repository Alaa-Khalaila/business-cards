import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import global_en from "./translation/en/global.json";
import global_ar from "./translation/ar/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
const container = document.getElementById("root");
const root = createRoot(container);
i18next.init({
  interpolation: { escapeValue: false },
  lng: "ar",
  resources: {
    en: {
      global: global_en,
    },
    ar: {
      global: global_ar,
    },
  },
});

root.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);
