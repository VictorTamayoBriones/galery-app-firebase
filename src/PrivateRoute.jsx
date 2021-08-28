import React from 'react'
import { useAuth } from './context/authContext';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...restToProps }) => {
    
    const { user } = useAuth();

    if( user ){
        return <Route {...restToProps} >{children}</Route>
    }else{
        return <Redirect to="/login" />
    }

}
 
export default PrivateRoute;