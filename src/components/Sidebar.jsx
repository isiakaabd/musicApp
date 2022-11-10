import { ReactComponent as Logo } from "/src/assets/images/logo.svg";
import Home from "/src/assets/images/Home";
import Radio from "/src/assets/images/Radio";
import Playlist from "/src/assets/images/Playlists";
import Video from "/src/assets/images/Videos";
import Profile from "/src/assets/images/Profile";
import Logout from "/src/assets/images/Logout";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="hidden sidebar w-[52px]  gap-4 flex-col items-center lg:flex">
      <Logo />
      <div className="flex flex-col  justify-center items-center mt-[40px] gap-[20px]">
        <div className="dark-bg">
          <Link to="/">
            <div className="flex  justify-between">
              <span className="lg:hidden">Home</span>
              <Home className="svg" />
            </div>
          </Link>
          <Link to="/album">
            <div className="flex  justify-between">
              <span className="lg:hidden">Home</span>
              <Radio className="svg" />
            </div>
          </Link>
          <Link to="/collection">
            <Playlist className="svg" />
          </Link>
          <Link to="/video">
            <Video className="svg" />
          </Link>
        </div>
        <div className="dark-bg flex items-center flex-col gap-[20px] justify-center">
          <Link to="/profile">
            <Profile className="svg" />
          </Link>
          <Link to="/logout">
            <Logout className="svg" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
