import TopChartCard from "./TopChartCard";
const SearchMusic = ({ songs }) => {
  return (
    <div className="lg:max-h-full overflow-y-auto">
      <div className="flex overflow-y-auto  pb-4  gap-4">
        {songs?.map((song) => (
          <TopChartCard key={song.key} song={song} data={songs} />
        ))}
      </div>
    </div>
  );
};

export default SearchMusic;
