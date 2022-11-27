import propTypes from "prop-types";
import { useState, useEffect } from "react";

import TrackDetails from "./TrackDetails";
import { useDispatch, useSelector } from "react-redux";
import Controls from "./Controls";
import PlayBar from "./PlayBar";
import VolumeBar from "./Volume";
import {
  nextSong,
  previousSong,
  setPlayPause,
} from "../../store/reducers/musicReducer";
import { useGetAllSongsQuery } from "../../api";

const MusicPlayer = () => {
  const { currentIndex, activeSong, isActive, isPlaying } = useSelector(
    (state) => state.fetchMusic
  );

  const { data } = useGetAllSongsQuery();
  const { title, subtitle, url, images, ...rest } = activeSong;
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (data.length) dispatch(setPlayPause(true));
  }, [currentIndex]);
  const handleNext = () => {
    dispatch(setPlayPause(false));
    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % data.length));
    }
    dispatch(nextSong(Math.floor(Math.random() * data.length)));
  };
  const handlePrevious = () => {
    // dispatch(setPlayPause(false));
    if (currentIndex === 0) {
      dispatch(previousSong(data.length - 1));
    } else if (shuffle) {
      dispatch(previousSong(Math.floor(Math.random() * data.length)));
    } else dispatch(previousSong(currentIndex - 1));
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
    <footer
      className="fixed z-[9999999]  flex px-6  py-5 lg:px-[80px] gap-3 justify-between bottom-0 left-0 right-0 backdrop-blur-lg "
      {...rest}
    >
      <TrackDetails
        images={images}
        title={title}
        subtitle={subtitle}
        max={duration}
        value={appTime}
      />
      <div className=" flex-auto   flex justify-between flex-col">
        <div className="flex justify-center  items-center ">
          <Controls
            setDuration={setDuration}
            setAppTime={setAppTime}
            seekTime={seekTime}
            volume={volume}
            shuffle={shuffle}
            setShuffle={setShuffle}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            handlePausePlay={handlePausePlay}
            repeat={repeat}
            setRepeat={setRepeat}
          />
        </div>
        <PlayBar
          value={appTime}
          setAppTime={setAppTime}
          setSeekTime={setSeekTime}
          max={duration}
        />
      </div>
      <div className="flex-1 self-center hidden lg:block">
        <VolumeBar value={volume} min="0" max="1" setVolume={setVolume} />
      </div>
    </footer>
  );
};
MusicPlayer.propTypes = {
  activeSong: propTypes.object.isRequired,
  isPlaying: propTypes.bool.isRequired,
};

export default MusicPlayer;
