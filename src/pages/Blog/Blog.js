import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const Blog = () => {
   return (
      <div className="mb-24">
         <div>
            <h2 className="text-4xl text-center my-6">Featured Product</h2>
         </div>
         <div className="w-full px-2 lg:px-4 pt-4">
            <div className="mx-auto w-full rounded-2xl bg-white p-2">
               <Disclosure>
                  {({ open }) => (
                     <>
                        <Disclosure.Button
                           className={`flex w-full justify-between rounded-lg ${
                              open ? "rounded-b-none" : ""
                           } bg-purple-100 px-4 py-4 text-left font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 text-2xl items-center`}
                        >
                           <span>What are the different ways to manage a state in a React application?</span>
                           <ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-8 w-8 text-purple-500`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 bg-purple-100 text-base text-gray-500">
                           <p>There are four main types of state I need to properly manage in my React application which are-</p>
                           <ol>
                              <li>1. Local state</li>
                              <li>2. Global state</li>
                              <li>3. Server state</li>
                              <li>4. URL state</li>
                           </ol>
                           <p>
                              <span className="font-bold">Local State:</span> Local state is data we manage in one or another component. Local state is most often managed in React using the <code>useState</code> hook.
                           </p>
                           <p>
                              <span className="font-bold">Global State:</span> Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at
                              least.
                           </p>
                           <p>
                              <span className="font-bold">Server State:</span> Local state is data we manage in one or another component. Local state is most often managed in React using the <code>useState</code> hook.
                           </p>
                           <p>
                              <span className="font-bold">URL State:</span> Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one. In many cases, a lot
                              of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                           </p>
                        </Disclosure.Panel>
                     </>
                  )}
               </Disclosure>
               <Disclosure as="div" className="mt-3">
                  {({ open }) => (
                     <>
                        <Disclosure.Button
                           className={`flex w-full justify-between rounded-lg ${
                              open ? "rounded-b-none" : ""
                           } bg-purple-100 px-4 py-4 text-left font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 text-2xl items-center`}
                        >
                           <span>How does prototypical inheritance work?</span>
                           <ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-8 w-8 text-purple-500`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 bg-purple-100 text-base text-gray-500">
                           <p>
                              The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to
                              get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                           </p>
                        </Disclosure.Panel>
                     </>
                  )}
               </Disclosure>
               <Disclosure as="div" className="mt-3">
                  {({ open }) => (
                     <>
                        <Disclosure.Button
                           className={`flex w-full justify-between rounded-lg ${
                              open ? "rounded-b-none" : ""
                           } bg-purple-100 px-4 py-4 text-left font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 text-2xl items-center`}
                        >
                           <span>What is a unit test? Why should we write unit tests?</span>
                           <ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-8 w-8 text-purple-500`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 bg-purple-100 text-base text-gray-500">
                           The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early
                           flaws in code which may be more difficult to find in later testing stages.
                        </Disclosure.Panel>
                     </>
                  )}
               </Disclosure>
               <Disclosure as="div" className="mt-3">
                  {({ open }) => (
                     <>
                        <Disclosure.Button
                           className={`flex w-full justify-between rounded-lg ${
                              open ? "rounded-b-none" : ""
                           } bg-purple-100 px-4 py-4 text-left font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 text-2xl items-center`}
                        >
                           <span>React vs. Angular vs. Vue?</span>
                           <ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-8 w-8 text-purple-500`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 bg-purple-100 text-base text-gray-500">
                           Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the
                           transition to Vue from either of the two is an easy option.
                        </Disclosure.Panel>
                     </>
                  )}
               </Disclosure>
            </div>
         </div>
      </div>
   );
};

export default Blog;
