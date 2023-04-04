import postListMock from "../../mocks/postListMock";
import {
  loadPostsActionCreator,
  postsInitialState,
  postsReducer,
} from "./postsSlice";
import { PostStructure, PostsState } from "./types";

describe("Given a postReducer", () => {
  describe("When it receives an empty initial state and a loadPosts action with a list with 2 posts as payload", () => {
    test("Then it should return a new state with the received list of posts", () => {
      const currentPostsState: PostsState = postsInitialState;
      const postList: PostStructure[] = postListMock;
      const loadPostsAction = loadPostsActionCreator(postList);
      const expectedPostsState: PostsState = {
        posts: postList,
      };

      const newPostsState: PostsState = postsReducer(
        currentPostsState,
        loadPostsAction
      );

      expect(newPostsState).toStrictEqual(expectedPostsState);
    });
  });
});
