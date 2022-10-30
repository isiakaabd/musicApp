import { ReactComponent as Search } from "./../assets/images/search.svg";
const SearchBar = () => {
  return (
    <div className="flex items-center gap-4 p-2 bg-dark">
      <Search className="h-4 w-4 leading-6" />
      <input
        type="text"
        nvame=""
        className="border-none  leading-6 text-[14px]  text-[#fff]  bg-dark focus:border-none focus:outline-none active:border-none "
        id=""
        placeholder="search here"
      />
    </div>
  );
};

export default SearchBar;
