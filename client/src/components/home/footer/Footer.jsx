import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#1e1e1e] text-white">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 py-10">
          <div className="">
            <h4 className="text-xl font-bold mb-3">IMEI ভেরিফাই আপ</h4>
            <p className="text-base mb-1 ">
              IMEI হল একটি অনন্য 15-সংখ্যার কোড যা সিম কার্ড ইনপুট দিয়ে
              ডিভাইসটিকে সুনির্দিষ্টভাবে সনাক্ত করে। প্রথম 14টি সংখ্যা GSM
              অ্যাসোসিয়েশন সংস্থা দ্বারা সংজ্ঞায়িত করা হয়।
            </p>
            <h4 className="text-xl font-bold mt-5 mb-2">অ্যাপ ডাউনলোড করুন</h4>
            <div className="flex justify-centerc items-center">
              <Link>
                <div className="w-36">
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt=""
                  />
                </div>
              </Link>
              <Link>
                <div className="w-32">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="">
            <h4 className="text-xl font-bold mb-3">সার্ভিস</h4>
            <ul className="flex flex-col gap-3">
              <Link>
                <li className="inline-block hover:text-[#d6d6d6]">যোগাযোগ</li>
              </Link>
              <Link>
                <li className="inline-block hover:text-[#d6d6d6]">
                  কমপ্লেইন্ট সেল
                </li>
              </Link>
              <Link className="inline-block">
                <li className="inline-block hover:text-[#d6d6d6]">
                  আমাদের সম্পর্কে
                </li>
              </Link>
            </ul>
          </div>
          <div className="">
            <h4 className="text-xl font-bold mb-3">ব্যবসা</h4>
            <div className="flex flex-col">
              <Link className="mb-3 hover:text-[#d6d6d6]">সাপ্লায়ার হোন</Link>
              <Link className="mb-3 hover:text-[#d6d6d6]">মার্চেন্ট হোন</Link>
              <Link className="mb-3 hover:text-[#d6d6d6]">ডিজিটাল বেতন</Link>
            </div>
          </div>
          <div className="">
            <h4 className="text-xl font-bold mb-3">অন্যান্য</h4>
            <div className="flex flex-col">
              <Link className="mb-3 hover:text-[#d6d6d6]">শর্তাবলি</Link>
              <Link className="mb-3 hover:text-[#d6d6d6]">সাধারণ জিজ্ঞাসা</Link>
              <Link className="mb-3 hover:text-[#d6d6d6]">
                নিরাপত্তা পরামর্শ
              </Link>
            </div>
          </div>
        </div>
        {/* Footer Copy Right */}
        <div className="border-t py-6">
          <div className="flex items-center flex-col sm:flex-row justify-start sm:justify-between gap-5">
            <p className="text-white text-[15px]">© 2024 Sb Max It Park.</p>
            <div className="flex gap-5 text-black">
              <Link className="border rounded-full bg-white hover:bg-blue-700 hover:text-white hover:border-blue-700 p-1">
                <FaFacebookF />
              </Link>
              <Link className="border rounded-full bg-white hover:bg-red-600 hover:text-white hover:border-red-600 p-1">
                <FaYoutube />
              </Link>
              <Link className="border rounded-full bg-white hover:bg-red-600 hover:text-white hover:border-red-600 p-1">
                <FaInstagram />
              </Link>
              <Link className="border rounded-full bg-white hover:bg-blue-600 hover:text-white hover:border-blue-600 p-1">
                <FaLinkedinIn />
              </Link>
              <Link className="border rounded-full bg-white hover:bg-black hover:text-white hover:border-black p-1">
                <FaXTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
