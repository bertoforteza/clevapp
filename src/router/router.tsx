import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import DetailPostPage from "../pages/DetailPostPage/DetailPostPage";
import EditPostForm from "../components/EditPostForm/EditPostForm";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/:postId", element: <DetailPostPage /> },
      { path: "/edit", element: <EditPostForm /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export const getRouter = (ui: React.ReactElement) =>
  createBrowserRouter([
    {
      path: "/",
      element: ui,
    },
  ]);

export default router;
