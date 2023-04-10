import { screen } from "@testing-library/react";
import postListMock from "../../mocks/posts/postListMock";
import PostCardList from "./PostCardList";
import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";

describe("Given a PostCardList component", () => {
  describe("When its rendered with a list of 2 posts", () => {
    test("Then it should show a list with 2 post cards", () => {
      const expectedPosts = 2;

      renderRouterWithProviders({ ui: <PostCardList posts={postListMock} /> });

      const postCards = screen.getAllByRole("listitem");

      expect(postCards).toHaveLength(expectedPosts);
    });
  });
});
