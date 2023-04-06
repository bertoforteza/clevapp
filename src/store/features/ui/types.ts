export interface ModalStructure {
  isError: boolean;
  isOpen: boolean;
  message: string;
}

export interface UiState {
  isLoading: boolean;
  modal: ModalStructure;
}

export type ModalPayload = Pick<ModalStructure, "isError" | "message">;
