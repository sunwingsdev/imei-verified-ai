const ContactUs = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-[#e2126f] font-semibold text-[45px] py-7 text-center">
        যোগাযোগ করুন
      </h2>
      <p className="text-[#605f62] max-w-[900px] mx-auto pb-[59px] text-center text-xl">
        IMEI ভেরিফাই অ্যাপ সম্পর্কিত যেকোনো তথ্যের জন্য আপনাকে আমাদের অফিসে যেতে
        স্বাগত জানাই। আপনি হটলাইন নম্বর বা মেসেঞ্জারের মাধ্যমেও আমাদের সাথে
        যোগাযোগ করতে পারেন।
      </p>
      <div className="flex flex-col lg:flex-row justify-center text-center lg:text-start gap-12">
        <div className="">
          <h3 className="text-[#216bb4] text-2xl font-bold pb-[3px] leading-[33px]">
            প্রধান কার্যালয়
          </h3>
          <p className="text-[#605f62] leading-[1.5rem] text-xl">
            এ.আই. নান্নু টাওয়ার (৬ষ্ঠ তলা) <br />
            মিরপুর ডিওএইচএস শপিং কমপ্লেক্সের পাশে <br />
            ১ম গেট, মিরপুর ডিওএইচএস, <br />
            ঢাকা 1216, বাংলাদেশ
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-start m-auto lg:m-0 sm:items-start gap-8">
          <div className="">
            <h3 className="text-[#216bb4] text-[22px] leading-[33px] pb-[3px] font-bold">
              ফোন নম্বর
            </h3>
            <p className="text-[#605f62] leading-[1.5rem]">
              +880 1777308777 <br /> +880 1777308777 <br /> +880 1777308777{" "}
              <br /> +880 1777308777 <br /> +880 1777308777
            </p>
          </div>
          <div>
            <h3 className="text-[#216bb4] text-[22px] leading-[33px] pb-[3px] font-bold">
              অফিস সময় :
            </h3>
            <p className="text-[#605f62] text-base">
              শনিবার - বৃহস্পতিবার , <br />
              10:00 am to 7:00 pm
            </p>
            <h3 className="text-[#216bb4] text-[22px] leading-[33px] pb-[3px] font-bold pt-2">
              ইমেইল :
            </h3>
            <p className="text-[#605f62] text-base">sunwingsdev@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto my-10 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-xl mb-4">Any Queries</h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="নাম"
              className="border-2 border-gray-400 w-full py-2 px-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="ইমেইল"
              className="border-2 border-gray-400 w-full py-2 px-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="ফোন নম্বর"
              className="border-2 border-gray-400 w-full py-2 px-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="সাবজেক্ট"
              className="border-2 border-gray-400 w-full py-2 px-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="তোমার প্রশ্ন"
              rows="4"
              className="border-2 border-gray-400 w-full py-2 px-3 rounded-lg focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="text-xl hover:bg-black hover:text-white rounded border border-blue-600 py-2 px-6"
              type="submit"
            >
              সাবমিট
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
