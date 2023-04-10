import useApi from "../../hooks/useApi/useApi";
import { PostStructure } from "../../store/features/posts/types";
import { useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import DetailPostPageStyled from "./DetailPostPageStyled";

const DetailPostPage = (): JSX.Element => {
  const { getPostById } = useApi();
  const { posts } = useAppSelector(({ posts }) => posts);
  const post: PostStructure = posts[0];
  const { body, id, title, userId } = post;

  useEffect(() => {
    getPostById(id);
  }, [getPostById, id]);

  return (
    <DetailPostPageStyled className="detail-page">
      <h2 className="detail-page__title">{title}</h2>
      <p className="detail-page__content">{body}</p>
      <span className="detail-page__author">
        This post was created by {userId}
      </span>
      <img
        src="../../assets/posting-picture.png"
        alt=""
        className="detail-page__picture"
      />
    </DetailPostPageStyled>
  );
};

export default DetailPostPage;
