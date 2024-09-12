import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="text-center font-semibold flex items-center justify-center w-full h-full text-huge">
      <h1>ايه جابك هنا يا خلبوص 😉️</h1>
    </div>
  );
}

export default Error;
