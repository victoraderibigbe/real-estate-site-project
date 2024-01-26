import { Link } from "react-router-dom";
import MyButton from "../components/MyButton";

const ErrorPage = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-800">404</h1>
          <p className="mb-8 text-xl text-gray-600">Page not found</p>
          <p className="text-gray-700">
            Oops! The page you are looking for might be under construction or
            does not exist.
          </p>
          <Link to="/">
            <MyButton title={"Go Home"} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
