import { act, screen } from "@testing-library/react";
import EditPostForm from "./EditPostForm";
import postMock from "../../mocks/posts/postMock";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";
import userEvent from "@testing-library/user-event";

const mockUpdatePostAction = jest.fn();

jest.mock("../../hooks/useApi/useApi", () => {
  return () => ({
    updatePost: mockUpdatePostAction,
  });
});

describe("Given an EditPostForm component", () => {
  describe("When its rendered", () => {
    test("Then it should show a form with fields 'Title' and 'Post'", () => {
      renderRouterWithProviders({
        ui: <EditPostForm />,
        preloadedState: { posts: { posts: [postMock] } },
      });

      const titleField = screen.getByLabelText(/title/i);
      const postField = screen.getByLabelText(/post/i);

      expect(titleField).toBeInTheDocument();
      expect(postField).toBeInTheDocument();
    });
  });

  describe("When its rendered, the title field is filled and its button 'Edit' is clicked", () => {
    test("Then the form should be submitted", async () => {
      renderRouterWithProviders({
        ui: <EditPostForm />,
        preloadedState: { posts: { posts: [postMock] } },
      });

      const titleField = screen.getByLabelText(/title/i);
      await act(async () => await userEvent.type(titleField, "Lorem ipsum"));
      const editButton = screen.getByRole("button", { name: /edit/i });
      await act(async () => await userEvent.click(editButton));

      expect(mockUpdatePostAction).toHaveBeenCalled();
    });
  });
});
