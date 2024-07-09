const Button = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center justify-center gap-4 font-medium text-[#e2136e] text-[1.5625rem] leading-5 px-[3.25rem] py-[.5rem] rounded-3xl border border-[#e2136e]">
      {Icon && <Icon />}
      <p className="">{text}</p>
    </div>
  );
};

export default Button;
