import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center">
            <h2 className="text-5xl">Opps!!!</h2>
            <h2 className="text-red-600 text-5xl ">This is 404 page</h2>
            <Link>Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;