import { formatCurrency } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getQuantityById } from '../cart/cartSlice';

import Button from '../../ui/Button';
/*eslint-disable react/prop-types*/
function MenuItem({ item }) {
    const dispatch = useDispatch();

    function handleAddToCart() {
        const newItem = {
            ...item,
        };
        dispatch(addItem(newItem));
    }
    const isInCart = useSelector(getQuantityById(item.id)) > 0;
    return (
        <li className="flex justify-between items-center py-2 px-4 w-full">
            <h1>{item.name}</h1>
            <h1>{formatCurrency(item.unitPrice)}</h1>
            {!isInCart && (
                <Button
                    type="primary"
                    className="text-white"
                    onClick={handleAddToCart}
                >
                    أضف إلى العربة
                </Button>
            )}
        </li>
    );
}

export default MenuItem;
