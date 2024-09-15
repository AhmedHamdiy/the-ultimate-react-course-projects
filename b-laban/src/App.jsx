import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import Home from './ui/Home';
import MenuCategory, {
    loader as menuLoader,
} from './features/menu/MenuCategory';
import MenuSlider, { loader as sliderLoader } from './features/menu/MenuSlider';
import MenuNav from './features/menu/MenuNav';
import Cart from './features/cart/Cart';
import CreateOrder, {
    action as createOrderAction,
} from './features/order/CreateOrder';
import Order, {
    loader as orderLoader,
    action as updateOrderAction,
} from './features/order/Order';
const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/menu',
                element: (
                    <>
                        <MenuNav />
                        <MenuSlider />
                    </>
                ),
                loader: sliderLoader,
                errorElement: <Error />,
            },
            {
                path: '/menu/:categoryId',
                element: (
                    <>
                        <MenuNav />
                        <MenuCategory />,
                    </>
                ),
                loader: menuLoader,
                errorElement: <Error />,
            },
            { path: '/cart', element: <Cart /> },
            {
                path: '/order/new',
                element: <CreateOrder />,
                action: createOrderAction,
            },
            {
                path: '/order/:orderId',
                element: <Order />,
                loader: orderLoader,
                errorElement: <Error />,
                action: updateOrderAction,
            },
        ],
    },
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
