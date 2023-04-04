import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PostStructure, PostsState } from "./types";

export const postsInitialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState: postsInitialState,
  reducers: {
    loadPosts: (
      currentPostsState,
      action: PayloadAction<PostStructure[]>
    ): PostsState => ({
      ...currentPostsState,
      posts: [...action.payload],
    }),
  },
});

export const postsReducer = postsSlice.reducer;

export const { loadPosts: loadPostsActionCreator } = postsSlice.actions;
