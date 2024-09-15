import { useLoaderData } from 'react-router';
import { getCategoryItems } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
function MenuCategory() {
    const menu = useLoaderData();
    return (
        <ul className="h-full w-3/5 mx-auto flex flex-col items-center bg-white divide-y-2">
            {menu.map((item) => (
                <MenuItem item={item} key={item.id} />
            ))}
        </ul>
    );
}

export async function loader({ params }) {
    const menu = await getCategoryItems(params.categoryId);
    return menu;
}

export default MenuCategory;
