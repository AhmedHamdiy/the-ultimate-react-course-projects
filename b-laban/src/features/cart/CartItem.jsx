import { useSelector } from 'react-redux';
import { convertArabic, formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItem from './UpdateItem';
import { getQuantityById } from './cartSlice';

function CartItem({ item }) {
    const { menuItemId, name, quantity, unitPrice } = item;

    const currentQuantity = useSelector(getQuantityById(menuItemId));
    return (
        <li className="py-3 sm:flex sm:items-center sm:justify-between w-full px-2">
            <p className="mb-1 sm:mb-0">
                {convertArabic(quantity) + ' '} &times; {' ' + name}
            </p>
            <div className="flex items-center justify-between sm:gap-6 px-4">
                <p className="text-sm font-bold">
                    {formatCurrency(quantity * unitPrice)}
                </p>

                <UpdateItem
                    itemId={menuItemId}
                    currentQuantity={currentQuantity}
                />
                <DeleteItem itemId={menuItemId} />
            </div>
        </li>
    );
}

export default CartItem;
