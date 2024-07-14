const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "টানা পঞ্চমবারের মতো দেশের সবচেয়ে সেরা ব্র্যান্ড বিকাশ",
      image:
        "https://www.bkash.com/uploaded_contents/blogs/thumb_images/thumbnail-photo-bkash-best-brand-5th-time_1703419782388.webp",
      createdAt: "২৭ ডিসেম্বর ২০২৩",
    },
    {
      id: 2,
      title: "টানা পঞ্চমবারের মতো দেশের সবচেয়ে সেরা ব্র্যান্ড বিকাশ",
      image:
        "https://www.bkash.com/uploaded_contents/blogs/thumb_images/thumbnail-photo-bkash-best-brand-5th-time_1703419782388.webp",
      createdAt: "২৭ ডিসেম্বর ২০২৩",
    },
    {
      id: 3,
      title: "টানা পঞ্চমবারের মতো দেশের সবচেয়ে সেরা ব্র্যান্ড বিকাশ",
      image:
        "https://www.bkash.com/uploaded_contents/blogs/thumb_images/thumbnail-photo-bkash-best-brand-5th-time_1703419782388.webp",
      createdAt: "২৭ ডিসেম্বর ২০২৩",
    },
  ];
  return (
    <div>
      <div className="relative container mx-auto">
        <img
          src="https://www.bkash.com/images/blog-desktop-banner.webp"
          alt=""
        />
        <div className="absolute top-0 text-black z-10">
          <h2 className="text-[2rem] text-[#e2126d] md:text-[2.44140625rem] font-bold">
            IMEI ভেরিফাই অ্যাপ ব্লগ
          </h2>
          <p className="text-[1.3rem] md:text-[1.7rem] font-bold">
            IMEI ভেরিফাই অ্যাপ এর ব্লগ পড়ুন
          </p>
        </div>
      </div>
      <div className="container mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs?.length &&
            blogs?.map((blog) => (
              <div
                className="group rounded-xl shadow-2xl bg-white"
                key={blog?.id}
              >
                <img className="w-full rounded-t-xl" src={blog?.image} alt="" />
                <div className="px-2 lg:px-6 py-4 lg:py-8">
                  <h2 className="text-center duration-200 transition-all mt-3 mb-6 text-md lg:text-2xl font-bold group-hover:text-[#e2126d]">
                    {blog?.title}
                  </h2>
                  <p className="text-[#333] text-[11px] lg:text-sm bg-[#e2e2e2] inline-block px-2 py-0.5">
                    পোস্টের তারিখ : {blog?.createdAt}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
