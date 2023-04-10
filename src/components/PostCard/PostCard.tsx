import useApi from "../../hooks/useApi/useApi";
import { PostStructure } from "../../store/features/posts/types";
import Button from "../Button/Button";
import PostCardStyled from "./PostCardStyled";
import { ReactComponent as Delete } from "../../assets/delete-icon.svg";
import { useNavigate } from "react-router-dom";

interface PostCardProps {
  post: PostStructure;
}

const PostCard = ({
  post: { body, title, userId, id },
}: PostCardProps): JSX.Element => {
  const { deletePost } = useApi();
  const navigate = useNavigate();

  return (
    <PostCardStyled className="post-card" onClick={() => navigate(`/${id}`)}>
      <h3 className="post-card__title">{title}</h3>
      <p className="post-card__content">{body}</p>
      <span className="post-card__author">Created by: {userId}</span>
      <Button icon={<Delete />} action={() => deletePost(id)} />
    </PostCardStyled>
  );
};

export default PostCard;
