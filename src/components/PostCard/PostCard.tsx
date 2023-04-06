import useApi from "../../hooks/useApi";
import { PostStructure } from "../../store/features/types";
import Button from "../Button/Button";
import PostCardStyled from "./PostCardStyled";

interface PostCardProps {
  post: PostStructure;
}

const PostCard = ({
  post: { body, title, userId, id },
}: PostCardProps): JSX.Element => {
  const { deletePost } = useApi();

  return (
    <PostCardStyled className="post-card">
      <h2 className="post-card__title">{title}</h2>
      <p className="post-card__content">{body}</p>
      <span className="post-card__author">Created by: {userId}</span>
      <Button text="Delete" action={() => deletePost(id)} />
    </PostCardStyled>
  );
};

export default PostCard;
