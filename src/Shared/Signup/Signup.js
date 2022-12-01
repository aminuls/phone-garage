import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";

const Signup = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const [signUpError, setSignUpError] = useState(null);
   const [createdUserEmail, setCreatedUserEmail] = useState(null);
   const [token] = useToken(createdUserEmail);
   const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
   const navigate = useNavigate();
   if (token) {
      navigate("/");
   }
   const handleSignUp = (data) => {
      // setSignUpError look it carefully
      // console.log(data.select);
      setSignUpError(null);
      createUser(data.email, data.password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            const userInfo = {
               displayName: data.name,
            };
            updateUser(userInfo)
               .then(() => {
                  saveUser(data.name, data.email, data.select);
               })
               .catch((error) => console.error(error));
            toast.success("User Created Successfully");
         })
         .catch((error) => {
            setSignUpError(error.message);
            console.error(error.message);
         });
   };
   const handleGoogle = () => {
      googleSignIn()
         .then((result) => {
            // console.log(result.user);
            const data = result.user;
            saveUser(data.displayName, data.email);
            toast.success("User Created Successfully");
         })
         .catch((error) => {
            setSignUpError(error.message);
            console.error(error.message);
         });
   };
   const saveUser = (name, email, role="Buyer") => {
      const user = { name, email, role };
      fetch("http://localhost:5000/users", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(user),
      })
         .then((res) => res.json())
         .then((data) => {
            setCreatedUserEmail(email);
            console.log(data);
         });
   };
   return (
      <div className="min-h-screen flex justify-center items-start">
         <div className="w-96 p-7">
            <h2 className="text-3xl text-center">Sign up</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
               <div className="form-control w-full max-w-xs">
                  <label htmlFor="" className="label">
                     <span className="label-text">Name</span>
                  </label>
                  <input type="text" {...register("name", { required: "Name is Required" })} className="input input-bordered w-full max-w-xs" />
                  {errors.name && (
                     <p role="alert" className="text-error pt-1 pl-1">
                        {errors.name?.message}
                     </p>
                  )}
               </div>
               <div className="form-control w-full max-w-xs">
                  <label htmlFor="" className="label">
                     <span className="label-text">Email</span>
                  </label>
                  <input type="email" {...register("email", { required: "Email Address is Required" })} className="input input-bordered w-full max-w-xs" />
                  {errors.email && (
                     <p role="alert" className="text-error pt-1 pl-1">
                        {errors.email?.message}
                     </p>
                  )}
               </div>
               <div className="form-control w-full max-w-xs">
                  <label htmlFor="" className="label">
                     <span className="label-text">Password</span>
                  </label>
                  <input
                     type="password"
                     {...register("password", {
                        required: "Password is Required",
                        minLength: { value: 6, message: "Password must be 6 characters or longer" },
                        pattern: { value: /(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$)/, message: "Password must contains one uppercase letter and one number" },
                     })}
                     className="input input-bordered w-full max-w-xs"
                  />
                  {(errors.password && (
                     <p role="alert" className="text-error pt-1 pl-1">
                        {errors.password?.message}
                     </p>
                  )) ||
                     (signUpError && (
                        <p role="alert" className="text-error pt-1 pl-1">
                           {signUpError}
                        </p>
                     ))}
               </div>
               <div className="form-control w-full max-w-xs">
                  <label htmlFor="" className="label">
                     <span className="label-text">Email</span>
                  </label>
                  <select {...register("select")} className="select select-bordered w-full max-w-xs">
                     <option value="Buyer" selected>Buyer</option>
                     <option value="Seller">Seller</option>
                  </select>
               </div>
               <input className="btn btn-accent w-full mt-4" value="Sign Up" type="submit" />
            </form>
            <p className="mt-5">
               Already have an account?{" "}
               <Link className="text-secondary" to="/login">
                  Please Log in
               </Link>
            </p>
            <div className="divider">OR</div>
            <button onClick={handleGoogle} className="btn btn-outline uppercase w-full">
               Continue With Google
            </button>
         </div>
      </div>
   );
};

export default Signup;
