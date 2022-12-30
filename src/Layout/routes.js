import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
import Media from "../components/Media";
import Message from "../components/Message";
import PostDetails from "../components/PostDetails";
import Main from "./Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/media",
        element: <Media />,
        // loader: () => fetch("https://social-activity-server.vercel.app/posts"),
      },
      {
        path: "/post/:id",
        element: (
          <PrivateRoute>
            <PostDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://social-activity-server.vercel.app/posts/${params.id}`),
      },
      {
        path: "/message",
        element: <Message />,
      },
      {
        path: "/about",
        element: <About />,
        loader: () => fetch("https://social-activity-server.vercel.app/about"),
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
    ],
  },
]);
