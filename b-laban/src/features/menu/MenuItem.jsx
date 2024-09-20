import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import DeleteItem from '../cart/DeleteItem';
import UpdateItem from '../cart/UpdateItem';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getQuantityById } from '../cart/cartSlice';

function MenuItem({ item }) {
    const dispatch = useDispatch();
    const { id, name, unitPrice, availableAmount } = item;
    const soldOut = availableAmount <= 0;
    const currentQuantity = useSelector(getQuantityById(id));
    const isInCart = currentQuantity > 0;

    function handleAddToCart() {
        const newItem = {
            menuItemId: id,
            name,
            quantity: 1,
            unitPrice,
        };
        dispatch(addItem(newItem));
    }

    return (
        <li className="flex items-center justify-between py-2 px-3 w-full">
            <div className="flex relative  ">
                <p className="font-medium">{name}</p>

                <p
                    className={`absolute right-96 text-sm text-center ${soldOut ? 'text-3xl w-32 text-stone-500' : ''}`}
                >
                    {soldOut ? 'تم نفاذ الكمية' : formatCurrency(unitPrice)}
                </p>
            </div>

            <div className="flex items-center gap-3 sm:gap-8 min-w-32">
                {isInCart && (
                    <>
                        <UpdateItem
                            itemId={id}
                            currentQuantity={currentQuantity}
                        />
                        <DeleteItem itemId={id} />
                    </>
                )}

                {!soldOut && !isInCart && (
                    <Button type="small" onClick={handleAddToCart}>
                        إضافة إلى السلة
                    </Button>
                )}
            </div>
        </li>
    );
}

export default MenuItem;
