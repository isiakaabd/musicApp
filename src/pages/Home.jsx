import photo from "./../assets/images/photo1.png";
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
    <div className="flex gap-4 md:mr-12 p-[30px]">
      <Sidebar />
      <div className="flex flex-col gap-4 relative w-full">
        <SearchBar />
        <div className=" flex flex-wrap md:flex-nowrap gap-8 text-white ">
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
        {/* release */}
        <Release />
        <Search />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
