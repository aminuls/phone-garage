import { useQuery } from "@tanstack/react-query";
import Cards from "../../../components/Cards/Cards";
import Loading from "../../../Shared/Loading/Loading";

const Categories = () => {
   const {
      data: categories,
      isLoading,
   } = useQuery({
      queryKey: ["category"],
      queryFn: async () => {
         const res = await fetch("http://localhost:5000/category");
         const data = await res.json();
         return data;
      },
   });
   if (isLoading) {
      return <Loading></Loading>;
   }
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
