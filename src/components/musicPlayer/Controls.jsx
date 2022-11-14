import { ReactComponent as Previous } from "/src/assets/images/previous.svg";
import { ReactComponent as Next } from "/src/assets/images/next.svg";
import Play from "/src/assets/images/Play";
import Pause from "/src/assets/images/Pause";
import { ReactComponent as Repeat } from "/src/assets/images/repeat-one.svg";
import { ReactComponent as Shuffle } from "/src/assets/images/shuffle.svg";
import Player from "./Player";
import {
  nextSong,
  setPlayPause,
  previousSong,
} from "../../store/reducers/musicReducer";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllSongsQuery } from "../../api";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";

const Controls = ({ repeat, setDuration, setAppTime, seekTime, volume }) => {
  const dispatch = useDispatch();
  const { data } = useGetAllSongsQuery();
  const { isPlaying, isActive, activeSong } = useSelector(
    (state) => state.fetchMusic
  );
  const handleNext = () => {
    dispatch(setPlayPause(false));
    dispatch(nextSong(Math.floor(Math.random() * data.length)));
  };
  const handlePrevious = () => {
    dispatch(setPlayPause(false));
    dispatch(previousSong(Math.floor(Math.random() * data.length)));
  };
  const handlePausePlay = () => {
    if (!isActive) return;
    if (isPlaying) {
      dispatch(setPlayPause(false));
    } else {
      dispatch(setPlayPause(true));
    }
  };
  return (
    <div className="flex items-center gap-6 justify-between">
      <BsShuffle size={30} className="hidden md:block" />
      <MdSkipPrevious
        size={30}
        className=" hidden md:block"
        onClick={handlePrevious}
      />
      <div className="relative py-4">
        {isPlaying ? (
          <BsFillPauseFill
            className="h-12 w-12 fill-mainYellow"
            onClick={handlePausePlay}
          />
        ) : (
          <BsFillPlayFill
            size={30}
            className="h-12 w-12 fill-mainYellow"
            onClick={handlePausePlay}
          />
        )}
        <div className="absolute inset-0 z-[-1]">
          <Player
            activeSong={activeSong}
            volume={volume}
            isPlaying={isPlaying}
            seekTime={seekTime}
            repeat={repeat}
            // currentIndex={currentIndex}
            onEnded={handleNext}
            onTimeUpdate={(e) => setAppTime(e.target.currentTime)}
            onLoadedData={(e) => setDuration(e.target.duration)}
          />
        </div>
      </div>
      <MdSkipNext size={30} onClick={handleNext} />
      <BsArrowRepeat size={30} className=" hidden md:block" />
    </div>
  );
};

export default Controls;
