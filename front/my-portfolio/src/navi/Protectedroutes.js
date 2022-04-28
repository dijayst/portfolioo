import React from 'react'
import { Navigate, Outlet } from "react-router-dom";



const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};
const Protectedroutes = () => {
     const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/Login" />;
}

export default Protectedroutes
