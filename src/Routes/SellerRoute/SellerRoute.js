import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useSeller from "../../hooks/useSeller";
import Loading from "../../Shared/Loading/Loading";

const SellerRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   const [isSeller, isSellerLoading] = useSeller(user?.email);
   const location = useLocation();
   console.log("from seller route",isSeller);

   if (loading || isSellerLoading) {
      return <Loading classes="lg:-ml-72 -mt-32"></Loading>;
   }

   if (isSeller) {
      return children;
   }
   return <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
