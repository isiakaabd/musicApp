import {
  PlayListCard,
  SearchBar,
  TopChartCard,
  Search,
  Release,
  Footer,
} from "../components";
import { useSelector } from "react-redux";
import { useGetAllSongsQuery } from "../api";

const Home = () => {
  const { data, isFetching } = useGetAllSongsQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.fetchMusic);

  const topCard = data?.slice(0, 3);
  if (isFetching) return <h2 className="text-xs text-center">Loading..</h2>;
  return (
    <div className="flex relative flex-col gap-6 w-full pb-24">
      <SearchBar placeholder="Search here" />
      <div className="flex flex-1 flex-wrap lg:max-h-[450px] lg:flex-nowrap gap-8">
        <div className="w-full lg:w-[65%]">
          <PlayListCard />
        </div>
        <div className="w-full lg:w-[35%] lg:max-h-[450px]">
          <p className="text-[#EFEEE0] text-2xl font-bold mb-2">Top Charts</p>
          <div className="lg:max-h-full overflow-y-auto">
            <div className="flex lg:flex-col   overflow-y-auto lg:overflow-x-hidden pb-4  gap-4">
              {topCard?.length > 0 ? (
                topCard?.map((song) => (
                  <TopChartCard key={song.key} song={song} data={data} />
                ))
              ) : (
                <h2 className="text-3xl">No Music Available</h2>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Release data={data} />
      </div>
      <Search />
      {activeSong.title && (
        <Footer activeSong={activeSong} allSongs={data} isPlaying={isPlaying} />
      )}
    </div>
  );
};

export default Home;
