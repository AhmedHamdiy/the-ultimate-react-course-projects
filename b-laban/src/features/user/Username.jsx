import { useSelector } from 'react-redux';

function Username() {
    const username = useSelector((store) => store.user.username);

    if (!username) return null;

    return (
        <div className="hidden text-md font-semibold md:block md:absolute md:left-4 text-white grow">
            <p className="text-center">{username}</p>
        </div>
    );
}

export default Username;
