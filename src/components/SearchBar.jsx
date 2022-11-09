import { ReactComponent as Search } from "../../public/search.svg";
import Proptypes from "prop-types";
const SearchBar = ({ placeholder }) => {
  return (
    <div className="flex w-full items-center gap-4  max-w-[400px] p-2 bg-dark">
      <Search className="h-4 w-4 leading-6" />
      <input
        type="text"
        name=""
        className="border-none  leading-6 text-[14px]  text-[#fff] bg-inherit  flex-1 focus:border-none focus:outline-none active:border-none "
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
