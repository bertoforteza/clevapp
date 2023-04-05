import { screen } from "@testing-library/react";
import postListMock from "../../mocks/posts/postListMock";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import PostCardList from "./PostCardList";

describe("Given a PostCardList component", () => {
  describe("When its rendered with a list of 2 posts", () => {
    test("Then it should show a list with 2 post cards", () => {
      const expectedPosts = 2;

      renderWithProviders(<PostCardList posts={postListMock} />);

      const postCards = screen.getAllByRole("listitem");

      expect(postCards).toHaveLength(expectedPosts);
    });
  });
});
