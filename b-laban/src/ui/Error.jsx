import { useRouteError } from 'react-router-dom';

function Error() {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="mt-24">
            <h1 className="text-center font-semibold flex items-center justify-center w-full h-full text-6xl">
                Something went wrong 😢
            </h1>
        </div>
    );
}

export default Error;
