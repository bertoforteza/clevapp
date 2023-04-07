import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import LoginPage from "./LoginPage";

describe("Given a LoginPage", () => {
  describe("When is rendered", () => {
    test("Then it should show a heading level 2 with text 'login'", () => {
      const headingText = /login/i;

      renderWithProviders(<LoginPage />);

      const heading = screen.getByRole("heading", {
        level: 2,
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
