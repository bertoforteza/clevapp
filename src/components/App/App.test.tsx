import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import App from "./App";

describe("Given an App component", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading level 1 with text 'Clevapp'", () => {
      const headerTitle = /clevapp/i;

      renderWithProviders(<App />);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: headerTitle,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When its rendered and isOpen state property is true", () => {
    test("Then it should show a Modal component", () => {
      const modalMessage = "Wrong credentials";

      renderWithProviders(<App />, {
        ui: {
          isLoading: false,
          modal: { isOpen: true, isError: true, message: modalMessage },
        },
      });

      const modal = screen.getByText(modalMessage);

      expect(modal).toBeInTheDocument();
    });
  });
});
