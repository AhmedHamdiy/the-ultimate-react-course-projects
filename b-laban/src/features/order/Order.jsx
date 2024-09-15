import { useLoaderData } from 'react-router';
import { getOrder } from '../../services/apiRestaurant';
import { useFetcher } from 'react-router-dom';

function Order() {
    const order = useLoaderData();
    const fetcher = useFetcher();
    return <fetcher.Form>{order.id}</fetcher.Form>;
}
export async function loader({ params }) {
    const order = await getOrder(params.orderId);
    return order;
}
export async function action({ request }) {
    return request;
}
export default Order;
