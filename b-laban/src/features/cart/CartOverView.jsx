import { useSelector } from 'react-redux';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { convertArabic, formatCurrency } from '../../utils/helpers';
import { Link } from 'react-router-dom';

function CartOverView() {
    const totalCost = useSelector(getTotalCartPrice);
    const totalQuantity = useSelector(getTotalCartQuantity);
    if (!totalQuantity) return null;
    return (
        <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
            <p className="font-semibold text-stone-300">
                <span className="px-4 sm:px-6">
                    {convertArabic(totalQuantity)} منتج
                </span>
                <span className="px-4 sm:px-6">
                    {formatCurrency(totalCost)}
                </span>
            </p>
            <Link to="/cart">اذهب إلى السلة &larr;</Link>
        </div>
    );
}

export default CartOverView;
