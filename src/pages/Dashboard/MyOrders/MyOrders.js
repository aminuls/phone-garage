import React from "react";

const MyOrders = () => {
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
                     <tr>
                        <td>
                           <div className="flex items-center space-x-3">
                              <div className="avatar">
                                 <div className="mask mask-squircle w-12 h-12">
                                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>Apple iPhone 11 Pro Max, 256GB, Space Gray - Unlocked (Renewed Premium)</td>
                        <td>Purple</td>
                        <td>
                           <button className="btn btn-success btn-xs px-6">Pay</button>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default MyOrders;
