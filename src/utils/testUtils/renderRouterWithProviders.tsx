import { PreloadedState } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import router, { getRouter } from "../../router/router";
import renderWithProviders from "./renderWithProviders";
import { RouterProvider } from "react-router-dom";

interface RenderRouterWithProvidersProps {
  preloadedState?: PreloadedState<RootState>;
  ui?: React.ReactElement;
}

const renderRouterWithProviders = ({
  ui,
  preloadedState,
}: RenderRouterWithProvidersProps) => {
  const routerWithProvider = ui ? getRouter(ui) : router;

  return renderWithProviders(
    <RouterProvider router={routerWithProvider} />,
    preloadedState
  );
};

export default renderRouterWithProviders;
