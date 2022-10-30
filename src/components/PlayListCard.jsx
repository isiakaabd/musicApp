import { ReactComponent as Heart } from "./../assets/images/Heart.svg";
import contacts from "./../assets/images/Frame.png";
const PlayListCard = () => {
  return (
    <div className="card flex-auto flex w-64 bg-person bg-contain bg-no-repeat bg-right">
      <div className="flex-1  flex  flex-col gap-10 p-8">
        <p className="font-normal  text-sm">Curated playlist</p>
        <div className="my-8">
          <p className="text-[35px] font-bold">R & B Hits</p>
          <p className="text-sm mt-2">
            All mine, Lie again, Petty call me everyday, Out of time, No love,
            Bad habit, and so much more
          </p>
        </div>
        <div className="flex  items-center gap-4">
          <img src={contacts} alt="" className="object-contain" />
          <Heart className="h-6 w-6" />
          <p className="text-sm">33k Likes</p>
        </div>
      </div>
      <div className="flex-1 "></div>
    </div>
  );
};

export default PlayListCard;
