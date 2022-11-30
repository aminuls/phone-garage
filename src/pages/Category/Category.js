import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Loading from "../../Shared/Loading/Loading";

const Category = () => {
   const products = useLoaderData();
   const navigation = useNavigation();
   if (navigation.state === "loading" && navigation.formData == null) {
      return <Loading classes="-mt-32"></Loading>;
   }
   return (
      <div className="max-w-screen-xl mx-auto mt-2 mb-20">
         <div>
            <h2 className="text-4xl text-center mb-6">{`Samsung`} Mobile Phones</h2>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 mx-2 lg:grid-cols-3 gap-5">
            {products.map((product) => {
               return <CategoryCard key={product._id} product={product}></CategoryCard>;
            })}
         </div>
      </div>
   );
};

export default Category;
