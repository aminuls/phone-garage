import React, { useState } from "react";

const CategoryCard = ({ product }) => {
   
   // const date = new Date(); 
   /* <h2>Posted: {format(date, "PP")}</h2> */
   // database e store korar somoy use korte hobe 
   
   
   const [wishlisted, setWishlisted] = useState(false);
   const [reported, setReported] = useState(false);

   return (
      <>
         <div className="card w-full glass">
            <div className="flex w-full justify-end px-3 pt-3 pb-2 gap-3">
               <button className="cursor-pointer text-error" onClick={() => setReported(!reported)}>
                  {reported ? (
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                        <path
                           fillRule="evenodd"
                           d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                           clipRule="evenodd"
                        />
                     </svg>
                  ) : (
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                     </svg>
                  )}
               </button>
               <button className="cursor-pointer text-success" onClick={() => setWishlisted(!wishlisted)}>
                  {wishlisted ? (
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                     </svg>
                  ) : (
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                     </svg>
                  )}
               </button>
            </div>
            <div className="card-body grid grid-cols-12 w-full px-2 pt-0 pb-5">
               <div className="font-bold col-span-7">
                  <h2 className="flex items-center">
                     {product?.seller_name} {/* badge conditional hobe */}
                     <span className="text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                           <path
                              fillRule="evenodd"
                              d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                              clipRule="evenodd"
                           />
                        </svg>
                     </span>
                  </h2>

                  <h2>Posted: {product?.post_date}</h2>
               </div>
               <div className="flex flex-col col-span-5 justify-center items-start">
                  <p>{product?.location}</p>
                  <p>{product?.years_of_use}</p>
               </div>
               <div className="card-title w-full col-span-12">
                  <h2>{product?.title}</h2>
               </div>
            </div>
            <figure>
               <img src={product?.image} alt="phones" className="w-full rounded-lg mx-2 h-64 object-cover" />
            </figure>
            <div className="card-body grid grid-cols-12 w-full px-2 py-5">
               <div className="text-lg col-span-7">
                  <h2>
                     Original Price: <span className="line-through">${product?.original_price}</span>
                  </h2>
                  <h2>
                     Resale Price: <span className="font-bold">${product?.resale_price}</span>
                  </h2>
               </div>
               <div className="flex col-span-5 items-center">
                  <button className="btn btn-error w-full flex gap-1 px-2">
                     <span className="pl-4">Purchase</span>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 sm:hidden md:block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};

export default CategoryCard;
