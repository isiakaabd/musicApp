import VolumeOff from "../../assets/images/VolumeOff";
import VolumeUp from "../../assets/images/VolumeUp";

const VolumeBar = ({ value, min, max, setVolume }) => {
  return (
    <div className="flex justify-between items-center gap-4 transition-all duration-100">
      {value > 0 ? (
        <VolumeUp
          className="h-8 w-8 fill-white duration-100"
          onClick={() => setVolume(0)}
        />
      ) : (
        <VolumeOff
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
          background: `linear-gradient(to right, #FACD66 0%, #FACD66 ${
            value * 100
          }%, transparent ${value * 100}%, transparent 100%)`,
          height: "4px",
          border: `2px solid inherit`,

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
