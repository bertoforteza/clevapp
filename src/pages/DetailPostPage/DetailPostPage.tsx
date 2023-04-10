import useApi from "../../hooks/useApi/useApi";
import { PostStructure } from "../../store/features/posts/types";
import { useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import DetailPostPageStyled from "./DetailPostPageStyled";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";

const DetailPostPage = (): JSX.Element => {
  const { posts } = useAppSelector(({ posts }) => posts);
  const { getPostById } = useApi();
  const { postId } = useParams();
  const postIdNumber = parseInt(postId!);
  const post: PostStructure = posts[0];
  const { body, title, userId } = post;
  const navigate = useNavigate();

  useEffect(() => {
    getPostById(postIdNumber);
  }, [getPostById, postIdNumber]);

  return (
    <DetailPostPageStyled className="detail-page">
      <h2 className="detail-page__title">{title}</h2>
      <p className="detail-page__content">{body}</p>
      <span className="detail-page__author">
        This post was created by {userId}
      </span>
      <Button action={() => navigate("/")} text="home" />
    </DetailPostPageStyled>
  );
};

export default DetailPostPage;
