import { renderHook } from "@testing-library/react";
import useApi from "./useApi";
import ProviderWrapper from "../../utils/testUtils/ProviderWrapper";
import { store } from "../../store/store";
import {
  deletePostActionCreator,
  loadPostByIdActionCreator,
  loadPostsActionCreator,
} from "../../store/features/posts/postsSlice";
import postListMock from "../../mocks/posts/postListMock";
import server from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import {
  hideLoadingActionCreator,
  openModalActionCreator,
  showLoadingActionCreator,
} from "../../store/features/ui/uiSlice";
import postMock from "../../mocks/posts/postMock";
import updatedPostMock from "../../mocks/posts/updatedPostMock";

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

  describe("When it's getPostByIt function is invoked with id 1", () => {
    test("Then it should invoke dispatch with showLoadingActionCreator, hideLoadingActionCreator and loadPostByIdActionCreator with the received post", async () => {
      const {
        result: {
          current: { getPostById },
        },
      } = renderHook(() => useApi(), {
        wrapper: ProviderWrapper,
      });
      const post = postMock;

      await getPostById(post.id);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        loadPostByIdActionCreator(post)
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        hideLoadingActionCreator()
      );
    });
  });

  describe("When it's getPostById function is invoked and the request fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should invoke dispatch with hideLoadingActionCreator and openModalActionCreator with an error", async () => {
      const {
        result: {
          current: { getPostById },
        },
      } = renderHook(() => useApi(), {
        wrapper: ProviderWrapper,
      });
      const post = postMock;

      await getPostById(post.id);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        hideLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        openModalActionCreator({
          isError: true,
          message: "There was a problem loading the post",
        })
      );
    });
  });

  describe("When it's updatePost function is invoked with a post with title 'lorem ipsum post title'", () => {
    test("Then it should invoke dispatch with showLoadingActionCreator, hideLoadingActionCreator, loadPostByIdActionCreator with the received post and openModalActionCreator with a success message", async () => {
      const {
        result: {
          current: { updatePost },
        },
      } = renderHook(() => useApi(), {
        wrapper: ProviderWrapper,
      });
      const updatedPost = updatedPostMock;

      await updatePost(updatedPost);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        loadPostByIdActionCreator(updatedPost)
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        hideLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        4,
        openModalActionCreator({
          isError: false,
          message: "Post successfully edited",
        })
      );
    });
  });

  describe("When it's updatePost function is invoked and the request fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then it should invoke dispatch with hideLoadingActionCreator and openModalActionCreator with an error", async () => {
      const {
        result: {
          current: { updatePost },
        },
      } = renderHook(() => useApi(), {
        wrapper: ProviderWrapper,
      });
      const updatedPost = updatedPostMock;

      await updatePost(updatedPost);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        hideLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        openModalActionCreator({
          isError: true,
          message: "There was a problem updating the post",
        })
      );
    });
  });
});
