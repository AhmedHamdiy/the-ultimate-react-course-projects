import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username.jsx";
import Logo from "./Logo";

function Header() {
  return (
    <header className="flex items-center justify-between gap-x-24 border-b border-stone-200 bg-blue-700 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="flex items-center justify-between gap-x-2">
        <Logo />
        <span className="text-white text-xl">من دنيا حلوة</span>
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
