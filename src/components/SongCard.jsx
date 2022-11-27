import { ReactComponent as Heart } from "/src/assets/images/Heart-fill.svg";
import {
  setActiveSong,
  likeSong,
  unlikeSong,
} from "../store/reducers/musicReducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
const SongCard = ({ song, data, index }) => {
  const { images, title, subtitle } = song;

  const dispatch = useDispatch();
  const [fill, setFill] = useState(false);
  return (
    <div className="flex gap-4 flex-col ">
      <img
        src={images?.coverart}
        alt={`image of ${title}`}
        className="rounded-[25px] mb-2 cursor-pointer"
        onClick={() => dispatch(setActiveSong({ song, data, index }))}
      />

      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-1 flex-col truncate gap-3">
          <p className="text-sm truncate ...">{title}</p>
          <p className="text-sm truncate ... text-white/[0.5]">{subtitle}</p>
        </div>
        <Heart
          // className="h-6 w-6 cursor-pointer"
          className={`h-6 w-6 ${fill ? "fill-mainYellow" : "fill-none"}`}
          onClick={() => {
            setFill(!fill);
            if (fill) {
              dispatch(unlikeSong(song));
            } else {
              dispatch(likeSong(song));
            }
          }}
        />
      </div>
    </div>
  );
};

export default SongCard;
