import { ReactComponent as Volume } from "/src/assets/images/volume.svg";

const VolumeBar = ({ value, min, max, setVolume }) => {
  return (
    <div className="flex justify-between items-center gap-4">
      <Volume className="" />
      <input
        type="range"
        name="range"
        id=""
        step="any"
        value={value}
        min={min}
        max={max}
        onChange={(e) => setVolume(e.target.value)}
      />
    </div>
  );
};

export default VolumeBar;
