import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link to="/">
      <img src="/logo.png" alt="B.Laban Logo" width={40} height={40} />
    </Link>
  );
}

export default Logo;
