import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Help from "../pages/Home/Help/Help";
import Home from "../pages/Home/home/Home";
import Career from "../pages/Home/career/Career";
import ContactUs from "../pages/Home/contactUs/ContactUs";
import Conditions from "../pages/Home/conditions/Conditions";
import JobDetails from "../pages/Home/jobDetails/JobDetails";

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
        path: "/career",
        element: <Career />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/conditions",
        element: <Conditions />,
      },
      {
        path: "/job-details",
        element: <JobDetails />,
      },
    ],
  },
]);

export default router;
