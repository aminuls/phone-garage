import React from "react";
import mobile from "../../../assets/images/banner.jpg";

const Banner = () => {
   return (
      <div className="mt-6 mx-2">
         <div className="hero pb-14">
            <div className="hero-content flex-col lg:flex-row-reverse w-full p-0 lg:p-4 lg:gap-14">
               <img src={mobile} className="lg:w-1/2 rounded-lg shadow-2xl -skew-x-3 lg:-skew-x-6 transform lg:-translate-x-5 hover:-skew-x-0 transition-transform" alt="images" />
               <div className="sm:px-4 lg:px-0 mt-0">
                  <h1 className="font-bold" style={{ fontSize: "calc(10px + 6vmin)", lineHeight: "calc(10px + 8vmin)" }}>
                     Buy Your Desirable Smart Phone
                  </h1>
                  <p className="py-2 lg:py-6">The mobile device has become our communications hub, our diary, our entertainment portal, our wallet and our gateway to real-time information tailored to our needs. The revolution is now!</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
