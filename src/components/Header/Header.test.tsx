import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Header from "./Header";
import mockUserData from "../../mocks/user/mockUserData";

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

  describe("When its rendered and a user is logged in", () => {
    test("Then it should show a logout Button", () => {
      renderWithProviders(<Header />, {
        user: { isLogged: true, ...mockUserData },
      });

      const logoutButton = screen.getByRole("button");

      expect(logoutButton).toBeInTheDocument();
    });
  });
});
