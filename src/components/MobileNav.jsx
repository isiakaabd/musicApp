import Hamburger from "/src/assets/images/Hamburger";
import Search from "/src/assets/images/Search";
import { useState } from "react";
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
        className={`absolute transition-all duration-200 ease-in-out inset-0 z-50 ${
          state ? "translate-x-0" : "translate-x-[-1000px]"
        } min-h-screen h-full bg-dark  overflow-hidden`}
      >
        <nav
          role="navigation"
          arial-label="secondary-navigation"
          className="p-4 mt-4"
        >
          <ul className="text-sm gap-y-7 flex flex-col">
            <li>
              <Link to="/">
                <div className="flex  gap-x-6 items-center">
                  <Home className="svg" />
                  <span>Home</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/album">
                <div className="flex  gap-x-6 items-center">
                  <Radio className="svg" />
                  <span>Album</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/collection">
                <div className="flex  gap-x-6 items-center">
                  <Playlist className="svg" />
                  <span>My Collection</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/video">
                <div className="flex  gap-x-6 items-center">
                  <Video className="svg" />
                  <span>Music Video</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/video">
                <div className="flex  gap-x-6 items-center">
                  <Profile className="svg" />
                  <span>Profile</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/video">
                <div className="flex  gap-x-6 items-center">
                  <Logout className="svg" />
                  <span>Logout</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
