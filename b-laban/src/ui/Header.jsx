import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username.jsx';
import Logo from './Logo';

function Header() {
    return (
        <header className="flex relative items-center gap-x-48 border-b border-stone-200 bg-blue-500 px-4 py-2 uppercase sm:px-6">
            <div className="flex items-center justify-between gap-x-4">
                <Logo />
                <span className="text-white text-3xl font-Rakkas">
                    من دنيا حلوة
                </span>
            </div>

            <SearchOrder />
            <Username />
        </header>
    );
}

export default Header;
