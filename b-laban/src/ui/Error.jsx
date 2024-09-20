import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="mt-24 flex flex-col items-center space-y-10 w-full h-full">
            <h1 className="font-semibold text-6xl">Something went wrong 😢</h1>
            <p className="text-2xl">{error.data || error.message}</p>
            <LinkButton to="-1">Go back &larr; </LinkButton>
        </div>
    );
}

export default Error;
