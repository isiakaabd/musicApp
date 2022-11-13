import Hamburger from "/src/assets/images/Hamburger";
import Search from "/src/assets/images/Search";
import { useMemo, useState } from "react";
import Logo from "/src/assets/images/Logo";
import Home from "/src/assets/images/Home";
import Radio from "/src/assets/images/Radio";
import Playlist from "/src/assets/images/Playlists";
import Video from "/src/assets/images/Videos";
import Profile from "/src/assets/images/Profile";
import Logout from "/src/assets/images/Logout";
import { Link } from "react-router-dom";
const MobileNav = () => {
  const [state, setState] = useState(false);
  const [selected, setSelected] = useState(0);
  const details = useMemo(
    () => [
      {
        path: "/",
        text: "Home",
        icon: <Home />,
      },
      {
        path: "/album",
        text: "Album",
        icon: <Radio />,
      },
      {
        path: "/collection",
        text: "My Collection",
        icon: <Playlist />,
      },
      {
        path: "/video",
        text: "Music Video",
        icon: <Video />,
      },
      {
        path: "/profile",
        text: "Profile",
        icon: <Profile />,
      },
      {
        path: "/logout",
        text: "Logout",
        icon: <Logout />,
      },
    ],
    []
  );
  return (
    <>
      <div className="flex justify-between mb-4 overflow-y-hidden shadow-2xl relative">
        <div className="flex gap-4 items-center">
          <Hamburger
            className="h-5 fill-[#EFEEE0]"
            onClick={() => setState(true)}
          />
          <Logo className="h-5" />
        </div>
        {!state ? (
          <Search className="h-5" />
        ) : (
          <Hamburger
            className="h-5 z-[1000] fill-[#EFEEE0] transition-all duration-200 ease-in-out"
            onClick={() => setState(false)}
          />
        )}
      </div>
      <div
        className={`absolute smooth-transition transition-all duration-200  ease-in-out inset-0 z-50 ${
          state ? "translate-x-0" : "translate-x-[-1000px]"
        } min-h-screen h-full bg-dark  overflow-hidden`}
      >
        <nav
          role="navigation"
          arial-label="secondary-navigation"
          className="p-4 mt-4"
        >
          <ul className="text-sm gap-y-7 flex flex-col">
            {details.map((item, index) => {
              const { path, text, icon } = item;
              return (
                <li
                  onClick={() => {
                    setSelected(index);
                    setState(false);
                  }}
                  key={index}
                  className={`transition-all duration-200 ease-linear   ${
                    index === selected
                  }? "active" : ""`}
                >
                  <Link to={path}>
                    <div
                      className={`flex  gap-x-6 items-center ${
                        index === selected && "active"
                      }`}
                    >
                      <div
                        className={`w-8  ${
                          index === selected ? "active" : "fill-[#EFEEE0]"
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
