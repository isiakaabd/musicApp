import { useDispatch } from "react-redux";
import { ReactComponent as Heart } from "/src/assets/images/Heart-fill.svg";
import { useGetAllSongsQuery } from "../api";
import { setActiveSong } from "../store/reducers/musicReducer";

const Release = () => {
  const dispatch = useDispatch();
  const { data } = useGetAllSongsQuery();
  return (
    <div className="w-full">
      <p className="my-2 text-2xl font-bold">New releases.</p>
      <div className="overflow-x-auto ">
        <div className="grid  grid-flow-col gap-5  pb-2 auto-cols-[153px]">
          {data?.map((song, index) => {
            const { images, title, subtitle } = song;
            return (
              <div key={index} className="flex gap-4 flex-col ">
                <img
                  src={images?.coverart}
                  alt={`image of ${title}`}
                  className="rounded-[25px] mb-2 cursor-pointer"
                  onClick={() => dispatch(setActiveSong({ song, data, index }))}
                />

                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-1 flex-col truncate gap-3">
                    <p className="text-sm truncate ...">{title}</p>
                    <p className="text-sm truncate ... text-white/[0.5]">
                      {subtitle}
                    </p>
                  </div>
                  <Heart className="h-6 w-6 cursor-pointer" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Release;
