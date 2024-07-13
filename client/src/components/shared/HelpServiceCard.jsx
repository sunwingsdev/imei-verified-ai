const HelpServiceCard = ({ image, title }) => {
  return (
    <div className="px-2 py-5 flex flex-col items-center justify-center gap-2 bg-white rounded-md shadow">
      <img src={image} alt="" />
      <p className="md:text-lg text-center">{title}</p>
    </div>
  );
};

export default HelpServiceCard;
