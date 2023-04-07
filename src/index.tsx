import React from "react";
import "@fontsource/work-sans";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { store } from "./store/store";
import mainTheme from "./styles/mainTheme";
import GlobalStyle from "./styles/GlobalStyle";
import App from "./components/App/App";
import router from "./router/router";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
