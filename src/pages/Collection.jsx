import {
  Button,
  SearchBar,
  CollectionCard,
  Footer,
  LikeMusic,
} from "../components";
import { useState, useEffect } from "react";
import music from "/collect.png";
import collect from "/collect2.png";
import collect2 from "/collect3.png";
import { useGetAllSongsQuery } from "../api";
import { useSelector, useDispatch } from "react-redux";
import { activeIcon } from "../store/reducers/musicReducer";
import MusicPlayer from "../components/musicPlayer";
const Collection = () => {
  const [toggleState, setToggleState] = useState(true);
  const { activeSong, isPlaying, likes } = useSelector(
    (state) => state.fetchMusic
  );
  const { data } = useGetAllSongsQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(activeIcon(2));
  }, []);
  return (
    <div className="w-full flex flex-col gap-4">
      <SearchBar placeholder="Search artists" />
      <div className="flex items-center gap-4 justify-center lg:justify-start">
        <Button
          value="My collection"
          state={toggleState}
          currentState={true}
          func={setToggleState}
        />
        <Button
          value="Likes"
          state={!toggleState}
          currentState={false}
          func={setToggleState}
        />
      </div>
      {toggleState ? (
        <div className="flex justify-between lg:justify-start flex-wrap gap-8">
          <CollectionCard img={music} />
          <CollectionCard img={collect} />
          <CollectionCard img={collect2} />
        </div>
      ) : likes?.length == 0 ? (
        <p className="text-bold">Nothing Available here</p>
      ) : (
        <LikeMusic />
      )}
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

export default Collection;
