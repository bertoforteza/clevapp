import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../store/hooks";
import PostCardList from "../../components/PostCardList/PostCardList";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const { posts } = useAppSelector(({ posts }) => posts);
  const { getPosts } = useApi();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <HomePageStyled>
      <PostCardList posts={posts} />
    </HomePageStyled>
  );
};

export default HomePage;
