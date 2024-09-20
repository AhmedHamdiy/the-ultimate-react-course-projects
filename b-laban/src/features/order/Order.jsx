import { useFetcher, useLoaderData } from 'react-router-dom';

import OrderItem from './OrderItem';

import { getOrder } from '../../services/apiRestaurant';
import {
    calcMinutesLeft,
    convertArabic,
    formatCurrency,
    formatDate,
} from '../../utils/helpers';
import { useEffect } from 'react';
import UpdateOrder from './UpdateOrder';

function Order() {
    const order = useLoaderData();
    const fetcher = useFetcher();

    useEffect(
        function () {
            if (!fetcher.data && fetcher.state === 'idle')
                fetcher.load('/menu');
        },
        [fetcher]
    );

    const { id, hasPriority, order_item, deliveryDate } = order;
    const deliveryIn = calcMinutesLeft(deliveryDate);
    const status = deliveryIn > 0 ? 'يتم التحضير' : 'تم الاستلام';
    const orderItems = order_item.map((item) => ({
        id: item.id,
        quantity: item?.quantity,
        itemName: item?.menu_item?.name || 'Unknown item',
        totalPrice: item?.menu_item?.unitPrice * item?.quantity || 0,
    }));
    const orderPrice = orderItems.reduce(
        (acc, item) => acc + item.totalPrice,
        0
    );
    const priorityPrice = hasPriority ? 0.2 * orderPrice : 0;
    return (
        <div className="mt-8 space-y-8 px-4 py-6 w-3/5 mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-xl font-semibold">
                    بيانات الطلب رقم #{convertArabic(id)}
                </h2>

                <div className="flex gap-4 ">
                    {hasPriority && (
                        <p className="rounded-full bg-red-500 px-3 py-2 text-sm font-semibold text-red-50">
                            طلب عاجل
                        </p>
                    )}
                    <p className="rounded-full bg-blue-500 px-3 py-2 text-sm font-semibold text-blue-50">
                        {status}
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap bg-blue-100 px-6 py-5">
                <p className="font-medium">
                    {deliveryIn >= 0
                        ? `متبق ${convertArabic(calcMinutesLeft(deliveryDate))} دقيقة فقط 😃`
                        : 'تم تسليم الطلب'}
                </p>
                <p className="mt-1 text-xs text-stone-500">
                    (الوقت المحدد للوصول:{' '}
                    {convertArabic(formatDate(deliveryDate))})
                </p>
            </div>

            <ul className="dive-stone-200 divide-y border-b border-t">
                {orderItems.map((item) => (
                    <OrderItem item={item} key={item.id} />
                ))}
            </ul>

            <div className="space-y-2 bg-stone-200 px-6 py-5">
                <p className="text-sm font-medium text-stone-600">
                    سعر الطلب: {formatCurrency(orderPrice)}
                </p>
                {hasPriority && (
                    <p className="text-sm font-medium text-stone-600">
                        سعر الطلب العاجل: {formatCurrency(priorityPrice)}
                    </p>
                )}
                <p className="font-bold">
                    المبلغ الإجمالي:{' '}
                    {formatCurrency(orderPrice + priorityPrice)}
                </p>
            </div>

            {!hasPriority && <UpdateOrder order={order} />}
        </div>
    );
}

export async function loader({ params }) {
    const order = await getOrder(params.orderId);
    return order;
}

export default Order;
