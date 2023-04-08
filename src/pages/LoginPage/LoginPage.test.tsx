import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import LoginPage from "./LoginPage";
import * as ReactRouterDom from "react-router-dom";
import mockUserData from "../../mocks/user/mockUserData";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));
const mockNavigate = ReactRouterDom.Navigate;

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

  describe("When its rendered and a user is logged in", () => {
    test("Then it should invoke Navigate", () => {
      renderWithProviders(<LoginPage />, {
        user: { isLogged: true, ...mockUserData },
      });

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
