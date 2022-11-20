const PlayBar = ({ value, setAppTime, setSeekTime, max }) => {
  return (
    <div>
      <input
        type="range"
        onInput={(e) => setSeekTime(e.target.value)}
        onClick={(e) => setAppTime(e.target.value)}
        value={value}
        style={{
          height: "8px",
          border: `2px solid inherit`,
          borderRadius: "20px",

          background: `linear-gradient(to right, #FACD66 0%, #FACD66 ${
            value + 2
          }%, transparent ${value - 2}%, transparent 100%)`,
        }}
        max={max}
        min={0}
        name="range"
        className="hidden lg:block"
        id="music-slider"
        title="music-track"
      />
    </div>
  );
};

export default PlayBar;
