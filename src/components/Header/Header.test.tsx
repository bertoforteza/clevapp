import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading level 1 with text 'Clevapp'", () => {
      const headerTitle = /clevapp/i;

      renderWithProviders(<Header />);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: headerTitle,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
