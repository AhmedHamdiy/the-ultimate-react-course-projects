import { Link } from 'react-router-dom';

function Button({ children, disabled, type, to, onClick }) {
    const base =
        'inline-block text-sm rounded-full bg-blue-400 font-semibold uppercase text-white hover:bg-blue-300 focus:bg-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-offset-2 disabled:cursor-not-allowed';

    const styles = {
        primary: base + ' px-4 py-3 md:px-6 md:py-4',
        small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
        round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
        left: 'z-50 absolute top-1/2 left-4 -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 focus:outline-none',
        secondary:
            'inline-block text-sm rounded-full border-2 border-white-300 font-semibold uppercase tracking-wide text-white-400 transition-colors duration-300 hover:bg-white-300 hover:text-white-800 focus:bg-white-300 focus:text-white-800 focus:outline-none focus:ring focus:ring-white-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
        right: 'z-50 absolute top-1/2 right-4 -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 focus:outline-none',
    };
    if (to)
        return (
            <Link to={to} className={styles[type]}>
                {children}
            </Link>
        );
    if (onClick)
        return (
            <button
                onClick={onClick}
                disabled={disabled}
                className={styles[type]}
            >
                {children}
            </button>
        );

    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    );
}

export default Button;
