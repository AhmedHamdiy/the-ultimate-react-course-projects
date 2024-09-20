import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (!query) return;
        navigate(`/order/${query}`);
        setQuery('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="ابحث عن اوردر"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-32 rounded-full bg-blue-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-cyan-900 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:w-72 sm:focus:w-80"
            />
        </form>
    );
}

export default SearchOrder;
