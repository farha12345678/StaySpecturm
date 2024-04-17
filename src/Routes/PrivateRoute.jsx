import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {  Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {
    const {user , loader} = useContext(AuthContext)
    const location = useLocation()

    if(loader){
        return <div className="text-center"><span className="loading loading-bars loading-lg"></span></div>
    }

    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;