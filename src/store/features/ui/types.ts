export interface ModalStructure {
  isError: boolean;
  isOpen: boolean;
  message: string;
}

export interface UiState {
  isLoading: boolean;
  modal: ModalStructure;
}

export type ModalPayload = Omit<ModalStructure, "isOpen">;
