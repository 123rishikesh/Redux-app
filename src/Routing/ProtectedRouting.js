import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

const ProtectedRoute = () => {

    
    const data = JSON.parse(localStorage.getItems('Address'));

    return (
        <>
        {true ? <Outlet/> : <Navigate to="/"/>}
        </>
    
    );



}

export default ProtectedRoute;