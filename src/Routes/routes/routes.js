import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Category from "../../pages/Category/Category";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home/Home";
export const router = createBrowserRouter([
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
            path: "/category/:name",
            element: <Category></Category>,
            loader: async ({ params }) => {
               return fetch(`http://localhost:5000/category/${params.name}`);
            },
         },
      ],
   },
]);
