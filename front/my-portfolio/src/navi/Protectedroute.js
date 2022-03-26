import React from 'react'
import {
  Navigate,
  Outlet,
} from 'react-router-dom';


const Protectedroute = ({ isAllowed, children, redirectPath = '/Signup', }) => {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />;
      }
    return (
        <div>
            children ? children : <Outlet />;
            
        </div>
    )
}

export default Protectedroute
