export interface PostStructure {
  title: string;
  userId: string;
  body: string;
}

export interface PostsState {
  posts: PostStructure[];
}
