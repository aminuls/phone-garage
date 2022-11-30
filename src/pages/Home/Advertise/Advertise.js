import React from "react";
import Slider from "../../../components/Slider/Slider";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading/Loading";

const Advertise = () => {
   const { data: advertise, isLoading } = useQuery({
      queryKey: [],
      queryFn: async () => {
         const res = await fetch("http://localhost:5000/advertise");
         const data = await res.json();
         return data;
      },
   });
   if (isLoading) {
      return <Loading></Loading>;
   }
   // console.log(data);
   return (
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-start lg:place-items-center gap-4 lg:gap-16">
         <div className="flex justify-center mx-2">
            <Slider advertise={advertise}></Slider>
         </div>
         <div className="flex flex-col gap-4 justify-center pl-2 sm:mx-4">
            <h2 className="leading-[3.5rem] font-bold" style={{ fontSize: "calc(10px + 6vmin)", lineHeight: "calc(10px + 8vmin)" }}>
               Here are the best deals for you
            </h2>
            <p className="sm:pr-4">I have never heard anything about the resolutions of the apostles, but a good deal about their acts.</p>
         </div>
      </div>
   );
};

export default Advertise;
