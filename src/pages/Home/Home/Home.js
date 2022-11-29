import React from "react";
import Advertise from "../Advertise/Advertise";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";

const Home = () => {
   return (
      <div className="max-w-screen-xl mx-auto">
         <Banner></Banner>
         <Advertise></Advertise>
         <Categories></Categories>
         <Featured></Featured>
         <Contact></Contact>
      </div>
   );
};

export default Home;
