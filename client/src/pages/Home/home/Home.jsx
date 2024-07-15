import { Link } from "react-router-dom";
import FeatureCard from "../../../components/shared/FeatureCard";
import SliderCarousel from "../../../components/home/Slider/SliderCarousel";

const Home = () => {
  return (
    <div className="">
      <SliderCarousel />
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
      <div className="relative h-[850px] md:h-[450px] lg:h-[500px] xl:h-[550px]">
        <img
          className="h-full w-full"
          src="https://www.bkash.com/images/static-banner.webp"
          alt=""
        />
        <div className="px-4 absolute top-10 inset-0 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 lg:gap-32">
          <div className="space-y-5 px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center md:text-left text-[#e2126f]">
              IMEI ভেরিফাই অ্যাপ ডাউনলোড করুন
            </h2>
            <p className="text-xl md:text-left text-center text-white">
              IMEI ভেরিফাই অ্যাপ থেকে সহজেই একাউন্ট খুলে নিজের তথ্য সুরক্ষিত
              রাখুন!
            </p>
            <div className="flex items-center justify-center md:justify-start pt-3">
              <Link
                to="https://play.google.com/store/apps/details?id=com.ahsan.imeverifiedai&hl=en"
                target="_blank"
              >
                <div className="w-36 md:w-48">
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt=""
                  />
                </div>
              </Link>
              <Link>
                <div className="w-32 md:w-40">
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
      <div className="container mx-auto mt-16">
        <div className="text-center py-10 px-5 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#e2126f]">
            ব্যবসার জন্য IMEI ভেরিফাই অ্যাপ
          </h2>
          <p className="text-base md:text-xl text-black">
            IMEI ভেরিফাই অ্যাপ থেকে সহজেই একাউন্ট খুলে নিজের তথ্য সুরক্ষিত
            রাখুন!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-2 justify-between items-center">
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 justify-between items-center gap-6">
              <Link>
                <div className="border-2 rounded hover:border-[#e2126f] duration-200 transition-all py-5 px-3 md:p-6 space-y-5 hover:bg-slate-50">
                  <div className="w-20 mx-auto">
                    <img
                      className="w-20"
                      src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/04-online-business_1666262655459.webp"
                      alt=""
                    />
                  </div>
                  <h4 className="md:text-xl text-lg text-center font-semibold">
                    অনলাইন ব্যবসা
                  </h4>
                </div>
              </Link>
              <Link>
                <div className="border-2 rounded hover:border-[#e2126f] duration-200 transition-all py-5 px-3 md:p-6 space-y-5 hover:bg-slate-50">
                  <div className="w-20 mx-auto">
                    <img
                      className="w-20"
                      src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/04-online-business_1666262655459.webp"
                      alt=""
                    />
                  </div>
                  <h4 className="md:text-xl text-lg text-center font-semibold">
                    অনলাইন ব্যবসা
                  </h4>
                </div>
              </Link>
              <Link>
                <div className="border-2 rounded hover:border-[#e2126f] duration-200 transition-all py-5 px-3 md:p-6 space-y-5 hover:bg-slate-50">
                  <div className="w-20 mx-auto">
                    <img
                      className="w-20"
                      src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/04-online-business_1666262655459.webp"
                      alt=""
                    />
                  </div>
                  <h4 className="md:text-xl text-lg text-center font-semibold">
                    অনলাইন ব্যবসা
                  </h4>
                </div>
              </Link>
              <Link>
                <div className="border-2 rounded hover:border-[#e2126f] duration-200 transition-all py-5 px-3 md:p-6 space-y-5 hover:bg-slate-50">
                  <div className="w-20 mx-auto">
                    <img
                      className="w-20"
                      src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/04-online-business_1666262655459.webp"
                      alt=""
                    />
                  </div>
                  <h4 className="md:text-xl text-lg text-center font-semibold">
                    অনলাইন ব্যবসা
                  </h4>
                </div>
              </Link>
              <Link>
                <div className="border-2 rounded hover:border-[#e2126f] duration-200 transition-all py-5 px-3 md:p-6 space-y-5 hover:bg-slate-50">
                  <div className="w-20 mx-auto">
                    <img
                      className="w-20"
                      src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/04-online-business_1666262655459.webp"
                      alt=""
                    />
                  </div>
                  <h4 className="md:text-xl text-lg text-center font-semibold">
                    অনলাইন ব্যবসা
                  </h4>
                </div>
              </Link>
              <Link>
                <div className="border-2 rounded hover:border-[#e2126f] duration-200 transition-all py-5 px-3 md:p-6 space-y-5 hover:bg-slate-50">
                  <div className="w-20 mx-auto">
                    <img
                      className="w-20"
                      src="https://www.bkash.com/uploaded_contents/businesses/thumb_images/04-online-business_1666262655459.webp"
                      alt=""
                    />
                  </div>
                  <h4 className="md:text-xl text-lg text-center font-semibold">
                    অনলাইন ব্যবসা
                  </h4>
                </div>
              </Link>
            </div>
          </div>
          <img
            src="https://www.bkash.com/uploaded_contents/contents/homepage-business-static_1677695675835.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
