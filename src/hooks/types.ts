import { PostStructure, UserCredentials } from "../types";

export type ApiResponse = PostStructure[];

export interface UseApiStructure {
  getPosts: () => Promise<void>;
  deletePost: (postId: number) => void;
  getPostById: (postId: number) => Promise<void>;
  updatePost: (post: PostStructure) => Promise<void>;
}

export interface UseUserStructure {
  loginUser: (loginData: UserCredentials) => void;
  logoutUser: () => void;
  getUserToken: () => void;
}
