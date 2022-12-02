import React from "react";
import Card from "./Card";

const Cards = ({ category: categories }) => {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-2 lg:grid-cols-3 gap-7">
         {categories?.slice(0, 3)?.map((category) => (
            <Card key={category._id} category={category}></Card>
         ))}
      </div>
   );
};

export default Cards;
