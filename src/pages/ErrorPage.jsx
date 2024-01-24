import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Ooooooops! Page Not Found!</h1>
      <Link to="/" className="underline">
        Go back home
      </Link>
    </div>
  );
};

export default ErrorPage;
