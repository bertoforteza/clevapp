import { PostStructure } from "../../store/features/posts/types";
import PostCard from "../PostCard/PostCard";
import PostCardListStyled from "./PostCardListStyled";

interface PostCardListProps {
  posts: PostStructure[];
}

const PostCardList = ({ posts }: PostCardListProps): JSX.Element => {
  return (
    <PostCardListStyled>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </PostCardListStyled>
  );
};

export default PostCardList;
