import { Link } from "react-router-dom";
export const NotFound: React.FC = () => {
    return (
        <div className="shadow-md p-6 w-75p mx-auto mt-6 bg-primary-light br-4">
            <h1 className="heading-xl text-center mt-6 clr-white">
                404 Not Found
            </h1>
            <Link
                to="/"
                replace
                className="btn btn--lg btn--secondary btn--link mt-6 mx-auto d-block w-fit br-2">
                Back To Home Page
            </Link>
        </div>
    );
};
