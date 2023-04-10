import { screen } from "@testing-library/react";
import postMock from "../../mocks/posts/postMock";
import { PostStructure } from "../../store/features/posts/types";
import DetailPostPage from "./DetailPostPage";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";

const mockGetPostById = jest.fn();
jest.mock("../../hooks/useApi/useApi", () => {
  return () => ({
    getPostById: mockGetPostById,
  });
});

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
});
