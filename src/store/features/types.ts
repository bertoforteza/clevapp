export interface PostStructure {
  title: string;
  userId: number;
  body: string;
}

export interface PostsState {
  posts: PostStructure[];
}
