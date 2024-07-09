import { Outlet } from "react-router-dom";
import HeaderMenu from "../components/home/headerMenu/HeaderMenu";
import Footer from "../components/home/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <HeaderMenu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
