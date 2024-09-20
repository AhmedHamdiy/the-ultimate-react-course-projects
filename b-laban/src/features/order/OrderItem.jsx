import { convertArabic, formatCurrency } from '../../utils/helpers';
/* eslint-disable react/prop-types */
function OrderItem({ item }) {
    const { quantity, itemName, totalPrice } = item;
    return (
        <li className="space-y-1 py-3 px-4">
            <div className="flex items-center justify-between gap-4 text-md">
                <p>
                    <span className="font-bold">
                        {convertArabic(quantity?.toString())}&times;
                    </span>{' '}
                    {itemName}
                </p>
                <p className="font-bold">{formatCurrency(totalPrice)}</p>
            </div>
        </li>
    );
}

export default OrderItem;
