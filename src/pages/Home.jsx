import {
  PlayListCard,
  SearchBar,
  TopChartCard,
  SearchMusic as SearchComponent,
  Release,
} from "../components";
import { useSelector } from "react-redux";
import { useGetAllSongsQuery, useLazyGetSongsBySearchQuery } from "../api";
import MusicPlayer from "../components/musicPlayer";
import { useState, useEffect } from "react";
import SearchMusic from "../components/SearchMusic";

const Home = () => {
  const { data, isFetching } = useGetAllSongsQuery();
  const [fetch, { data: dt, error, isLoading }] =
    useLazyGetSongsBySearchQuery();
  const { activeSong, isPlaying, display } = useSelector(
    (state) => state.fetchMusic
  );

  const songs = dt?.tracks?.hits.map((song) => song.track);

  const [value, setValue] = useState("");
  console.log(songs);
  useEffect(() => {
    const handler = (e) => {
      if (e.keyCode === 13) {
        // check if the user is on the invoice page or not
        if (window.location.pathname === "/") {
          e.preventDefault();
          fetch(value);
          setValue("");
        }
      }
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const topCard = data?.slice(0, 3);
  const handleSearch = () => {
    fetch(value);
  };

  return (
    <div className="flex relative flex-col gap-6 w-full pb-24">
      <SearchBar
        value={value}
        handleSearch={handleSearch}
        setValue={setValue}
        placeholder="Search here"
        display={display}
      />
      <div className="flex flex-1 flex-wrap lg:max-h-[450px] lg:flex-nowrap gap-8">
        <div className="w-full lg:w-[65%]">
          <PlayListCard />
        </div>
        <div className="w-full lg:w-[35%] lg:max-h-[450px]">
          <p className="text-[#EFEEE0] text-2xl font-bold mb-2">Top Charts</p>
          <div className="lg:max-h-full overflow-y-auto">
            <div className="flex lg:flex-col   overflow-y-auto lg:overflow-x-hidden pb-4  gap-4">
              {isFetching ? (
                <h2 className="text-xs text-center">Loading..</h2>
              ) : topCard?.length > 0 ? (
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
        <Release />
      </div>
      <div className="w-full overflow-y-auto">
        <p className="text-[#EFEEE0] text-2xl font-bold mb-2">Your Search</p>
        <SearchComponent songs={songs} />
      </div>
      {activeSong.title && (
        <MusicPlayer
          activeSong={activeSong}
          allSongs={data}
          isPlaying={isPlaying}
        />
      )}
    </div>
  );
};

export default Home;
