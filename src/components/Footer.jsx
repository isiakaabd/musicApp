//
import { ReactComponent as Previous } from "../../public/previous.svg";
import { ReactComponent as Next } from "../../public/next.svg";
import { ReactComponent as Play } from "../../public/play.svg";
import { ReactComponent as Repeat } from "../../public/repeat-one.svg";
import { ReactComponent as Shuffle } from "../../public/shuffle.svg";
import { ReactComponent as Volume } from "../../public/volume.svg";
import propTypes from "prop-types";
import { useState } from "react";
const Footer = ({ name, subtitle, photo, playValue, ...rest }) => {
  const [value, setValue] = useState(playValue);
  function addJust(e) {
    const { style, value } = e.target;

    setValue(value);
    // style.background = `linear-gradient(to right, #facd66 0%,#facd66 ${value}%, transparent ${value}%, transparent 100%)`;
    // style.border = "2px solid";
    // style.height = "3px";
    // style.borderRadius = "50px";
    // style["accentColor"] = "red";
    // style["moz-range-track"].border = "2px solid #facd66";
    // console.log(style);
    // style["::-moz-range-track"].background = "red";
    // this.style.background = ;
  }

  return (
    <aside
      className="fixed  flex px-6 lg:px-[80px] gap-3 justify-between bottom-0 left-0 right-0 backdrop-blur-lg py-1"
      {...rest}
    >
      <div className="flex flex-none gap-3 items-center justify-between">
        <div className="h-12 w-12">
          <img src={photo} alt="album-name" className="rounded-[14px]" />
        </div>

        <div className="flex flex-col gap-1 ">
          <p className="text-sm font-bold">{name}</p>
          <p className="text-xs font-bold text-white/[.44]">{subtitle}</p>
        </div>
      </div>
      <div className="w-64  flex-auto flex justify-between flex-col">
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
      <div className="w-32  flex-1 self-center hidden lg:block">
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
