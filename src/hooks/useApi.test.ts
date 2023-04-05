import { renderHook } from "@testing-library/react";
import useApi from "./useApi";
import ProviderWrapper from "../utils/testUtils/ProviderWrapper";
import { store } from "../store/store";
import { loadPostsActionCreator } from "../store/features/postsSlice";
import postListMock from "../mocks/posts/postListMock";

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

      await getPosts();

      const loadPostsAction = loadPostsActionCreator(postListMock);

      expect(dispatchSpy).toHaveBeenCalledWith(loadPostsAction);
    });
  });
});
