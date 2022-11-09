import { ReactComponent as Heart } from "/src/assets/images/Heart-fill.svg";

const TopChartCard = ({ image, text, subTitle, timeStamp }) => {
  return (
    <div className=" whitespace-nowrap text-white bg-dark flex justify-between p-4 rounded-lg">
      <div className="flex gap-4 sm:gap-2 justify-between  flex-col lg:flex-row ">
        <img
          src={image}
          alt={`image of ${text}`}
          className=" object-contain h-full w-24 sm:w-16 md:w-16 border-solid border border-main rounded-[10px]"
        />

        <div className="flex  font-normal  flex-col justify-between">
          <p className="text-lg ">{text}</p>
          <p className="text-xs text-white/50">{subTitle}</p>
          <p className="text-xs">{timeStamp}</p>
        </div>
      </div>
      <div className="p-2 border self-center rounded-full border-white/[0.11] ">
        <Heart className="h-3 w-3 " />
      </div>
    </div>
  );
};

export default TopChartCard;
