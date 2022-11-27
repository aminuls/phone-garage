import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home";
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
      ],
   },
]);