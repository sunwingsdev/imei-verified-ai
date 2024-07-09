import { Link } from "react-router-dom";

const HeaderMenu = () => {
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
          <div className="flex items-center gap-8 text-base text-white font-medium">
            <Link to="">হোম</Link>
            <Link to="">হেল্প সেন্টার</Link>
            <Link to="">সার্ভিস</Link>
            <Link to="">এবাউট</Link>
            <Link to="">রিভিউ</Link>
            <Link to="">ব্লগ</Link>
            <Link to="">
              <button className="border rounded-full py-1 px-6 hover:bg-white hover:text-[#e2126f] font-medium">
                IMEI ভেরিফাই আপ
              </button>
            </Link>
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
