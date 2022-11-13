import photo from "/photo1.png";
import photos from "/AlbumCard.png";
// import { ReactComponent as Photos } from "
import {
  PlayListCard,
  SearchBar,
  TopChartCard,
  Sidebar,
  Search,
  Release,
  Footer,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "../store/reducers/musicReducer";
import { useEffect } from "react";
import { useGetAllSongsQuery } from "../api";

const Home = () => {
  const { data, isFetching, error } = useGetAllSongsQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.fetchMusic);
  console.log(data);
  // const {
  //   albumURI: { uri },
  //   albums: { albumDetails },
  // } = useSelector((state) => state.fetchMusic);
  // const albums = useSelector((state) => state.albums.albumDetails);
  const topCard = data?.slice(0, 3);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (uri) {
  //     dispatch(fetchAlbums(uri));
  //   }
  // }, [uri]);
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
                  <TopChartCard key={song.key} song={song} />
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
        <Footer activeSong={activeSong} isPlaying={isPlaying} />
      )}
    </div>
  );
};

export default Home;
