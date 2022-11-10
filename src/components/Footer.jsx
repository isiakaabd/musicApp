//
import { ReactComponent as Previous } from "/src/assets/images/previous.svg";
import { ReactComponent as Next } from "/src/assets/images/next.svg";
import { ReactComponent as Play } from "/src/assets/images/play.svg";
import { ReactComponent as Repeat } from "/src/assets/images/repeat-one.svg";
import { ReactComponent as Shuffle } from "/src/assets/images/shuffle.svg";
import { ReactComponent as Volume } from "/src/assets/images/volume.svg";
import propTypes from "prop-types";
import { useState } from "react";
const Footer = ({ name, subtitle, photo, playValue, ...rest }) => {
  const [value, setValue] = useState(playValue);
  function addJust(e) {
    const { style, value } = e.target;

    setValue(value);
  }

  return (
    <aside
      className="fixed  flex px-6 lg:px-[80px] gap-3 justify-between bottom-0 left-0 right-0 backdrop-blur-lg py-1"
      {...rest}
    >
      <div className="flex w-[65%] md:max-w-[300px]  gap-3 items-center justify-between">
        <div className="h-12 w-12">
          <img
            src={photo}
            alt="album-name"
            className="rounded-[14px] w-full h-full"
          />
        </div>

        <div className="flex-1 overflow-hidden">
          <p className="text-sm font-bold overflow-hidden truncate ...">
            {name}
          </p>
          <p className="text-xs font-bold text-white/[.44]">{subtitle}</p>
        </div>
      </div>
      <div className=" flex-1   flex justify-between flex-col">
        <div className="flex justify-center  items-center ">
          <div className="flex items-center gap-6 justify-between">
            <Shuffle className="hidden md:block" />
            <Previous className=" hidden md:block" />
            <Play />
            <Next />
            <Repeat className=" hidden md:block" />
          </div>
        </div>
        <div className="">
          <input
            type="range"
            // onInput={addJust}
            value={value}
            onChange={addJust}
            name="range"
            className="hidden lg:block"
            id=""
          />
        </div>
      </div>
      <div className="flex-1 self-center hidden lg:block">
        <div className="flex justify-between items-center gap-4">
          <Volume className="" />
          <input type="range" name="range" id="" />
        </div>
      </div>
    </aside>
  );
};
Footer.propTypes = {
  name: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  photo: propTypes.node.isRequired,
  playValue: propTypes.number,
};

export default Footer;
