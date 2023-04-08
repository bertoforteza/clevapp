import { screen } from "@testing-library/react";
import postListMock from "../../mocks/posts/postListMock";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import HomePage from "./HomePage";
import { act } from "react-dom/test-utils";
import mockUserData from "../../mocks/user/mockUserData";
import * as ReactRouterDom from "react-router-dom";
import { initialUserState } from "../../store/features/user/userSlice";

const mockGetPosts = jest.fn();

jest.mock("../../hooks/useApi/useApi", () => {
  return () => ({
    getPosts: mockGetPosts,
  });
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));
const mockNavigate = ReactRouterDom.Navigate;

describe("Given a HomePage page", () => {
  describe("When its rendered and a user is logged in", () => {
    test("Then it should show a list of posts", () => {
      renderWithProviders(<HomePage />, {
        posts: { posts: postListMock },
        user: { isLogged: true, ...mockUserData },
      });
      let postList;

      act(() => (postList = screen.getByRole("list")));

      expect(postList).toBeInTheDocument();
    });
  });

  describe("When its rendered and no user is logged in", () => {
    test("Then it should invoke Navigate", () => {
      renderWithProviders(<HomePage />, { user: { ...initialUserState } });

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
