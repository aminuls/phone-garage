import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useSeller from "../../hooks/useSeller";
import Header from "../../Shared/Header/Header";

const DashboardLayout = ({ isDashboard }) => {
   const { user } = useContext(AuthContext);
   const [isAdmin] = useAdmin(user?.email);
   const [isSeller] = useSeller(user?.email);
   return (
      <div>
         <Header isDashboard={isDashboard}></Header>
         <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
               <Outlet></Outlet>
               {/* <!-- Page content here --> */}
            </div>
            <div className="drawer-side">
               <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
               <ul className="menu py-4 px-6 w-80 text-base-content bg-base-100 lg:bg-transparent">
                  {/* <!-- Sidebar content here --> */}
                  {!isSeller && !isAdmin && (
                     <li className="border-0 border-b-2">
                        <Link to="/dashboard">My Orders</Link>
                     </li>
                  )}
                  {isSeller && (
                     <>
                        <li className="border-0 border-b-2">
                           <Link to="/dashboard">My Products</Link>
                        </li>
                        <li className="border-0 border-b-2">
                           <Link to="/dashboard/addproduct">Add a Product</Link>
                        </li>
                     </>
                  )}
                  {isAdmin && (
                     <>
                        <li className="border-0 border-b-2">
                           <Link to="/dashboard">All Sellers</Link>
                        </li>
                        <li className="border-0 border-b-2">
                           <Link to="/dashboard/allbuyers">All Buyers</Link>
                        </li>
                        <li className="border-0 border-b-2">
                           <Link to="/dashboard/reported">Reported Items</Link>
                        </li>
                     </>
                  )}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default DashboardLayout;
