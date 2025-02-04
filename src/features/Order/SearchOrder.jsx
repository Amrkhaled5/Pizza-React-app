import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchOrder() {
  const [searchValue, setSearchValue] = useState("");
  const nav = useNavigate();
  function handleSearch(e) {
    e.preventDefault();
    nav(`/order/${searchValue}`);
    setSearchValue("");
  }
  return (
    <form onSubmit={handleSearch}>
      <input
        placeholder="Search Order #"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400
         focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:foucus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
