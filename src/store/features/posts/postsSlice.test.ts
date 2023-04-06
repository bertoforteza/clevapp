import postListMock from "../../../mocks/posts/postListMock";
import {
  deletePostActionCreator,
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

  describe("When it receives an initial state with 2 posts and a deletePost action with id 1", () => {
    test("Then it should return a new state without the post with id 1", () => {
      const currentPostsState: PostsState = {
        posts: postListMock,
      };
      const postToDelete = postListMock[0];
      const deletePostAction = deletePostActionCreator(postToDelete.id);
      const expectedPostsState: PostsState = {
        posts: [postListMock[1]],
      };

      const newPostsState: PostsState = postsReducer(
        currentPostsState,
        deletePostAction
      );

      expect(newPostsState).toStrictEqual(expectedPostsState);
    });
  });
});
