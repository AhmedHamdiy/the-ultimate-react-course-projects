import { useEffect, useState } from 'react';
import { getMenuCategories } from '../../services/apiRestaurant';
import MenuNavItem from './MenuNavItem';

function MenuNav() {
    const [categories, setCategories] = useState([]);
    useEffect(function () {
        try {
            async function fetchCategory() {
                const fetchedCategories = await getMenuCategories();
                setCategories(fetchedCategories);
            }
            fetchCategory();
        } catch {
            throw new Error('Error in fetching menue categories');
        }
    }, []);
    return (
        <nav>
            <ul className="md:flex sm:grid sm:grid-cols-6  bg-blue-500 md:items-center md:justify-evenly w-3/5 mx-auto my-2 border border-blue-950 rounded-lg">
                {categories.map((category) => (
                    <MenuNavItem category={category} key={category.id} />
                ))}
            </ul>
        </nav>
    );
}

export default MenuNav;
