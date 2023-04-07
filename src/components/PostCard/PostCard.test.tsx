import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import postMock from "../../mocks/posts/postMock";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import PostCard from "./PostCard";

const mockDeletePost = jest.fn();
jest.mock("../../hooks/useApi/useApi", () => {
  return () => ({
    deletePost: mockDeletePost,
  });
});

describe("Given a PostCard component", () => {
  describe("When its rendered with a post with the title 'qui est esse'", () => {
    test("Then it should show a heading level 2 with text 'qui est esse'", () => {
      const post = postMock;

      renderWithProviders(<PostCard post={post} />);

      const postTitle = screen.getByRole("heading", { name: post.title });

      expect(postTitle).toBeInTheDocument();
    });
  });

  describe("When its rendered and the user clicks on it's 'delete' button", () => {
    test("Then deletePost function should be invoked", async () => {
      const post = postMock;
      const buttonText = /delete/i;

      renderWithProviders(<PostCard post={post} />);

      const deleteButton = screen.getByRole("button", { name: buttonText });
      await userEvent.click(deleteButton);

      expect(mockDeletePost).toHaveBeenCalled();
    });
  });
});
