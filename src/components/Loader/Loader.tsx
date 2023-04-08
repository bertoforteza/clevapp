import LoaderStyled from "./LoaderStyled";

const Loader = (): JSX.Element => {
  return (
    <LoaderStyled>
      <div className="loader" aria-label="The page is loading"></div>
    </LoaderStyled>
  );
};

export default Loader;
