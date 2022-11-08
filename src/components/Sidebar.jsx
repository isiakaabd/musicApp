import { ReactComponent as Logo } from "./../assets/images/logo.svg";
import { ReactComponent as Home } from "./../assets/images/Home.svg";
import { ReactComponent as Radio } from "./../assets/images/radio.svg";
import { ReactComponent as Playlist } from "./../assets/images/playlists.svg";
import { ReactComponent as Video } from "./../assets/images/videos.svg";
import { ReactComponent as Profile } from "./../assets/images/profile.svg";
import { ReactComponent as Logout } from "./../assets/images/Logout.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="hidden sidebar w-[52px]  gap-4 flex-col items-center lg:flex">
      <Logo />
      <div className="flex flex-col items-center mt-[40px] gap-[20px]">
        <div className="dark-bg">
          <Link to="/" relative="path">
            <Home />
          </Link>
          <Link to="/album" relative="path">
            <Radio />
          </Link>
          <Link to="/collection" relative="path">
            <Playlist className="hover:fill-current hover:bg-main" />
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
