import { useState } from "react";
import Logo from "/src/assets/images/Logo";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import { menuIcons } from "../utilities";
import { activeIcon, searchDisplay } from "../store/reducers/musicReducer";
const MobileNav = () => {
  const [state, setState] = useState(false);
  const { isActiveState } = useSelector((state) => state.fetchMusic);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex  justify-between mb-4 overflow-y-hidden shadow-2xl ">
        <div className="flex gap-4 items-center">
          <HiMenuAlt4
            className="h-5 fill-[#EFEEE0]"
            onClick={() => setState(true)}
          />
          <Logo className="h-5" />
        </div>
        <FiSearch
          className="h-5 transition-all ease-in-out"
          onClick={() => dispatch(searchDisplay())}
        />
      </div>
      <div
        className={`absolute  transition-all p-4 duration-200  ease-in-out inset-0 z-50 ${
          state ? "translate-x-0" : "translate-x-[-1000px]"
        } min-h-full h-screen  bg-dark  overflow-hidden`}
      >
        <div className="flex justify-end">
          <VscChromeClose
            className="h-5 z-[1000] text-[#EFEEE0] fill-[#EFEEE0] transition-all duration-200 ease-in-out"
            onClick={() => setState(false)}
          />
        </div>
        <nav
          role="navigation"
          arial-label="secondary-navigation"
          className="p-4 mt-4"
        >
          <ul className="text-sm gap-y-7 flex flex-col">
            {menuIcons.map((item, index) => {
              const { path, text, icon } = item;
              return (
                <li
                  onClick={() => {
                    dispatch(activeIcon(index));

                    setState(false);
                  }}
                  key={index}
                  className={`transition-all duration-200 ease-linear   ${
                    index === isActiveState
                  }? "active" : ""`}
                >
                  <Link to={path}>
                    <div
                      className={`flex  gap-x-6 items-center ${
                        index === isActiveState && "active"
                      }`}
                    >
                      <div
                        className={`w-8  ${
                          index === isActiveState ? "active" : "fill-[#EFEEE0]"
                        }`}
                      >
                        {icon}
                      </div>
                      {/* <Icon className={`svg ${state}&& fill-mainYellow`} /> */}
                      <span>{text}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
