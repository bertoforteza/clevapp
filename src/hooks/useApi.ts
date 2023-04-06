import { useAppDispatch } from "../store/hooks";
import axios from "axios";
import { ApiResponse } from "./types";
import {
  deletePostActionCreator,
  loadPostsActionCreator,
} from "../store/features/postsSlice";

const apiUrl = process.env.REACT_APP_API_URL!;

const useApi = () => {
  const dispatch = useAppDispatch();

  const getPosts = async () => {
    const response = await axios.get(apiUrl);

    const posts: ApiResponse = response.data;

    dispatch(loadPostsActionCreator(posts));
  };

  const deletePost = (id: number) => {
    dispatch(deletePostActionCreator(id));
  };

  return { getPosts, deletePost };
};

export default useApi;
