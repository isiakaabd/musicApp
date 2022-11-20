import { FiSearch } from "react-icons/fi";

import Proptypes from "prop-types";
const SearchBar = ({ placeholder, display, value, setValue, handleSearch }) => {
  return (
    <div
      className={` transition-all ease-in-out ${
        display ? "flex" : "hidden"
      }  lg:flex w-full items-center gap-4  max-w-[400px] p-2 bg-dark`}
    >
      <FiSearch className="h-5 w-5 hidden lg:block" onClick={handleSearch} />
      <input
        type="text"
        name=""
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-none text-[14px]  text-[#fff] bg-inherit  flex-1 focus:border-none focus:outline-none active:border-none "
        id=""
        placeholder={placeholder}
      />
    </div>
  );
};
SearchBar.Proptypes = {
  placeholder: Proptypes.string.isRequired,
};

export default SearchBar;
