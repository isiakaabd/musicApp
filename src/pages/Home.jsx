import SearchBar from "../components/SearchBar";
import photo from "./../assets/images/photo1.png";
import PlayListCard from "../components/PlayListCard";
import TopChartCard from "../components/TopChartCard";
import Sidebar from "../components/Sidebar";
const Home = () => {
  return (
    <div className="flex gap-4 mr-12">
      <Sidebar />
      <div className="flex flex-col gap-4 flex-1">
        <SearchBar />
        <div className=" flex  gap-8 text-white flex-wrap ">
          <PlayListCard />

          <div className=" flex-auto w-28 ">
            <p className="text-[#EFEEE0] text-2xl font-bold mb-2">Top Charts</p>
            <div className="flex flex-col gap-4">
              {Array(3)
                .fill({
                  text: "Golden age of 80s",
                  subTitle: "Sean swadder",
                  timeStamp: "2:34:45",
                  image: { photo },
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
    </div>
  );
};

export default Home;
