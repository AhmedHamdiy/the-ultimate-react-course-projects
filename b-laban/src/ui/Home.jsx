import { useEffect } from 'react';
import { getOrder } from '../services/apiRestaurant';
function Home() {
    useEffect(function () {
        getOrder(1).then((order) => {
            console.log(order);
        });
    }, []);
    return <div>Home</div>;
}

export default Home;
