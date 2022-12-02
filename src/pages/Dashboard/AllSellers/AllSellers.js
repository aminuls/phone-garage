import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllSellers = () => {
   const { data: seller, refetch } = useQuery({
      queryKey: ["users/seller"],
      queryFn: async () => {
         const res = await fetch("https://phone-garage-server-smoky.vercel.app/users/seller");
         const data = res.json();
         return data;
      },
   });
   const handleDelete = (id) => {
      const confirmation = window.confirm("Are you sure to Delete it?");
      if (confirmation) {
         fetch(`https://phone-garage-server-smoky.vercel.app/users/singleSeller/${id}`, {
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

   return (
      <div>
         <h2 className="text-4xl text-red-500 mb-4">All Sellers</h2>
         <div className="mr-3">
            <div className="overflow-x-auto w-full">
               <table className="table w-full">
                  <thead>
                     <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Verify</th>
                        <th>Delete</th>
                     </tr>
                  </thead>
                  <tbody>
                     {seller?.map((singleSeller) => {
                        return (
                           <tr key={singleSeller._id}>
                              <td>{singleSeller?.name}</td>
                              <td>{singleSeller?.email}</td>
                              <td>
                                 <button className={`btn btn-xs px-4`}>Verify</button>
                              </td>
                              <td>
                                 <button className="btn btn-error btn-xs px-2" onClick={() => handleDelete(singleSeller._id)}>
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

export default AllSellers;
