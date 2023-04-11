import axios from "axios";
import { useCallback } from "react";
import { useAppDispatch } from "../../store/hooks";
import {
  deletePostActionCreator,
  loadPostsActionCreator,
  loadPostByIdActionCreator,
} from "../../store/features/posts/postsSlice";
import { ApiResponse, UseApiStructure } from "../types";
import {
  hideLoadingActionCreator,
  openModalActionCreator,
  showLoadingActionCreator,
} from "../../store/features/ui/uiSlice";
import { PostStructure } from "../../types";

const apiUrl = process.env.REACT_APP_API_URL!;

const useApi = (): UseApiStructure => {
  const dispatch = useAppDispatch();

  const getPosts = useCallback(async () => {
    try {
      dispatch(showLoadingActionCreator());

      const response = await axios.get(apiUrl);

      const posts: ApiResponse = response.data;

      dispatch(loadPostsActionCreator(posts));

      dispatch(hideLoadingActionCreator());
    } catch {
      dispatch(hideLoadingActionCreator());

      dispatch(
        openModalActionCreator({
          isError: true,
          message: "Could not find any posts",
        })
      );
    }
  }, [dispatch]);

  const deletePost = (postId: number) => {
    dispatch(deletePostActionCreator(postId));
    dispatch(
      openModalActionCreator({
        isError: false,
        message: "Post successfully deleted",
      })
    );
  };

  const getPostById = useCallback(
    async (postId: number) => {
      try {
        dispatch(showLoadingActionCreator());
        const response = await axios.get(`${apiUrl}/${postId}`);

        const post: PostStructure = response.data;

        dispatch(loadPostByIdActionCreator(post));
        dispatch(hideLoadingActionCreator());
      } catch {
        dispatch(hideLoadingActionCreator());

        dispatch(
          openModalActionCreator({
            isError: true,
            message: "There was a problem loading the post",
          })
        );
      }
    },
    [dispatch]
  );

  const updatePost = async (post: PostStructure) => {
    const { id } = post;

    try {
      dispatch(showLoadingActionCreator());

      const response = await axios.patch(`${apiUrl}/${id}`, post);
      const updatedPost: PostStructure = response.data;

      dispatch(loadPostByIdActionCreator(updatedPost));
      dispatch(hideLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: false,
          message: "Post successfully edited",
        })
      );
    } catch {
      dispatch(hideLoadingActionCreator());

      dispatch(
        openModalActionCreator({
          isError: true,
          message: "There was a problem updating the post",
        })
      );
    }
  };

  return { getPosts, deletePost, getPostById, updatePost };
};

export default useApi;
