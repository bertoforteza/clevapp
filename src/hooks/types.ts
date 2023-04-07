import { PostStructure } from "../store/features/posts/types";

export type ApiResponse = PostStructure[];

export interface UserCredentials {
  username: string;
  password: string;
}
