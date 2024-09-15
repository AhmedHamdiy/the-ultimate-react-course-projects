import { useNavigate, useParams } from 'react-router-dom';
/* eslint-disable react/prop-types */
function MenuNavItem({ category }) {
    const navigate = useNavigate();
    const { categoryId } = useParams();
    return (
        <li
            className={`sm:text-sm
            text-white sm:p-1 md:p-2 md:text-lg hover:text-blue-700 hover:cursor-pointer
            ${categoryId == category.id ? 'bg-blue-700' : ''}    
            `}
            onClick={() => navigate(`/menu/${category.id}`, { replace: true })}
        >
            {category.name}
        </li>
    );
}

export default MenuNavItem;
