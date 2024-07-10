import { Link } from "react-router-dom";
import FeatureCard from "../../../components/shared/FeatureCard";

const Home = () => {
  return (
    <div className="">
      <div className="container mx-auto my-14">
        <h2 className="text-center text-2xl md:text-4xl font-bold">
          সব আর্থিক সল্যুশন এক প্ল্যাটফর্মে
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-10">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
      <div className="relative h-[550px]">
        <img
          className="h-full"
          src="https://www.bkash.com/images/static-banner.webp"
          alt=""
        />
        <div className="absolute top-10 inset-0 flex items-center justify-center gap-32">
          <div className="space-y-5">
            <h2 className="text-2xl md:text-5xl font-extrabold text-[#e2126f]">
              IMEI ভেরিফাই অ্যাপ ডাউনলোড করুন
            </h2>
            <p className="text-xl text-white">
              IMEI ভেরিফাই অ্যাপ থেকে সহজেই একাউন্ট খুলে নিজের তথ্য সুরক্ষিত
              রাখুন!
            </p>
            <div className="flex items-center pt-3">
              <Link>
                <div className="w-48">
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt=""
                  />
                </div>
              </Link>
              <Link>
                <div className="w-40">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="">
            <img
              src="https://www.bkash.com/uploaded_contents/contents/static-banner-content_1677695633940.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
