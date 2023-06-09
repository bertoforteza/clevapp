import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import postMock from "../../mocks/posts/postMock";
import DetailPostPage from "./DetailPostPage";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";
import { PostStructure } from "../../types";

const mockGetPostById = jest.fn();
jest.mock("../../hooks/useApi/useApi", () => {
  return () => ({
    getPostById: mockGetPostById,
  });
});

const mockUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Given a DetailPostPage page", () => {
  describe("When its rendered with a post with title 'qui est esse'", () => {
    test("Then it should show a heading level 2 with the received post title", () => {
      const post: PostStructure = postMock;
      renderRouterWithProviders({
        ui: <DetailPostPage />,
        preloadedState: { posts: { posts: [post] } },
      });

      const postTitle = screen.getByRole("heading", {
        level: 2,
        name: post.title,
      });

      expect(postTitle).toBeInTheDocument();
      expect(mockGetPostById).toHaveBeenCalled();
    });
  });

  describe("Weh its rendered and a user clicks on the 'home' button", () => {
    test("Then useNavigate should be invoked", async () => {
      const post: PostStructure = postMock;
      renderRouterWithProviders({
        ui: <DetailPostPage />,
        preloadedState: { posts: { posts: [post] } },
      });

      const homeButton = screen.getByRole("button", { name: /home/i });
      await act(async () => await userEvent.click(homeButton));

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });

  describe("Weh its rendered and a user clicks on the 'edit' button", () => {
    test("Then useNavigate should be invoked", async () => {
      const post: PostStructure = postMock;
      renderRouterWithProviders({
        ui: <DetailPostPage />,
        preloadedState: { posts: { posts: [post] } },
      });

      const editButton = screen.getByRole("button", { name: /edit/i });
      await act(async () => await userEvent.click(editButton));

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
});
