import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from "react-icons/bs";
const VolumeBar = ({ value, min, max, setVolume }) => {
  return (
    <div className="flex justify-between items-center gap-4 transition-all duration-100">
      {value > 0.5 || value == 1 ? (
        <BsFillVolumeUpFill
          size={20}
          className="h-8 w-8 fill-white duration-100"
          onClick={() => setVolume(0)}
        />
      ) : value > 0 && value <= 0.5 ? (
        <BsVolumeDownFill
          size={20}
          className="h-8 w-8 fill-white duration-100"
          onClick={() => setVolume(1)}
        />
      ) : (
        <BsFillVolumeMuteFill
          size={20}
          className="h-8 w-8 fill-white"
          onClick={() => setVolume(0.5)}
        />
      )}

      <input
        type="range"
        name="range"
        id=""
        step="any"
        style={{
          height: "8px",
          border: `2px solid inherit`,
          borderRadius: "20px",

          background: `linear-gradient(to right, #FACD66 0%, #FACD66 ${
            value * 100
          }%, transparent ${value * 100}%, transparent 100%)`,
        }}
        value={value}
        min={min}
        max={max}
        className="transition-all ease-in-out"
        onChange={(e) => setVolume(e.target.value)}
      />
    </div>
  );
};

export default VolumeBar;
