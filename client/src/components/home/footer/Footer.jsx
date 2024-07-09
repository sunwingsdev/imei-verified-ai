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
            <h4 className="text-[#204498] text-[21px] font-bold mb-2 lg:mb-5">
              Heitz Immigration Law
            </h4>
            <h5 className="text-[#1e1e1e] text-[16px] lg:text-[18px] font-semibold">
              Practice limited to Immigration and Nationality Law.
            </h5>
            <p className="text-[16px] lg:text-[18px] mb-1 ">
              Heitz Immigration Law is located in downtown Lake Worth Beach, FL.
            </p>
            <h5 className="text-[#1e1e1e] text-[16px] lg:text-[18px] font-semibold mb-3">
              We speak English & Spanish.
            </h5>
            <h4 className="text-[#1e1e1e] text-[17px] lg:text-[19px] font-semibold mb-2">
              561-290-0101
            </h4>
            <Link>
              <p className="text-[16px] lg:text-[18px]">
                32 South J Street, Lake Worth Beach, FL 33460
              </p>
            </Link>
          </div>
          <div className="">
            <h4 className="text-[#204498] text-[21px] font-bold mb-2">
              Site Links
            </h4>
            <div className="flex flex-col">
              <Link className="mb-3 hover:text-[#204498]">Contact us</Link>
              <Link className="mb-3 hover:text-[#204498]">Green Card</Link>
              <Link className="mb-3 hover:text-[#204498]">Work USA</Link>
              <Link className="mb-3 hover:text-[#204498]">Invest USA</Link>
              <Link className="mb-3 hover:text-[#204498]">Testimonials</Link>
              <Link className="mb-3 hover:text-[#204498]">Podcast</Link>
              <Link className="mb-3 hover:text-[#204498]">About</Link>
              <Link className="mb-3 hover:text-[#204498]">Video FAQ</Link>
            </div>
          </div>
          <div className="">
            <h4 className="text-[#204498] text-[21px] font-bold mb-2">
              Latest Articles
            </h4>
            <Link className="flex items-center gap-5 text-[#353535] hover:text-[#abb8c3] mb-6">
              <p className="text-base">
                Navigating DACA Renewal: Understanding Criminal Barriers,
                Historical Insights, and Today’s Challenges
              </p>
            </Link>
            <Link className="flex items-center gap-5 text-[#353535] hover:text-[#abb8c3] mb-6">
              <p className="text-base">
                Exploring the E-2 Investor Visa: Your Gateway to Business in the
                USA
              </p>
            </Link>
            <Link className="flex items-center gap-5 text-[#353535] hover:text-[#abb8c3] mb-6">
              <p className="text-base">
                Submit Your USCIS Application Before April 1, 2024, To Avoid
                Higher Immigration Fees:
              </p>
            </Link>
          </div>
          <div className="">
            <h4 className="text-[#204498] text-[21px] font-bold mb-2">
              Legal Disclaimer
            </h4>
            <p className="text-[#353535] text-[16px] lg:text-[18px]">
              This website contains general information not to be considered as
              legal advice. If you have specific questions about any immigration
              matter, please contact us to book a consultation.
            </p>
          </div>
        </div>
        {/* Footer Copy Right */}
        <div className="border-t py-[20px]">
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
