import { screen } from "@testing-library/react";
import postMock from "../../mocks/posts/postMock";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import PostCard from "./PostCard";

describe("Given a PostCard component", () => {
  describe("When its rendered with a post with the title 'qui est esse'", () => {
    test("Then it should show a heading level 2 with text 'qui est esse'", () => {
      const post = postMock;

      renderWithProviders(<PostCard post={post} />);

      const postTitle = screen.getByRole("heading", { name: post.title });

      expect(postTitle).toBeInTheDocument();
    });
  });
});
