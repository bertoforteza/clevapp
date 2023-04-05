import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When its rendered with the text 'Delete'", () => {
    test("Then it should show 'Delete' on it", () => {
      const expectedText = /delete/i;

      renderWithProviders(<Button action={() => {}} text="Delete" />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent(expectedText);
    });
  });

  describe("When it receives an ction", () => {
    test("Then it should call the received action on click", async () => {
      const buttonAction = jest.fn();

      renderWithProviders(<Button action={buttonAction} text="" />);

      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(buttonAction).toHaveBeenCalled();
    });
  });
});
