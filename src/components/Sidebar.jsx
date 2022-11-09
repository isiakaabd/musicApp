import { ReactComponent as Logo } from "/src/assets/images/logo.svg";
import { ReactComponent as Home } from "/src/assets/images/Home.svg";
import { ReactComponent as Radio } from "/src/assets/images/radio.svg";
import { ReactComponent as Playlist } from "/src/assets/images/playlists.svg";
import { ReactComponent as Video } from "/src/assets/images/videos.svg";
import { ReactComponent as Profile } from "/src/assets/images/profile.svg";
import { ReactComponent as Logout } from "/src/assets/images/Logout.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="hidden sidebar w-[52px]  gap-4 flex-col items-center lg:flex">
      <Logo />
      <div className="flex flex-col items-center mt-[40px] gap-[20px]">
        <div className="dark-bg">
          <Link to="/">
            <Home />
          </Link>
          <Link to="/album">
            <Radio className="hover:stroke-white" />
          </Link>
          <Link to="/collection">
            <Playlist />
          </Link>
          <Video />
        </div>
        <div className="dark-bg">
          <Profile />
          <Logout />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
