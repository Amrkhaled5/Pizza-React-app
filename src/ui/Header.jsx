import { Link } from "react-router-dom";
import SearchOrder from "../features/Order/SearchOrder";
import Username from "../features/User/Username";
function Header() {
  return (
    <header className="bg-yellow-400 uppercase px-4 py-3 border-b border-yellow-600 sm:px-6 flex items-center justify-between ">
      <Link to="/" className="tracking-[5px]">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
