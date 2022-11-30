import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/images/logo.png";

const Header = () => {
   const [categories, setCategories] = useState([]);
   useEffect(() => {
      fetch("http://localhost:5000/category")
         .then((res) => res.json())
         .then((result) => setCategories(result));
   }, []);
   const menuItems = (
      <>
         <li>
            <Link to="/" className="rounded-md">
               Home
            </Link>
         </li>
         <li>
            <div tabIndex="0" className="dropdown dropdown-bottom dropdown-end rounded-md active:bg-[#1f29371a] active:text-black">
               <label className="flex gap-1 items-end">
                  All Categories
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
               </label>
               <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  {categories.map((category) => (
                     <li key={category._id}>
                        <Link to={`/category/${category.category}`}>{category.category}</Link>
                     </li>
                  ))}
               </ul>
            </div>
         </li>

         <li>
            <Link to="/login" className="rounded-md">
               Log in
            </Link>
         </li>
         <li>
            <Link to="/signup" className="rounded-md">
               Sign up
            </Link>
         </li>
      </>
   );
   return (
      <div>
         <div className="navbar bg-base-100">
            <div className="navbar-start flex justify-between w-full">
               <Link to="/" className="btn btn-ghost h-full normal-case text-xl">
                  <figure className="flex items-center">
                     <img src={logo1} alt="logo" className="w-16 h-16" />
                     <p className="text-2xl">Phone Garage</p>
                  </figure>
               </Link>
               <div className="flex items-center gap-1">
                  <div className="dropdown dropdown-bottom flex justify-end">
                     <label tabIndex={0} className="btn btn-ghost lg:hidden px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                     </label>
                     <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                     </ul>
                  </div>
                  <div>
                     <label className="btn btn-ghost lg:hidden px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>
                     </label>
                  </div>
               </div>
            </div>
            <div className="navbar-end hidden lg:flex">
               <ul className="menu menu-horizontal p-0">{menuItems}</ul>
            </div>
         </div>
      </div>
   );
};

export default Header;
