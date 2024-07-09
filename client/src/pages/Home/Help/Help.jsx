import Button from "../../../components/shared/Button";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const Help = () => {
  return (
    <div className="bg-[#ffeff6] ">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-3">
        <img
          className="w-full md:w-1/3"
          src="https://www.bkash.com/uploaded_contents/contents/24by7-support_1677696165917.webp"
          alt=""
        />
        <div className="w-full md:w-2/3">
          <h2 className="text-black font-bold text-3xl">২৪/৭ আপনার সেবায়:</h2>
          <p className="text-xl text-[#333333]">
            গ্রাহকসেবা প্রতিনিধিরা দিনরাত ২৪ ঘণ্টা 16247, লাইভ চ্যাট এবং
            ফেসবুক-এ সক্রিয় রয়েছে। এছাড়া e-Appointment নিন অথবা ই-মেইল করুন
            support@bkash.com-এ
          </p>
          <div className="grid grid-cols-2 gap-6">
            <Button icon={FiPhoneCall} text={"16247"} />
            <Button icon={FaRegCalendarAlt} text={"ই-অ্যাপয়েন্টমেন্ট"} />
            <Button icon={IoChatbubbleEllipsesOutline} text={"লাইভ চ্যাট"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
