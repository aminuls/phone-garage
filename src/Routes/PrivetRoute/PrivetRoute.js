import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const PrivetRoute = ({ children, classes }) => {
   const location = useLocation();
   const { user, loading } = useContext(AuthContext);
   if (loading) {
      return (
         <div className="min-h-screen grid grid-cols-1 place-items-center">
            <div className={`${classes ? classes + " " : ""}w-20 h-20 fixed rounded-full border-8 border-dashed border-amber-500 animate-spin`}></div>
         </div>
      );
   }
   if (user?.uid) {
      return children;
   }
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;
