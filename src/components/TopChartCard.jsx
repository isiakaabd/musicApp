import { useDispatch, useSelector } from "react-redux";
import { setActiveSong } from "../store/reducers/musicReducer";
import { ReactComponent as Heart } from "/src/assets/images/Heart-fill.svg";

const TopChartCard = ({ song }) => {
  const { images, title, subtitle, url } = song;

  const dispatch = useDispatch();
  return (
    <div
      className=" text-white bg-dark flex cursor-pointer justify-between over-flow:hidden  p-4 rounded-lg"
      onClick={() => dispatch(setActiveSong(song))}
    >
      <div className="flex gap-4 sm:gap-2  w-[200px] md:w-[300px] lg:max-w-[80%]   flex-col lg:flex-row ">
        <img
          src={images?.coverart}
          alt={`image of ${title}`}
          loading="lazy"
          className=" object-contain h-full w-24 sm:w-16 md:w-16 border-solid border border-main rounded-[10px]"
        />

        <div className=" font-normal  lg:truncate justify-between">
          <p className="text-lg  truncate ... ">{title}</p>
          <p className="text-xs truncate ...  text-white/50 ">{subtitle}</p>
          {/* <p className="text-xs">{msToTime(timeStamp)}</p> */}
        </div>
      </div>
      <div className="p-2 border self-center rounded-full border-white/[0.11] ">
        <Heart className="h-6 w-6 " />
      </div>
    </div>
  );
};

export default TopChartCard;
