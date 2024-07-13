const FeatureCard = () => {
  return (
    <div className="text-center border-2 p-6 shadow-[red]">
      <div className="w-32 mx-auto">
        <img
          src="https://www.bkash.com/uploaded_contents/services/home_images/04-payment_1675164341242.webp"
          alt=""
        />
      </div>
      <h2 className="text-[#e2126f] text-2xl font-bold pt-4 pb-1">পেমেন্ট</h2>
      <p className="text-base">
        সারাদেশে অনলাইন এবং QR স্ক্যান করে, সবচেয়ে দ্রুত পেমেন্ট করুন বিকাশ-এ
      </p>
    </div>
  );
};

export default FeatureCard;
