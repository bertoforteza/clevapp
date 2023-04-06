import { useAppDispatch } from "../store/hooks";
import axios from "axios";
import { ApiResponse } from "./types";
import {
  deletePostActionCreator,
  loadPostsActionCreator,
} from "../store/features/posts/postsSlice";
import { useCallback } from "react";

const apiUrl = process.env.REACT_APP_API_URL!;

const useApi = () => {
  const dispatch = useAppDispatch();

  const getPosts = useCallback(async () => {
    const response = await axios.get(apiUrl);

    const posts: ApiResponse = response.data;

    dispatch(loadPostsActionCreator(posts));
  }, [dispatch]);

  const deletePost = (id: number) => {
    dispatch(deletePostActionCreator(id));
  };

  return { getPosts, deletePost };
};

export default useApi;
