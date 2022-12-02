import React, { useEffect, useState } from "react";
import axios from "axios";

const MyOrders = () => {
   const [products, setProducts] = useState(null);
   useEffect(() => {
      const fetchFunc = async () => {
         const res = await axios.get("https://phone-garage-server-smoky.vercel.app/users/orders");
         setProducts(res.data);
      };
      fetchFunc();
   }, []);
   console.log(products);
   return (
      <div>
         <h2 className="text-4xl text-red-500 mb-4">My Orders</h2>
         <div className="mr-3">
            <div className="overflow-x-auto w-full">
               <table className="table w-full">
                  <thead>
                     <tr>
                        <th>Product</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Purchase</th>
                     </tr>
                  </thead>
                  <tbody>
                     {products?.map((product) => {
                        return (
                           <tr>
                              <td>
                                 <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                       <div className="mask mask-squircle w-12 h-12">
                                          <img src={product?.image} alt="Avatar Tailwind CSS Component" />
                                       </div>
                                    </div>
                                 </div>
                              </td>
                              <td>{product?.title}</td>
                              <td>${product?.price}</td>
                              <td>
                                 <button className="btn btn-success btn-xs px-6">Pay</button>
                              </td>
                           </tr>
                        );
                     })}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default MyOrders;
