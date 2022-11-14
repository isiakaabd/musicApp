import propTypes from "prop-types";
import { useState } from "react";
import VolumeBar from "./musicPlayer/Volume";
import TrackDetails from "./musicPlayer/TrackDetails";
import { useDispatch } from "react-redux";
import Controls from "./musicPlayer/Controls";
import PlayBar from "./musicPlayer/PlayBar";

const Footer = ({ activeSong }) => {
  const { title, subtitle, url, images, ...rest } = activeSong;
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [value, setValue] = useState(40);
  const dispatch = useDispatch();

  return (
    <footer
      className="fixed z-[9999999]  flex px-6  py-5 lg:px-[80px] gap-3 justify-between bottom-0 left-0 right-0 backdrop-blur-lg "
      {...rest}
    >
      <TrackDetails images={images} title={title} subtitle={subtitle} />
      <div className=" flex-auto   flex justify-between flex-col">
        <div className="flex justify-center  items-center ">
          <Controls
            repeat={repeat}
            setDuration={setDuration}
            setAppTime={setAppTime}
            seekTime={seekTime}
            volume={volume}
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
Footer.propTypes = {
  activeSong: propTypes.object.isRequired,
  isPlaying: propTypes.bool.isRequired,
};

export default Footer;
