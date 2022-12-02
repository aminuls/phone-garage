import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
   const { signIn, googleSignIn } = useContext(AuthContext);
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm();
   const [loginError, setLoginError] = useState(null);
   const [loggedInUserEmail, setLoggedInUserEmail] = useState(null);
   const [token] = useToken(loggedInUserEmail);
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";
   const navigate = useNavigate();

   const handleLogin = (data) => {
      console.log(data);
      signIn(data.email, data.password)
         .then((result) => {
            const user = result.user;
            setLoginError(null);
            setLoggedInUserEmail(data.email);
            if (token) {
               console.log(from);
               navigate(from, { replace: true });
            }
            console.log(user);
         })
         .catch((error) => {
            console.log(error.message);
            setLoginError(error.message);
         });
   };
   const handleGoogle = () => {
      googleSignIn()
         .then((result) => {
            const data = result.user;
            saveUser(data.displayName, data.email);
         })
         .catch((error) => {
            setLoginError(error.message);
            console.error(error.message);
         });
   };
   const saveUser = (name, email) => {
      const user = { name, email };
      fetch("http://localhost:5000/users", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(user),
      })
         .then((res) => res.json())
         .then((data) => {
            setLoggedInUserEmail(email);
            if (token) {
               navigate(from, { replace: true });
            }
            navigate(from, { replace: true });
            console.log(data);
         });
   };

   return (
      <div className="min-h-screen flex justify-center mt-2">
         <div className="w-[420px] p-7">
            <h2 className="text-3xl text-center">Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
               <div className="form-control w-full">
                  <label htmlFor="" className="label">
                     <span className="label-text">Email</span>
                  </label>
                  <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full" />
                  {errors.email && (
                     <p role="alert" className="text-error pt-1 pl-1">
                        {errors.email?.message}
                     </p>
                  )}
               </div>
               <div className="form-control w-full">
                  <label htmlFor="" className="label">
                     <span className="label-text">Password</span>
                  </label>
                  <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be 6 characters or longers" } })} className="input input-bordered w-full" />
                  {(errors.password && (
                     <p role="alert" className="text-error pt-1 pl-1">
                        {console.log(errors)}
                        {errors.password?.message}
                     </p>
                  )) ||
                     (loginError && (
                        <p role="alert" className="text-error pt-1 pl-1">
                           {loginError}
                        </p>
                     ))}
                  <label htmlFor="" className="label">
                     <span className="label-text">Forget Password</span>
                  </label>
               </div>

               <input className="btn btn-accent w-full" value="Login" type="submit" />
            </form>
            <p className="mt-5">
               New to Doctors Portal?{" "}
               <Link className="text-secondary" to="/signup">
                  Create new Account
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

export default Login;
