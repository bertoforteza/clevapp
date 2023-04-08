import { ModalPayload, UiState } from "./types";
import {
  closeModalActionCreator,
  hideLoadingActionCreator,
  initialUiState,
  openModalActionCreator,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When it receives an initial state and a openModal action with error message 'Something went wrong' as payload", () => {
    test("Then it should return a new state with the reveived message and isError true", () => {
      const currentUiState: UiState = initialUiState;
      const modalPayload: ModalPayload = {
        isError: true,
        message: "Something went wrong",
      };
      const expectedUiState: UiState = {
        isLoading: false,
        modal: { isOpen: true, isError: true, message: "Something went wrong" },
      };
      const openModalAction = openModalActionCreator(modalPayload);

      const newUiState: UiState = uiReducer(currentUiState, openModalAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives a current state and a closeModal action", () => {
    test("Then it should return a new state with isOpen false and an empty modal", () => {
      const currentUiState: UiState = {
        isLoading: false,
        modal: { isOpen: true, isError: true, message: "Something went wrong" },
      };
      const expectedUiState: UiState = {
        isLoading: false,
        modal: { isOpen: false, isError: false, message: "" },
      };
      const closeModalAction = closeModalActionCreator();

      const newUiState: UiState = uiReducer(currentUiState, closeModalAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives an initial state with isLoading false and a showLoading action", () => {
    test("Then it should return a new state with isLoading property true", () => {
      const currentUiState: UiState = initialUiState;
      const expectedUiState: UiState = { ...initialUiState, isLoading: true };

      const newUiState: UiState = uiReducer(
        currentUiState,
        showLoadingActionCreator()
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives an initial state with isLoading true and a hideLoading action", () => {
    test("Then it should return a new state with isLoading false", () => {
      const currentUiState: UiState = { ...initialUiState, isLoading: true };
      const expectedUiState: UiState = initialUiState;

      const newUiState: UiState = uiReducer(
        currentUiState,
        hideLoadingActionCreator()
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
