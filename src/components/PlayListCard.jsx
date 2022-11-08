import { ReactComponent as Heart } from "./../assets/images/Heart.svg";
import contacts from "./../assets/images/Frame.png";
const PlayListCard = () => {
  return (
    <div className="card h-full  flex flex-1 sm:flex-col bg-none lg:bg-person bg-contain bg-no-repeat bg-right">
      <div className="flex-1  flex  flex-col gap-10 p-8">
        <p className="font-normal  text-sm">Curated playlist</p>
        <div className="my-8">
          <p className="text-[35px] font-bold">R & B Hits</p>
          <p className="text-sm mt-2 lg:w-[45%]">
            All mine, Lie again, Petty call me everyday, Out of time, No love,
            Bad habit, and so much more
          </p>
        </div>
        <div className="flex  items-center gap-4">
          <img
            src={contacts}
            alt=""
            className="object-contain h-12 w-12 min-w-[124px]"
          />
          <Heart className="h-6 w-6" />
          <p className="text-sm">33k Likes</p>
        </div>
      </div>
    </div>
  );
};

export default PlayListCard;
