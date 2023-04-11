import { act, screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";

const mockLoginAction = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => {
  return () => ({
    loginUser: mockLoginAction,
  });
});

describe("Given a LoginForm component", () => {
  describe("When its rendered", () => {
    test("Then it should show a form with fields 'username' and 'password'", () => {
      renderWithProviders(<LoginForm />);

      const usernameInput = screen.getByLabelText(/username/i);
      const passwordInput = screen.getByLabelText(/password/i);

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });
  });

  describe("when it's filled in and its button 'Login' is clicked", () => {
    test("Then the form should be submitted", async () => {
      renderWithProviders(<LoginForm />);

      const usernameInput = screen.getByLabelText(/username/i)!;
      const passwordInput = screen.getByLabelText(/password/i)!;
      await act(async () => await userEvent.type(usernameInput, "adnim"));
      await act(async () => await userEvent.type(passwordInput, "adminadmin"));
      const button = screen.getByRole("button")!;
      await act(async () => await userEvent.click(button));

      expect(mockLoginAction).toHaveBeenCalled();
    });
  });
});
