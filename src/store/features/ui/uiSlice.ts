import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalPayload, UiState } from "./types";

export const initialUiState: UiState = {
  isLoading: false,
  modal: {
    isError: false,
    isOpen: false,
    message: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    openModal: (currentUiState, action: PayloadAction<ModalPayload>) => ({
      ...currentUiState,
      modal: {
        isOpen: true,
        isError: action.payload.isError,
        message: action.payload.message,
      },
    }),

    closeModal: (currentUiState) => ({
      ...currentUiState,
      modal: initialUiState.modal,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
} = uiSlice.actions;
