import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllBuyers = () => {
   const { data: buyers, refetch } = useQuery({
      queryKey: ["users/buyers"],
      queryFn: async () => {
         const res = await fetch("http://localhost:5000/users/buyers");
         const data = res.json();
         return data;
      },
   });
   const handleDelete = (id) => {
      const confirmation = window.confirm("Are you sure to Delete it?");
      if (confirmation) {
         fetch(`http://localhost:5000/users/buyer/${id}`, {
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
         <h2 className="text-4xl text-red-500 mb-4">All Buyers</h2>
         <div className="mr-3">
            <div className="overflow-x-auto w-full">
               <table className="table w-full">
                  <thead>
                     <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                     </tr>
                  </thead>
                  <tbody>
                     {buyers?.map((buyer) => {
                        return (
                           <tr key={buyer._id}>
                              <td>{buyer?.name}</td>
                              <td>{buyer?.email}</td>
                              <td>
                                 <button className="btn btn-error btn-xs px-2" onClick={() => handleDelete(buyer._id)}>
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

export default AllBuyers;
