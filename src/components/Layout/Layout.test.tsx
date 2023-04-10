import { screen } from "@testing-library/react";
import { initialUiState } from "../../store/features/ui/uiSlice";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";

describe("Given a Layout component", () => {
  describe("When its rendered and isLoading property is true", () => {
    test("Then it should show a Loader component", () => {
      renderRouterWithProviders({
        preloadedState: {
          ui: {
            ...initialUiState,
            isLoading: true,
          },
        },
      });

      const loader = screen.getByLabelText("The page is loading");

      expect(loader).toBeInTheDocument();
    });
  });
});
