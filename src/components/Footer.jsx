//
import { ReactComponent as Previous } from "/src/assets/images/previous.svg";
import { ReactComponent as Next } from "/src/assets/images/next.svg";
import Play from "/src/assets/images/Play";
import Pause from "/src/assets/images/Pause";
import { ReactComponent as Repeat } from "/src/assets/images/repeat-one.svg";
import { ReactComponent as Shuffle } from "/src/assets/images/shuffle.svg";
import propTypes from "prop-types";
import { useState } from "react";
import Player from "./musicPlayer/Player";
import VolumeBar from "./musicPlayer/Volume";
import TrackDetails from "./musicPlayer/TrackDetails";
import { useDispatch } from "react-redux";
import { setPlayPause, nextSong } from "../store/reducers/musicReducer";

const Footer = ({ activeSong, isPlaying, allSongs }) => {
  const { title, subtitle, url, images, ...rest } = activeSong;
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [value, setValue] = useState(40);
  const dispatch = useDispatch();
  function addJust(e) {
    const { style, value } = e.target;

    // setValue(props);
  }

  //  useEffect(() => {
  //    if (allSongs.length) dispatch(setPlayPause(true));
  //  }, [currentIndex]);
  return (
    <footer
      className="fixed z-[9999999]  flex px-6 lg:px-[80px] gap-3 justify-between bottom-0 left-0 right-0 backdrop-blur-lg py-1"
      {...rest}
    >
      <TrackDetails images={images} title={title} subtitle={subtitle} />
      <div className=" flex-auto   flex justify-between flex-col">
        <div className="flex justify-center  items-center ">
          <div className="flex items-center gap-6 justify-between">
            <Shuffle className="hidden md:block" />
            <Previous className=" hidden md:block" />
            <div className="relative">
              {isPlaying ? (
                <Pause
                  className="h-12 w-12 fill-mainYellow"
                  // onClick={() => alert(22)}
                  onClick={() => dispatch(setPlayPause(false))}
                />
              ) : (
                <Play
                  className="h-12 w-12 fill-mainYellow"
                  onClick={() => dispatch(setPlayPause(true))}
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
                  // onEnded={handleNextSong}
                  onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
                  onLoadedData={(event) => setDuration(event.target.duration)}
                />
              </div>
            </div>
            <Next
              onClick={() =>
                dispatch(nextSong(Math.floor(Math.random() * allSongs.length)))
              }
            />
            <Repeat className=" hidden md:block" />
          </div>
        </div>
        <div className="">
          <input
            type="range"
            // onInput={addJust}
            value={value}
            onChange={addJust}
            name="range"
            className="hidden lg:block"
            id=""
          />
        </div>
      </div>
      <div className="flex-1 self-center hidden lg:block">
        <VolumeBar value={volume} min="0" max="1" setVolume={setVolume} />
      </div>
    </footer>
  );
};
Footer.propTypes = {
  activeSong: propTypes.object.isRequired,
  isPlaying: propTypes.bool.isRequired,
};

export default Footer;
