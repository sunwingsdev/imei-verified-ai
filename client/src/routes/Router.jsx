import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Help from "../pages/Home/Help/Help";
import Home from "../pages/Home/home/Home";
import Career from "../pages/Home/career/Career";
import AboutUs from "../pages/Home/AboutUs/AboutUs";
import Blogs from "../pages/Home/blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/career",
        element: <Career />,
      },
    ],
  },
]);

export default router;
