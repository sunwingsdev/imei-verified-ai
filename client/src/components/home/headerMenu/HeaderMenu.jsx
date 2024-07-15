import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useState } from "react";

const HeaderMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const handleMobileMenuOpen=()=>{
  //   setIsMobileMenuOpen(!isMobileMenuOpen)
  // }

  return (
    <div className="">
      <div className="bg-[#e2126f]">
        <div className="container mx-auto bg-[#e2126f] py-2 flex justify-between items-center">
          <Link to="/">
            <div className="w-24">
              <img
                src="https://images.wondershare.com/drfone/article/2023/05/imei-info.jpg"
                alt=""
              />
            </div>
          </Link>
          <div
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center gap-1 md:hidden text-white"
          >
            <p className="text-sm">মেন্যু</p> <AiOutlineMenuFold />
          </div>
          <div className="hidden md:flex items-center gap-2 md:gap-6 text-sm md:text-base text-white font-medium">
            <NavLink
              className={({ isActive }) =>
                `px-2 py-1 ${isActive && "font-bold border-b-2"}`
              }
              to="/"
            >
              হোম
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `px-2 py-1 ${isActive && "font-bold border-b-2"}`
              }
              to="/help"
            >
              হেল্প সেন্টার
            </NavLink>
            {/* <NavLink
              className={({ isActive }) =>
                `px-2 py-1 ${isActive && "font-bold border-b-2"}`
              }
              to="/service"
            >
              সার্ভিস
            </NavLink> */}
            <NavLink
              className={({ isActive }) =>
                `px-2 py-1 ${isActive && "font-bold border-b-2"}`
              }
              to="/career"
            >
              ক্যারিয়ার
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `px-2 py-1 ${isActive && "font-bold border-b-2"}`
              }
              to="/about-us"
            >
              আমাদের সম্পর্কে
            </NavLink>
            {/* <NavLink
              className={({ isActive }) =>
                `px-2 py-1 ${isActive && "font-bold border-b-2"}`
              }
              to="review"
            >
              রিভিউ
            </NavLink> */}
            <NavLink
              className={({ isActive }) =>
                `px-2 py-1 ${isActive && "font-bold border-b-2"}`
              }
              to="/blogs"
            >
              ব্লগ
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `px-2 py-1 ${isActive && "font-bold border-b-2"}`
              }
              to="https://play.google.com/store/apps/details?id=com.ahsan.imeverifiedai&hl=en"
              target="_blank"
            >
              <button className="border rounded-full py-1 px-6 hover:bg-white hover:text-[#e2126f] duration-300 transition-all font-medium">
                IMEI ভেরিফাই আপ
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <img
          src="https://www.bkash.com/uploaded_contents/banners/desktop/website-1920x500_1717679913441.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeaderMenu;
