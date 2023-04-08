import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Loader from "./Loader";

describe("Given a Loader component", () => {
  describe("When is rendered", () => {
    test("Then it should show a loading animation with aria label text 'The page is loading'", () => {
      renderWithProviders(<Loader />);

      const loader = screen.getByLabelText("The page is loading");

      expect(loader).toBeInTheDocument();
    });
  });
});
