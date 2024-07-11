import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Help from "../pages/Home/Help/Help";
import Career from "../pages/Home/career/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/career",
        element: <Career />,
      },
    ],
  },
]);

export default router;
