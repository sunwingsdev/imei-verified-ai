import Button from "../../../components/shared/Button";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import HelpServiceCard from "../../../components/shared/HelpServiceCard";

const Help = () => {
  const services = [
    {
      id: 1,
      image:
        "https://www.bkash.com/uploaded_contents/locators/thumb_images/03-agent_1666180849300.webp",
      title: "এজেন্ট পয়েন্ট",
    },
    {
      id: 2,
      image:
        "https://www.bkash.com/uploaded_contents/locators/thumb_images/04-atm-cashout_1666181334335.webp",
      title: "এটিএম ক্যাশ আউট পয়েন্ট",
    },
    {
      id: 3,
      image:
        "https://www.bkash.com/uploaded_contents/locators/thumb_images/02-customer-care_1667901911318.webp",
      title: "গ্রাহক সেবা পয়েন্ট",
    },
    {
      id: 4,
      image:
        "https://www.bkash.com/uploaded_contents/locators/thumb_images/06-merchant_1666181866113.webp",
      title: "বিকাশ মার্চেন্ট",
    },
    {
      id: 5,
      image:
        "https://www.bkash.com/uploaded_contents/locators/thumb_images/05-distributors_1667901990821.webp",
      title: "ডিস্ট্রিবিউটরস",
    },
    {
      id: 6,
      image:
        "https://www.bkash.com/uploaded_contents/locators/thumb_images/08-discontinues-distributor_1667902090707.webp",
      title: "ডিসকন্টিনিউড ডিস্ট্রিবিউটরস",
    },
  ];
  return (
    <div className="">
      <div className="bg-[#ffeff6] py-4">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-4">
          <img
            className="w-full md:w-2/5"
            src="https://www.bkash.com/uploaded_contents/contents/24by7-support_1677696165917.webp"
            alt=""
          />
          <div className="w-full md:w-3/5 space-y-4">
            <h2 className="text-black font-bold text-2xl md:text-4xl">
              ২৪/৭ আপনার সেবায়:
            </h2>
            <p className="text-base md:text-xl text-[#333333]">
              গ্রাহকসেবা প্রতিনিধিরা দিনরাত ২৪ ঘণ্টা 16247, লাইভ চ্যাট এবং
              ফেসবুক-এ সক্রিয় রয়েছে। এছাড়া e-Appointment নিন অথবা ই-মেইল করুন
              support@bkash.com-এ
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-start flex-wrap">
              <Button icon={FiPhoneCall} text={"16247"} />
              <Button icon={FaRegCalendarAlt} text={"ই-অ্যাপয়েন্টমেন্ট"} />
              <Button icon={IoChatbubbleEllipsesOutline} text={"লাইভ চ্যাট"} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffeff6] py-4">
        <div className="container mx-auto my-6">
          <h2 className="text-black font-bold text-2xl md:text-4xl text-center py-2 mb-8">
            সারাদেশে আইএমইআই ভেরিফাইড অ্যাপ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.length &&
              services?.map(({ id, image, title }) => (
                <HelpServiceCard key={id} image={image} title={title} />
              ))}
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="text-right">
              <h2 className="font-bold">যোগাযোগ করুন</h2>
              <p>ই-মেইল: support@bkash.com</p>
              <p>ফ্যাক্স: +88-02-9894916</p>
            </div>
            <div className="h-36 border-l-2 border-black"></div>
            <div>
              <h2>কর্পোরেট ঠিকানা</h2>
              <p>স্বাধীনতা টাওয়ার, ১,</p>
              <p>বীরশ্রেষ্ঠ শহীদ জাহাঙ্গীর গেট,</p>
              <p>ঢাকা সেনানিবাস, ঢাকা ১২০৬</p>
              <h2>বাণিজ্যিক ঠিকানা</h2>
              <p>এসকেএস টাওয়ার, ৭ ভিআইপি রোড, মহাখালী,</p>
              <p>ঢাকা ১২০৬</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
