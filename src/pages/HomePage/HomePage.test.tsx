import { screen } from "@testing-library/react";
import postListMock from "../../mocks/posts/postListMock";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import HomePage from "./HomePage";
import { act } from "react-dom/test-utils";

const mockGetPosts = jest.fn();

jest.mock("../../hooks/useApi", () => {
  return () => ({
    getPosts: mockGetPosts,
  });
});

describe("Given a HomePage page", () => {
  describe("When its rendered", () => {
    test("Then it should show a list of posts", () => {
      renderWithProviders(<HomePage />, { posts: { posts: postListMock } });
      let postList;

      act(() => (postList = screen.getByRole("list")));

      expect(postList).toBeInTheDocument();
    });
  });
});
