import React from "react";
import Advertise from "./Advertise/Advertise";
import Banner from "./Banner/Banner";

const Home = () => {
   return (
      <div className="max-w-screen-xl mx-auto">
         <Banner></Banner>
         <Advertise></Advertise>
      </div>
   );
};

export default Home;
