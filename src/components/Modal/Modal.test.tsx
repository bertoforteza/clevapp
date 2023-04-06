import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Modal from "./Modal";
import { closeModalActionCreator } from "../../store/features/ui/uiSlice";

const mockDispatch = jest.fn();

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

jest.useFakeTimers();

describe("Given a Modal component", () => {
  describe("When it's rendered with message 'Post successfully deleted'", () => {
    const modalMessage = "Post successfully deleted";

    renderWithProviders(<Modal message={modalMessage} isError={false} />);

    test("Then it should show the received message", () => {
      const modal = screen.getByText(modalMessage);

      expect(modal).toBeInTheDocument();
    });

    test("After 3 seconds, Then it should invoke clodeModalActionCreator", () => {
      const closeModalTime = 3000;
      jest.advanceTimersByTime(closeModalTime);

      expect(mockDispatch).toHaveBeenCalledWith(closeModalActionCreator());
    });
  });

  describe("When it's rendered with message 'Could not find any posts' and isError true", () => {
    test("Then it should show the received text", () => {
      const modalMessage = "Could not find any posts";

      renderWithProviders(<Modal message={modalMessage} isError={true} />);

      const modal = screen.getByText(modalMessage);

      expect(modal).toBeInTheDocument();
    });
  });
});
