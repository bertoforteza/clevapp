import { PreloadedState } from "redux";
import { RootState, setupStore, store } from "../../store/store";
import mainTheme from "../../styles/mainTheme";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import { render } from "@testing-library/react";

const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <Provider store={testStore}>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </Provider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
