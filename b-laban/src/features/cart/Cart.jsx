import { useDispatch, useSelector } from 'react-redux';
import { getCart, clearCart } from './cartSlice';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';
import Button from '../../ui/Button';

function Cart() {
    const cart = useSelector(getCart);
    const dispatch = useDispatch();
    if (!cart.length) return <EmptyCart />;
    return (
        <div className="h-full w-3/5 mx-auto py-6 px-8">
            <h1>السلة تحتوي على:</h1>
            <ul className="flex flex-col items-center bg-white divide-y-2 my-4">
                {cart.map((item) => (
                    <CartItem key={item.menuItemId} item={item} />
                ))}
            </ul>
            <div className="mt-6 w-64 flex items-center justify-between">
                <Button to="/order/new" type="primary">
                    تأكيد الطلب
                </Button>

                <Button type="secondary" onClick={() => dispatch(clearCart())}>
                    أفرغ السلة
                </Button>
            </div>
        </div>
    );
}

export default Cart;
