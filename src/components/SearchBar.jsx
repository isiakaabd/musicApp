import { FiSearch } from "react-icons/fi";
import Proptypes from "prop-types";
import TopChartCard from "./TopChartCard";
import { useState } from "react";
import { useEffect } from "react";
const SearchBar = ({
  placeholder,
  songs,
  display,
  value,
  error,
  loading,
  setValue,
  handleSearch,
}) => {
  const [state, setState] = useState([]);
  const [err, setErr] = useState("");
  useEffect(() => {
    setState(songs);
    if (value) {
      setValue("");
    }
  }, [songs]);
  useEffect(() => {
    setErr(error?.error);
    setErr("");
  }, [error]);
  useEffect(() => {
    let x = setTimeout(() => {
      setState([]);
    }, 10000);
    return () => clearTimeout(x);
  }, [songs, error]);

  return (
    <div
      className={`relative transition-all  ease-in-out ${
        display ? "flex" : "hidden"
      }  lg:flex w-full items-center gap-4  max-w-[600px] p-2 bg-dark`}
    >
      <FiSearch className="h-5 w-5 hidden lg:block" onClick={handleSearch} />
      <input
        type="text"
        name=""
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="  border-none text-[14px]  text-[#fff] bg-inherit  flex-1 focus:border-none focus:outline-none active:border-none "
        placeholder={placeholder}
      />
      <div className="absolute w-full top-full  bg-main z-20">
        {loading ? (
          <p className="text-xl text-mainYellow">Loading...</p>
        ) : err ? (
          <p className="text-xl text-red-400">{error?.error}</p>
        ) : state?.length > 0 ? (
          <div className="p-4 flex gap-2 flex-col">
            {state?.slice(0, 4).map((song) => {
              return <TopChartCard key={song.key} song={song} data={songs} />;
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};
SearchBar.Proptypes = {
  placeholder: Proptypes.string.isRequired,
};

export default SearchBar;
