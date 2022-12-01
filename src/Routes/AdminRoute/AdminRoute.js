import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../../Shared/Loading/Loading";

const AdminRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   const [isAdmin, isAdminLoading] = useAdmin(user?.email);
   const location = useLocation();

   if (loading || isAdminLoading) {
      return <Loading classes="lg:-ml-72 -mt-32"></Loading>;
   }

   if (isAdmin) {
      return children;
   }
   return <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
