import { useGetAllSongsQuery } from "../api";

import SongCard from "./SongCard";
const Release = () => {
  const { data } = useGetAllSongsQuery();

  return (
    <div className="w-full">
      <p className="my-2 text-2xl font-bold">New releases.</p>
      <div className="overflow-x-auto hide-scrollbar">
        <div className="grid  grid-flow-col gap-5  pb-2 auto-cols-[153px]">
          {data?.map((song, index) => (
            <SongCard key={index} song={song} index={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Release;
