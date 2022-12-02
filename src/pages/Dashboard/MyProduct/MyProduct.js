import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading/Loading";

const MyProduct = () => {
   const { user } = useContext(AuthContext);
   const email = {
      email: user?.email,
   };
   const {
      data: products,
      isLoading,
      refetch,
   } = useQuery({
      queryKey: ["users/seller"],
      queryFn: async () => {
         const res = await fetch("https://phone-garage-server-smoky.vercel.app/users/seller", {
            method: "POST",
            headers: {
               "content-type": "application/json",
            },
            body: JSON.stringify(email),
         });
         const data = res.json();
         return data;
      },
   });
   const handleDelete = (id) => {
      const confirmation = window.confirm("Are you sure to Delete it?");
      if (confirmation) {
         fetch(`https://phone-garage-server-smoky.vercel.app/users/seller/${id}`, {
            method: "DELETE",
         })
            .then((res) => res.json())
            .then((data) => {
               if (data.deletedCount > 0) {
                  toast.success("Delete Successful");
                  refetch();
               }
            });
      }
   };

   if (isLoading) {
      return <Loading></Loading>;
   }
   return (
      <div>
         <h2 className="text-4xl text-red-500 mb-4">My Products</h2>
         <div className="mr-3">
            <div className="overflow-x-auto w-full">
               <table className="table w-full">
                  <thead>
                     <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Advertise</th>
                        <th>Delete</th>
                     </tr>
                  </thead>
                  <tbody>
                     {products?.map((product) => {
                        const handleAdvertise = (id) => {
                           fetch(`https://phone-garage-server-smoky.vercel.app/users/seller/ad/${id}`, {
                              method: "PUT",
                           })
                              .then((res) => res.json())
                              .then((data) => {
                                 if (data.modifiedCount > 0) {
                                    if (product.advertise) {
                                       toast.success("Ad Campaign stopped");
                                    } else {
                                       toast.success("Ad Campaign running");
                                    }
                                    refetch();
                                 }
                              });
                        };
                        return (
                           <tr key={product._id}>
                              <td>{product?.title}</td>
                              <td>${product?.resale_price}</td>
                              <td>
                                 {product.available ? (
                                    <div className="text-xs bg-slate-500 py-1 text-center rounded-md text-white uppercase px-2" disabled>
                                       Available
                                    </div>
                                 ) : (
                                    <div className="text-xs bg-slate-500 py-1 text-center rounded-md text-white uppercase px-2" disabled>
                                       Sold
                                    </div>
                                 )}
                              </td>
                              <td>
                                 <button onClick={() => handleAdvertise(product._id)} className={`btn ${product.available ? "btn-success" : "btn-disabled"} btn-xs px-4`}>
                                    {product.advertise ? "stop" : "start"}
                                 </button>
                              </td>
                              <td>
                                 <button className="btn btn-error btn-xs px-2" onClick={() => handleDelete(product._id)}>
                                    Delete
                                 </button>
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

export default MyProduct;
