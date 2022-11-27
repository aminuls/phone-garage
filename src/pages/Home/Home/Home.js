import React from "react";
import Cards from "../../../components/Cards/Cards";
import Advertise from "../Advertise/Advertise";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Featured from "../Featured/Featured";
// import Featured from "../Featured/Featured";

const Home = () => {
   return (
      <div className="max-w-screen-xl mx-auto">
         <Banner></Banner>
         <Advertise></Advertise>
         <Featured></Featured>
         <Categories></Categories>
      </div>
   );
};

export default Home;
