export interface PostStructure {
  title: string;
  userId: number;
  body: string;
  id: number;
}

export interface PostsState {
  posts: PostStructure[];
}
