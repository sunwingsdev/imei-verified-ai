const Button = ({ icon: Icon, text }) => {
  return (
    <div className="flex w-fit items-center justify-center gap-4 font-medium shadow-md text-[#e2136e] hover:text-white bg-white hover:bg-[#e2136e] text-[1rem] md:text-[1.5625rem] px-[3rem] py-[.5rem] rounded-[2rem] border border-[#e2136e]">
      {Icon && <Icon />}
      <p className="">{text}</p>
    </div>
  );
};

export default Button;
