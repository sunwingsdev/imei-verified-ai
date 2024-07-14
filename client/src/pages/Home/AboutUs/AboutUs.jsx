import Button from "../../../components/shared/Button";

const AboutUs = () => {
  const partners = [
    {
      id: 1,
      image:
        "https://www.bkash.com/uploaded_contents/contents/01-brac_1697653650970.webp",
    },
    {
      id: 2,
      image:
        "https://www.bkash.com/uploaded_contents/contents/02-mim_1697653671184.webp",
    },
    {
      id: 3,
      image:
        "https://www.bkash.com/uploaded_contents/contents/03-ifc_1697653719345.webp",
    },
    {
      id: 4,
      image:
        "https://www.bkash.com/uploaded_contents/contents/04-bmgf_1697653789221.webp",
    },
    {
      id: 5,
      image:
        "https://www.bkash.com/uploaded_contents/contents/01-brac_1697653650970.webp",
    },
    {
      id: 6,
      image:
        "https://www.bkash.com/uploaded_contents/contents/01-brac_1697653650970.webp",
    },
  ];
  const teamMembers = [
    {
      id: 1,
      image:
        "https://www.bkash.com/uploaded_contents/board-directors/images/Mr.-Shameran-Abed_1668433836907.webp",
      title: "শামেরান আবেদ",
    },
    {
      id: 1,
      image:
        "https://www.bkash.com/uploaded_contents/board-directors/images/Mr.-Shameran-Abed_1668433836907.webp",
      title: "শামেরান আবেদ",
    },
    {
      id: 2,
      image:
        "https://www.bkash.com/uploaded_contents/board-directors/images/Mr.-Shameran-Abed_1668433836907.webp",
      title: "শামেরান আবেদ",
    },
    {
      id: 3,
      image:
        "https://www.bkash.com/uploaded_contents/board-directors/images/Mr.-Shameran-Abed_1668433836907.webp",
      title: "শামেরান আবেদ",
    },
    {
      id: 4,
      image:
        "https://www.bkash.com/uploaded_contents/board-directors/images/Mr.-Shameran-Abed_1668433836907.webp",
      title: "শামেরান আবেদ",
    },
    {
      id: 5,
      image:
        "https://www.bkash.com/uploaded_contents/board-directors/images/Mr.-Shameran-Abed_1668433836907.webp",
      title: "শামেরান আবেদ",
    },
    {
      id: 6,
      image:
        "https://www.bkash.com/uploaded_contents/board-directors/images/Mr.-Shameran-Abed_1668433836907.webp",
      title: "শামেরান আবেদ",
    },
    {
      id: 7,
      image:
        "https://www.bkash.com/uploaded_contents/board-directors/images/Mr.-Shameran-Abed_1668433836907.webp",
      title: "শামেরান আবেদ",
    },
    {
      id: 8,
      image:
        "https://www.bkash.com/uploaded_contents/board-directors/images/Mr.-Shameran-Abed_1668433836907.webp",
      title: "শামেরান আবেদ",
    },
    {
      id: 9,
      image:
        "https://www.bkash.com/uploaded_contents/board-directors/images/Mr.-Shameran-Abed_1668433836907.webp",
      title: "শামেরান আবেদ",
    },
    {
      id: 10,
      image:
        "https://www.bkash.com/uploaded_contents/board-directors/images/Mr.-Shameran-Abed_1668433836907.webp",
      title: "শামেরান আবেদ",
    },
  ];

  return (
    <div>
      <div className="container mx-auto my-16">
        <h2 className="text-center text-[#333] text-[45px] font-bold pb-4">
          পার্টনার সমূহ
        </h2>
        <div className="flex flex-wrap items-center justify-center space-x-16">
          {partners.length &&
            partners?.map((partner) => (
              <img key={partner?.id} src={partner?.image} alt="" />
            ))}
        </div>
      </div>
      <div className="container mx-auto mt-5 m-8">
        <div className="flex items-center pb-12">
          <div className="w-[35%] border-t-2"></div>
          <h2 className="w-[30%] text-center text-[#333] text-3xl md:text-[45px] font-bold pb-4">
            পরিচালনা পর্ষদ
          </h2>
          <div className="w-[35%] border-t-2"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {teamMembers?.length &&
            teamMembers?.map((member) => (
              <div className="space-y-2" key={member?.id}>
                <div className="flex items-center justify-center">
                  <img className="" src={member?.image} alt="" />
                </div>
                <p className="text-center text-lg md:text-2xl font-bold">
                  {member?.title}
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="container mx-auto my-12 flex flex-col-reverse md:flex-row items-center justify-center gap-4">
        <div className="w-full md:w-1/2 space-y-3">
          <h2 className="text-[2rem] md:text-[2.44140625rem] font-bold">
            বিকাশ সম্পর্কে প্রকাশনা
          </h2>
          <p className="text-lg md:text-xl">
            বিকাশ এর সেবা, ইভেন্ট, প্রযুক্তি ও অর্জন সম্পর্কিত মিডিয়া রিলিজ এবং
            বিশেষ সাক্ষাৎকার, কলাম, ফিচার ও বিকাশ এর অবদান ইত্যাদির উপর মিডিয়া
            কভারেজ।
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-3">
            <Button text={"IMEI ভেরিফাই অ্যাপ থেকে"} />
            <Button text={"মিডিয়া"} />
          </div>
        </div>
        <img
          className="w-full md:w-1/3"
          src="https://www.bkash.com/uploaded_contents/contents/career_at_bkash_1677696071707.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUs;
