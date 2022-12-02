import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/images/logo.png";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Header = ({ isDashboard }) => {
   function classNames(...classes) {
      return classes.filter(Boolean).join(" ");
   }
   const [categories, setCategories] = useState([]);
   const { user, logOut } = useContext(AuthContext);
   const handleLogOut = () => {
      logOut()
         .then(() => {})
         .catch((error) => console.log(error));
   };
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
         <Menu as="div" className="relative inline-block text-left">
            <li>
               <Menu.Button className="inline-flex w-full justify-start rounded-md">
                  All Categories
                  <ChevronDownIcon className="-mr-1 -ml-2 mt-1 h-6 w-6" aria-hidden="true" />
               </Menu.Button>
            </li>

            <Transition
               as={Fragment}
               enter="transition ease-out duration-100"
               enterFrom="transform opacity-0 scale-95"
               enterTo="transform opacity-100 scale-100"
               leave="transition ease-in duration-75"
               leaveFrom="transform opacity-100 scale-100"
               leaveTo="transform opacity-0 scale-95"
            >
               <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                     {categories.map((category) => (
                        <Menu.Item key={category._id}>
                           {({ active }) => (
                              <Link to={`/category/${category.category}`} className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 font-normal")}>
                                 {category.category}
                              </Link>
                           )}
                        </Menu.Item>
                     ))}
                  </div>
               </Menu.Items>
            </Transition>
         </Menu>
         <li>
            <Link to="/blog" className="rounded-md">
               Blog
            </Link>
         </li>
         {user?.uid ? (
            <>
               <li>
                  <Link className="rounded-md" to="/dashboard">
                     Dashboard
                  </Link>
               </li>
               <li>
                  <button onClick={handleLogOut} className="rounded-md">
                     Logout
                  </button>
               </li>
            </>
         ) : (
            <>
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
         )}
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
                     {isDashboard && (
                        <label tabIndex={0} className="btn btn-ghost lg:hidden px-2" htmlFor="dashboard-drawer">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                           </svg>
                        </label>
                     )}
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
