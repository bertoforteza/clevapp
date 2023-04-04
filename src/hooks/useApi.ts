import { useAppDispatch } from "../store/hooks";
import axios from "axios";
import { ApiResponse } from "./types";
import { loadPostsActionCreator } from "../store/features/postsSlice";

const apiUrl = process.env.REACT_APP_API_URL!;

const useApi = () => {
  const dispatch = useAppDispatch();

  const getPosts = async () => {
    const response = await axios.get(apiUrl);

    const posts: ApiResponse = response.data;

    dispatch(loadPostsActionCreator(posts));
  };

  return getPosts;
};

export default useApi;
