import React, { useEffect, useState } from "react";
import Cards from "../../../components/Cards/Cards";

const Categories = () => {
   const [categories, setCategories] = useState([]);
   useEffect(() => {
      fetch("http://localhost:5000/category")
         .then((res) => res.json())
         .then((result) => setCategories(result));
   }, []);
   return (
      <div className="mt-20">
         <div>
            <h2 className="text-4xl text-center mb-6">Categories</h2>
         </div>
         <Cards category={categories}></Cards>
      </div>
   );
};

export default Categories;
