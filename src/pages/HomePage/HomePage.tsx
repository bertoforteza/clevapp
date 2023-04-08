import { useEffect } from "react";
import { useAppSelector } from "../../store/hooks";
import { Navigate } from "react-router-dom";
import useApi from "../../hooks/useApi/useApi";
import PostCardList from "../../components/PostCardList/PostCardList";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const { posts } = useAppSelector(({ posts }) => posts);
  const { isLogged } = useAppSelector(({ user }) => user);
  const { getPosts } = useApi();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return isLogged ? (
    <HomePageStyled>
      <PostCardList posts={posts} />
    </HomePageStyled>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default HomePage;
