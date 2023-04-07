import { renderHook } from "@testing-library/react";
import useApi from "./useApi";
import ProviderWrapper from "../../utils/testUtils/ProviderWrapper";
import { store } from "../../store/store";
import {
  deletePostActionCreator,
  loadPostsActionCreator,
} from "../../store/features/posts/postsSlice";
import postListMock from "../../mocks/posts/postListMock";
import server from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { openModalActionCreator } from "../../store/features/ui/uiSlice";

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given a useApi custom hook", () => {
  describe("When it's getPosts function is invoked", () => {
    test("Then it should invoke dispatch with loadPostsActionCreator and a list of posts", async () => {
      const {
        result: {
          current: { getPosts },
        },
      } = renderHook(() => useApi(), {
        wrapper: ProviderWrapper,
      });
      const loadPostsAction = loadPostsActionCreator(postListMock);

      await getPosts();

      expect(dispatchSpy).toHaveBeenCalledWith(loadPostsAction);
    });
  });

  describe("When it's getPosts function is invoked and the request fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should invoke dispatch with openModalActionCreator with an error message 'Could not find any posts'", async () => {
      const {
        result: {
          current: { getPosts },
        },
      } = renderHook(() => useApi(), {
        wrapper: ProviderWrapper,
      });
      const openModalAction = openModalActionCreator({
        isError: true,
        message: "Could not find any posts",
      });

      await getPosts();

      expect(dispatchSpy).toHaveBeenCalledWith(openModalAction);
    });
  });

  describe("When it's deletePost function is invoked with id 1", () => {
    test("Then it should invoke dispatch with deletePostActionCreator with the same id", () => {
      const {
        result: {
          current: { deletePost },
        },
      } = renderHook(() => useApi(), {
        wrapper: ProviderWrapper,
      });
      const deletePostAction = deletePostActionCreator(1);

      deletePost(1);

      expect(dispatchSpy).toHaveBeenCalledWith(deletePostAction);
    });
  });
});
