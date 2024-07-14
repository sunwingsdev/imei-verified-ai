import { Link } from "react-router-dom";
import Button from "../../../components/shared/Button";
import JobCard from "../../../components/home/jobCard/JobCard";

const Career = () => {
  return (
    <div>
      <img
        src="https://www.bkash.com/uploaded_contents/banners/desktop/02_career_update-feb-1920-X-500_1681382592628.webp"
        alt=""
      />
      <div className="bg-[#ffeff6] py-8">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-4">
          <img
            className="w-full md:w-1/3"
            src="https://www.bkash.com/uploaded_contents/contents/career_at_bkash_1677696071707.webp"
            alt=""
          />
          <div className="w-full md:w-1/2 space-y-3">
            <h2 className="text-[2rem] md:text-[2.44140625rem] font-bold">
              বিকাশ এ ক্যারিয়ার
            </h2>
            <p className="text-lg md:text-xl">
              এমপ্লয়ার অফ চয়েস-এ বাংলাদেশের নাম্বার ১ কোম্পানি বিকাশ, দেশের
              প্রতিভাবানদের কাজের সুযোগ তৈরি ও দক্ষতা বৃদ্ধির এক অনন্য
              প্রতিষ্ঠান। বিশ্বের অন্যতম দ্রুত বর্ধনশীল মোবাইল ফাইন্যান্সিয়াল
              সার্ভিস কোম্পানি&apos;তে আপনিও গড়তে পারেন সম্ভাবনাময় ক্যারিয়ার।
            </p>
            <Button text={"বর্তমান চাকরির সুযোগ দেখুন"} />
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-4">
          <div className="w-full md:w-1/2 space-y-3">
            <h2 className="text-[2rem] md:text-[2.44140625rem] font-bold">
              সামাজিক যোগাযোগ মাধ্যমে বিকাশ ক্যারিয়ার ফলো করুন
            </h2>
            <p className="text-lg md:text-xl">
              বিকাশ-এ ক্যারিয়ার গড়ার সুযোগ, কর্মপরিবেশ এবং নেতৃত্ব ব্যবস্থাপনা,
              সেই সাথে সামাজিক উন্নয়নে এবং জ্ঞানের প্রসারে বিকাশের প্রচেষ্টাগুলো
              সম্পর্কে জানতে ভিজিট করুন আমাদের সামাজিক যোগাযোগ মাধ্যম পেইজ
              গুলোতে।
            </p>
            <div className="flex flex-row items-center gap-3">
              <Link>
                <img
                  className="w-16"
                  src="https://www.bkash.com/images/social-fb-lg.svg"
                  alt=""
                />
              </Link>
              <Link>
                <img
                  className="w-16"
                  src="https://www.bkash.com/images/social-in-lg.svg"
                  alt=""
                />
              </Link>
              <Link>
                <img
                  className="w-16"
                  src="https://www.bkash.com/images/social-insta-lg.svg"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <img
            className="w-full md:w-1/3"
            src="https://www.bkash.com/uploaded_contents/contents/2_1677696116707.webp"
            alt=""
          />
        </div>
      </div>
      <div className="bg-slate-100 py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
