import photo from "/artisit.png";
import heart from "/heart.png";
import { ReactComponent as Play } from "/src/assets/images/pla.svg";
import { ReactComponent as Music } from "/src/assets/images/music.svg";

const AlbumCard = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-4 mb-5 gap-6 ">
      <img src={photo} alt="artist-image" />

      <div className="lg:self-end flex flex-col gap-8 ">
        <div className="max-w-[600px] ">
          <p className="text-[#A4C7C6] font-bold text-4xl leading-[4rem] ">
            Tomorrow’s tunes
          </p>
          <p className="text-sm text-lightDark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
          <p className="text-sm text-lightDark mt-4">64 songs ~ 16 hrs+</p>
        </div>
        <div className="flex justify-between lg:justify-start flex-1 items-center gap-4">
          <div className="flex items-center gap-2 p-2 rounded-3xl backdrop-blur-sm bg-white/[0.07]">
            {/* <img src={play} alt="play" /> */}
            <Play className="h-5" />
            <p className="text-[12px] leading-none whitespace-nowrap">
              Play All
            </p>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-3xl backdrop-blur-sm bg-white/[0.07]">
            {/* <img src={music} alt="music-square" /> */}
            <Music className="h-5" />
            <p className="text-[12px] leading-none whitespace-nowrap">
              Add to Collection
            </p>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-3xl backdrop-blur-sm bg-white/[0.07]">
            {/* <img src={music} alt="music-square" /> */}
            <img src={heart} alt="heart" className="" />
            <p className="text-[12px] lg:hidden leading-none">Like</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
