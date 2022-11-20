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
import { RiRepeat2Fill, RiRepeatOneFill } from "react-icons/ri";

const Controls = ({
  shuffle,
  setDuration,
  setAppTime,
  seekTime,
  handlePausePlay,
  handleNext,
  handlePrevious,
  setShuffle,
  volume,
  setRepeat,
  repeat,
}) => {
  const { isPlaying, activeSong } = useSelector((state) => state.fetchMusic);

  return (
    <div className="flex items-center gap-6 justify-between">
      <BsShuffle
        title="shuffle"
        color={shuffle ? "#facd66" : "#fff"}
        onClick={() => setShuffle(!shuffle)}
        size={30}
        className="hidden md:block"
      />
      <MdSkipPrevious
        size={30}
        title="previous"
        className=" hidden md:block"
        onClick={handlePrevious}
      />
      <div className="relative py-4">
        {isPlaying ? (
          <BsFillPauseFill
            className="h-12 w-12 fill-mainYellow"
            onClick={handlePausePlay}
            title="pause"
          />
        ) : (
          <BsFillPlayFill
            size={30}
            title="play"
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
      <MdSkipNext size={30} onClick={handleNext} title="next" />
      {repeat ? (
        <RiRepeatOneFill
          size={30}
          className=" hidden md:block"
          color={repeat ? "#facd66" : "#fff"}
          onClick={() => setRepeat(!repeat)}
          title="no-repeat"
        />
      ) : (
        <RiRepeat2Fill
          size={30}
          title="repeat-one"
          className=" hidden md:block"
          color={repeat ? "#facd66" : "#fff"}
          onClick={() => setRepeat(!repeat)}
        />
      )}
    </div>
  );
};

export default Controls;
