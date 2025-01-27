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
      />
    </form>
  );
}

export default SearchOrder;
