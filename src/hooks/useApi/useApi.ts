import axios from "axios";
import { useCallback } from "react";
import { useAppDispatch } from "../../store/hooks";
import {
  deletePostActionCreator,
  loadPostsActionCreator,
} from "../../store/features/posts/postsSlice";
import { ApiResponse } from "../types";
import { openModalActionCreator } from "../../store/features/ui/uiSlice";

const apiUrl = process.env.REACT_APP_API_URL!;

const useApi = () => {
  const dispatch = useAppDispatch();

  const getPosts = useCallback(async () => {
    try {
      const response = await axios.get(apiUrl);

      const posts: ApiResponse = response.data;

      dispatch(loadPostsActionCreator(posts));
    } catch {
      dispatch(
        openModalActionCreator({
          isError: true,
          message: "Could not find any posts",
        })
      );
    }
  }, [dispatch]);

  const deletePost = (id: number) => {
    dispatch(deletePostActionCreator(id));
    dispatch(
      openModalActionCreator({
        isError: false,
        message: "Post successfully deleted",
      })
    );
  };

  return { getPosts, deletePost };
};

export default useApi;
