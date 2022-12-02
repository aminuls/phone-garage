import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const AddProduct = () => {
   const { user } = useContext(AuthContext);
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();
   const handleAddProduct = (data) => {
      const myImage = data.image[0];
      const formData = new FormData();
      formData.append("image", myImage);
      const url = process.env.REACT_APP_imgbb;
      const date = new Date();
      const years = date.getFullYear() - data.year;
      const dateInMili = new Date().getTime();

      fetch(url, {
         method: "POST",
         body: formData,
      })
         .then((res) => res.json())
         .then((imgData) => {
            if (imgData.success) {
               const addingProduct = {
                  seller_name: data.sellerName,
                  seller_email: data.sellerEmail,
                  category: data.category,
                  location: data.location,
                  title: data.title,
                  image: imgData.data.url,
                  original_price: data.originalPrice,
                  resale_price: data.resalePrice,
                  post_date: format(date, "PP"),
                  mobile: data.mobile,
                  years_of_use: `${years} ${years > 1 ? "years" : "year"}`,
                  dateInMili: dateInMili,
                  report: false,
                  advertise: false,
                  available: true,
               };
               console.log(addingProduct);
               fetch("http://localhost:5000/users/seller/addproduct", {
                  method: "POST",
                  headers: {
                     "content-type": "application/json",
                  },
                  body: JSON.stringify(addingProduct),
               })
                  .then((res) => res.json())
                  .then((data) => {
                     if (data.acknowledged) {
                        toast.success("Booked Successfully");
                        reset();
                     }
                  });
            }
         });
   };
   return (
      <div className="px-2">
         <h2 className="text-5xl text-red-500">Add Product</h2>
         <div className="pb-7 pt-2 md:w-96">
            <form onSubmit={handleSubmit(handleAddProduct)}>
               <div className="form-control w-full">
                  <label htmlFor="" className="label">
                     <span className="label-text">Product Title</span>
                  </label>
                  <input type="text" {...register("title", { required: "Product title is Required" })} className="input input-bordered w-full" placeholder="Product title" />
                  {errors.title && (
                     <p role="alert" className="text-error pt-1 pl-1">
                        {errors.title?.message}
                     </p>
                  )}
               </div>
               <div className="form-control w-full">
                  <label htmlFor="" className="label">
                     <span className="label-text">Original Price</span>
                  </label>
                  <input type="number" {...register("originalPrice", { required: "Original price is Required" })} className="input input-bordered w-full" placeholder="Price in USD" />
                  {errors.originalPrice && (
                     <p role="alert" className="text-error pt-1 pl-1">
                        {errors.originalPrice?.message}
                     </p>
                  )}
               </div>
               <div className="form-control w-full">
                  <label htmlFor="" className="label">
                     <span className="label-text">Resale Price</span>
                  </label>
                  <input type="number" {...register("resalePrice", { required: "Resale price is Required" })} className="input input-bordered w-full" placeholder="Price in USD" />
                  {errors.resalePrice && (
                     <p role="alert" className="text-error pt-1 pl-1">
                        {errors.resalePrice?.message}
                     </p>
                  )}
               </div>
               <div className="form-control w-full">
                  <label htmlFor="" className="label">
                     <span className="label-text">Category</span>
                  </label>
                  <input type="text" {...register("category", { required: "Category is Required" })} className="input input-bordered w-full" placeholder="Category" />
                  {errors.category && (
                     <p role="alert" className="text-error pt-1 pl-1">
                        {errors.category?.message}
                     </p>
                  )}
               </div>
               {/* For image */}
               <div className="form-control w-full">
                  <label htmlFor="" className="label">
                     <span className="label-text">Image</span>
                  </label>
                  <input type="file" accept="image/*" {...register("image", { required: "Image is Required" })} className="file-input input-bordered w-full" />
                  {errors.image && (
                     <p role="alert" className="text-error pt-1 pl-1">
                        {errors.image?.message}
                     </p>
                  )}
               </div>
               <div className="form-control w-full">
                  <label htmlFor="" className="label">
                     <span className="label-text">Seller Name</span>
                  </label>
                  <input type="text" {...register("sellerName", { required: "Seller name is Required" })} className="input input-bordered w-full bg-slate-300" placeholder="Seller name" defaultValue={user?.displayName} readOnly />
                  {errors.sellerName && (
                     <p role="alert" className="text-error pt-1 pl-1">
                        {errors.sellerName?.message}
                     </p>
                  )}
               </div>
               <div className="form-control w-full">
                  <label htmlFor="" className="label">
                     <span className="label-text">Seller Email</span>
                  </label>
                  <input type="text" {...register("sellerEmail", { required: "Seller email is Required" })} className="input input-bordered w-full bg-slate-300" placeholder="Seller email" defaultValue={user?.email} readOnly />
                  {errors.sellerEmail && (
                     <p role="alert" className="text-error pt-1 pl-1">
                        {errors.sellerEmail?.message}
                     </p>
                  )}
               </div>
               <div className="form-control w-full">
                  <label htmlFor="" className="label">
                     <span className="label-text">Phone Number</span>
                  </label>
                  <input type="tel" pattern="[0-9]{11}" {...register("mobile", { required: "Mobile number is Required" })} className="input input-bordered w-full" placeholder="Phone number" />
                  {errors.mobile && (
                     <p role="alert" className="text-error pt-1 pl-1">
                        {errors.mobile?.message}
                     </p>
                  )}
               </div>
               <div className="form-control w-full">
                  <label htmlFor="" className="label">
                     <span className="label-text">Location</span>
                  </label>
                  <input type="text" {...register("location", { required: "Location is Required" })} className="input input-bordered w-full" placeholder="Location" />
                  {errors.location && (
                     <p role="alert" className="text-error pt-1 pl-1">
                        {errors.location?.message}
                     </p>
                  )}
               </div>
               <div className="form-control w-full">
                  <label htmlFor="" className="label">
                     <span className="label-text">Year of purchase</span>
                  </label>
                  <input type="text" {...register("year", { required: "Year of purchase is Required" })} className="input input-bordered w-full" placeholder="Location" />
                  {errors.year && (
                     <p role="alert" className="text-error pt-1 pl-1">
                        {errors.year?.message}
                     </p>
                  )}
               </div>

               <input className="btn btn-accent w-full mt-4" value="Add a Product" type="submit" />
            </form>
         </div>
      </div>
   );
};

export default AddProduct;
