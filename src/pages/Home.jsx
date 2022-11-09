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

const Home = () => {
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
            <div className="flex lg:flex-col   overflow-y-auto pb-4 overflow-x-auto  gap-4">
              {Array(3)
                .fill({
                  text: "Golden age of 80s",
                  subTitle: "Sean swadder",
                  timeStamp: "2:34:45",
                  image: photo,
                })
                .map((item, index) => (
                  <TopChartCard
                    key={index}
                    text={item.text}
                    subTitle={item.subTitle}
                    timeStamp={item.timeStamp}
                    image={photo}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Release />
      </div>
      <Search />
      <Footer
        name="Seasons in"
        subtitle="james"
        playValue={50}
        photo={photos}
      />
    </div>
  );
};

export default Home;
