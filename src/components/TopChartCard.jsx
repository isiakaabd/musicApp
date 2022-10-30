import { ReactComponent as Heart } from "./../assets/images/Heart-fill.svg";

const TopChartCard = ({ image, text, subTitle, timeStamp }) => {
  return (
    <div className=" whitespace-nowrap text-white bg-dark flex justify-between p-4 rounded-lg">
      <div className="flex gap-4 w-[63px] aspect-square">
        <div className="rounded-2xl bg-main h-full  border-dark  aspect-square  border ">
          <img
            src={image}
            alt={`image of ${text}`}
            className=" object-contain max-h-full"
          />
        </div>
        <div className="flex text-xs font-normal flex-col gap-1">
          <p className="text-lg ">{text}</p>
          <p className="text-white/50">{subTitle}</p>
          <p>{timeStamp}</p>
        </div>
      </div>
      <div className="p-2 border self-center rounded-full border-white/[0.11] mr-4">
        <Heart className="h-3 w-3 " />
      </div>
    </div>
  );
};

export default TopChartCard;
