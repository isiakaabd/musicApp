import photo from "./../assets/images/AlbumCard.png";
import { ReactComponent as Previous } from "./../assets/images/previous.svg";
import { ReactComponent as Next } from "./../assets/images/next.svg";
import { ReactComponent as Play } from "./../assets/images/play.svg";
import { ReactComponent as Repeat } from "./../assets/images/repeat-one.svg";
import { ReactComponent as Shuffle } from "./../assets/images/shuffle.svg";
import { ReactComponent as Volume } from "./../assets/images/volume.svg";
const Footer = () => {
  return (
    <aside className="fixed flex px-[80px] gap-3 justify-between bottom-0 left-0 right-0 backdrop-blur-lg py-1">
      <div className="flex flex-none gap-3 items-center">
        <div className="h-12 w-12">
          <img src={photo} alt="album-name" classvName="rounded-[14px]" />
        </div>

        <div className="flex flex-col gap-1 ">
          <p className="text-sm font-bold">Seasons in</p>
          <p className="text-xs font-bold text-white/[.44]">James</p>
        </div>
      </div>
      <div className="w-64  flex-auto flex justify-between flex-col">
        <div className="flex justify-center  items-center ">
          <div className="flex items-center gap-6 justify-between">
            <Shuffle />
            <Previous />
            <Play />
            <Next />
            <Repeat />
          </div>
        </div>
        <div className="">
          <input type="range" name="range" id="" />
        </div>
      </div>
      <div className="w-32  flex-1 self-center">
        <div className="flex justify-between items-center gap-4">
          <Volume />
          <input type="range" name="range" id="" />
        </div>
      </div>
    </aside>
  );
};

export default Footer;
