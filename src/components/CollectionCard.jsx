import { ReactComponent as Play } from "/src/assets/images/play2.svg";
import Proptypes from "prop-types";
import music from "/collect.png";
const CollectionCard = ({ img, title, likes, name }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%)`,
      }}
      className="relative w-full md:w-[40%] lg:w-[213px] cursor-pointer overflow-hidden h-[234px]  border border-solid border-white/[0.03] rounded-[20px]"
    >
      <div className="absolute inset-0 group">
        <div className="w-full absolute inset-0">
          <img
            src={img}
            alt="background-image"
            className="object-cover w-full transition-all group-hover:scale-125  duration-300 ease-linear group-hover:object-contain  group-hover:w-[130%]"
          />
        </div>
        <div className="w-full absolute bottom-0 flex flex-col md:translate-y-[50%] transition duration-300 ease-linear  gap-8 px-8 py-4 group-hover:translate-y-0">
          <div>
            <h3 className="text-lightDark text-shadow text-2xl">{title}</h3>
            <p className="opacity-75 text-[10px] leading-[1.2] text-lightDark">
              {name}
            </p>
          </div>
          <div className="flex w-full justify-between items-center">
            <p className="text-white text-sm">{likes} Likes</p>
            <Play className="self-end h-10 w-10" />
          </div>
        </div>
      </div>
    </div>
  );
};
CollectionCard.Proptypes = {
  likes: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  img: Proptypes.string,
  name: Proptypes.string,
};
CollectionCard.defaultProps = {
  likes: "2.3m",
  title: "Limit",
  name: "John watts",
  img: music,
};

export default CollectionCard;
