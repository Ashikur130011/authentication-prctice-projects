import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
        </>
    }
    if(user){
        return children;
    }
    return <Navigate to ="/login"></Navigate>

    
};
export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}

