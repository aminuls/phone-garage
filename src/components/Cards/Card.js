import React from "react";

const Card = () => {
   return (
      <div className="card w-full shadow-xl relative rounded-lg">
         <figure>
            <img src="https://placeimg.com/400/225/arch" alt="phones" className="w-full rounded-lg h-64 object-cover" />
         </figure>
         <div className="card-body absolute flex top-1/2 -translate-y-1/2 w-full h-full rounded-lg" style={{ background: "rgba(0, 0, 0, 0.3)" }}>
            <div className="flex flex-col justify-center gap-2 h-full">
               <h2 className="card-title justify-center text-4xl text-white">iPhone</h2>
               <div className="card-actions justify-center">
                  <button className="btn btn-outline border-2 text-lg btn-warning">View all</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Card;
