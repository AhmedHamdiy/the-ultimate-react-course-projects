import { Outlet, useNavigation } from 'react-router';
import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import CartOverView from '../features/cart/CartOverView';

function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-blue-50">
            {isLoading && <Loader />}
            <Header />
            <Main>
                <Outlet />
            </Main>
            <CartOverView />
        </div>
    );
}

export default AppLayout;
