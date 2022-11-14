import Hamburger from "/src/assets/images/Hamburger";
import Search from "/src/assets/images/Search";
import { useMemo, useState } from "react";
import Logo from "/src/assets/images/Logo";
import Home from "/src/assets/images/Home";
import Radio from "/src/assets/images/Radio";
import Playlist from "/src/assets/images/Playlists";
import { SlLogout } from "react-icons/sl";
import Video from "/src/assets/images/Videos";
import Profile from "/src/assets/images/Profile";
import Logout from "/src/assets/images/Logout";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";

export const msToTime = (duration) => {
  // let milliseconds = Math.floor((duration % 1000) / 100),
  let seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
};
export const menuIcons = [
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
];
