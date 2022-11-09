import { ReactComponent as Heart } from "/src/assets/images/Heart2.svg";
import { ReactComponent as Vertical } from "/src/assets/images/vertical.svg";

import Proptypes from "prop-types";
const AlbumItem = ({ item, setState }) => {
  const { image, subtitle, title, duration } = item;
  return (
    <div className="p-4 cursor-pointer bg-cardBg grid gap-x-4 lg:flex lg:justify-between auto-rows-[1fr] auto-cols-[1fr] place-content-center justify-items-start  items-center">
      <div className="flex h-full flex-1 w-full items-center gap-6 mr-auto col-start-1 col-span-1  row-start-1 row-span-2 ">
        <div className="h-full w-full  lg:w-max">
          <img src={image} alt="title" className="h-full object-contain" />
        </div>
        <Heart className="hidden sm:block" onClick={() => setState(item)} />
      </div>
      <p className="text-xs flex-1 col-start-2 col-span-2 row-start-1 row-end-2">
        {title}
      </p>
      <p className="text-xs  flex-1 col-start-2  col-span-2 row-start-2 row-end-3">
        {subtitle}
      </p>
      <p className="text-xs  flex-1 col-start-4 justify-self-end row-start-2 row-end-3">
        {duration}
      </p>
      <Vertical
        className="h-5 flex-none ml-auto  col-start-4 row-start-1 row-end-2"
        onClick={() => setState(item)}
      />
    </div>
  );
};
AlbumItem.Proptypes = {
  duration: Proptypes.string.isRequired,
  subtitle: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
};
export default AlbumItem;
