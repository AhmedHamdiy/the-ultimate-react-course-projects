import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
    const username = useSelector((state) => state.user.username);

    return (
        <div className="my-10 px-4 text-center sm:my-16">
            <h1 className="mb-8  text-xl font-semibold md:text-3xl flex gap-y-0 justify-center flex-col">
                <span>من دنيا حلوة</span>
                <br />
                <span className="text-blue-500">
                    أقوى حلو في الوطن العربي كله
                </span>
            </h1>

            {username === '' ? (
                <CreateUser />
            ) : (
                <Button to="/menu" type="primary">
                    أكمل الطلب يا {username}
                </Button>
            )}
        </div>
    );
}

export default Home;
