import AlbumItem from "./AlbumItem";
import { useSelector } from "react-redux";

const LikeMusic = () => {
  const { likes } = useSelector((state) => state.fetchMusic);

  return likes?.map((item) => <AlbumItem key={item.duration} item={item} />);
};

export default LikeMusic;
