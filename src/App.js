import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// import { router } from "./Routes/routes/routes";
import "react-multi-carousel/lib/styles.css";
import { Toaster } from "react-hot-toast";
import ReportedItems from "./pages/Dashboard/ReportedItems/ReportedItems";
import AdminRoute from "./Routes/AdminRoute/AdminRoute";
import AllBuyers from "./pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "./pages/Dashboard/AllSellers/AllSellers";
import AddProduct from "./pages/Dashboard/AddProduct/AddProduct";
import SellerRoute from "./Routes/SellerRoute/SellerRoute";
import MyProduct from "./pages/Dashboard/MyProduct/MyProduct";
import MyOrders from "./pages/Dashboard/MyOrders/MyOrders";
import Error from "./pages/Error/Error";
import DashboardLayout from "./Layouts/DashboardLayout/DashboardLayout";
import PrivetRoute from "./Routes/PrivetRoute/PrivetRoute";
import Signup from "./Shared/Signup/Signup";
import Login from "./Shared/Login/Login";
import Category from "./pages/Category/Category";
import Home from "./pages/Home/Home/Home";
import Main from "./Layouts/Main/Main";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider/AuthProvider";
import useAdmin from "./hooks/useAdmin";
import useSeller from "./hooks/useSeller";
import Loading from "./Shared/Loading/Loading";
import Blog from "./pages/Blog/Blog";

function App() {
   const { user } = useContext(AuthContext);
   const [isAdmin, isAdminLoading] = useAdmin(user?.email);
   const [isSeller, isSellerLoading] = useSeller(user?.email);
   if(user?.uid){
      if (isAdminLoading || isSellerLoading) {
         return <Loading></Loading>;
      }
   }
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Main></Main>,
         errorElement: <Error></Error>,
         children: [
            {
               path: "/",
               element: <Home></Home>,
            },
            {
               path: "/blog",
               element: <Blog></Blog>,
            },
            {
               path: "/category/:name",
               element: (
                  <PrivetRoute>
                     <Category></Category>
                  </PrivetRoute>
               ),
               loader: async ({ params }) => {
                  return fetch(`http://localhost:5000/category/${params.name}`);
               },
            },
            {
               path: "/login",
               element: <Login></Login>,
            },
            {
               path: "/signup",
               element: <Signup></Signup>,
            },
         ],
      },
      {
         path: "/dashboard",
         element: (
            <PrivetRoute>
               <DashboardLayout isDashboard={true}></DashboardLayout>
            </PrivetRoute>
         ),
         errorElement: <Error></Error>,
         children: [
            !isSeller &&
               !isAdmin && {
                  path: "/dashboard",
                  element: <MyOrders></MyOrders>,
               },
            isSeller && {
               path: "/dashboard",
               element: (
                  <SellerRoute>
                     <MyProduct></MyProduct>
                  </SellerRoute>
               ),
            },
            {
               path: "/dashboard/addproduct",
               element: (
                  <SellerRoute>
                     <AddProduct></AddProduct>
                  </SellerRoute>
               ),
            },
            isAdmin && {
               path: "/dashboard",
               element: (
                  <AdminRoute>
                     <AllSellers></AllSellers>
                  </AdminRoute>
               ),
            },
            {
               path: "/dashboard/allbuyers",
               element: (
                  <AdminRoute>
                     <AllBuyers></AllBuyers>
                  </AdminRoute>
               ),
            },
            {
               path: "/dashboard/reported",
               element: (
                  <AdminRoute>
                     <ReportedItems></ReportedItems>
                  </AdminRoute>
               ),
            },
         ],
      },
   ]);
   return (
      <div className="App font-semibold">
         <RouterProvider router={router}></RouterProvider>
         <Toaster />
      </div>
   );
}

export default App;
