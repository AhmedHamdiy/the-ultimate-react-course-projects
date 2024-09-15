import { Link } from 'react-router-dom';
function Logo() {
    return (
        <Link to="/">
            <img src="/logo.png" alt="B.Laban Logo" width={60} height={60} />
        </Link>
    );
}

export default Logo;
