import { Link } from "react-router-dom";

const JobCard = () => {
  return (
    <div className="border rounded-2xl bg-white hover:bg-slate-50 py-8 px-6 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-300">
      <img
        className="w-16"
        src="https://iuazegsorvopdfkveycu.supabase.co/storage/v1/object/public/company-bucket/2e5b6ef7-11b0-4ec6-be96-702eee1104f9/logos/logo.jpg?token=1715845138940"
        alt=""
      />
      <Link>
        <h2 className="lg:text-3xl text-xl font-bold hover:text-[#e2126f] transition-all duration-300 pt-4">
          বিক্রয় এবং বিপণন...
        </h2>
      </Link>
      <Link>
        <h3 className="text-lg lg:text-xl font-bold hover:text-[#e2126f] transition-all duration-300">
          বিকল্প বিক্রয় বুদ্ধিমত্তা
        </h3>
      </Link>

      <p className="text-base lg:text-lg">TK. 13,000</p>
      <p className="text-base lg:text-lg">12/08/2024</p>
      <p className="text-base lg:text-lg pb-6">শেওড়াপাড়া</p>
      <Link>
        <div className="bg-slate-700 hover:bg-[#e2126f] transition-all duration-300 text-white border rounded-2xl py-2 w-full text-center text-base md:text-xl lg:text-2xl font-bold">
          বিস্তারিত দেখুন
        </div>
      </Link>
    </div>
  );
};

export default JobCard;
