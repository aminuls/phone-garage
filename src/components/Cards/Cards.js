import React from "react";
import Card from "./Card";

const Cards = () => {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-2 lg:grid-cols-3 gap-7">
         <Card></Card>
         <Card></Card>
         <Card></Card>
      </div>
   );
};

export default Cards;
