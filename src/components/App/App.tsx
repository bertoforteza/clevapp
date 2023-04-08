import { useEffect } from "react";
import useUser from "../../hooks/useUser/useUser";
import Layout from "../Layout/Layout";

const App = (): JSX.Element => {
  const { getUserToken } = useUser();

  useEffect(() => {
    getUserToken();
  }, [getUserToken]);

  return <Layout />;
};

export default App;
