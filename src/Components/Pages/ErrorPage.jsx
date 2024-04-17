import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="text-center">
            <h1 className="text-9xl font-bold ">404</h1>
            <p className="text-4xk font-bold">Not found</p>
            <Link to='/' className="btn">Go to Home</Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;