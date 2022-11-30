import React from "react";

const Contact = () => {
   const handleSubmit = (event) => {
      event.preventDefault();
   };
   return (
      <section>
         <div className="hero py-20">
            <form onSubmit={handleSubmit} className="hero-content flex-col px-2 sm:px-8 py-0 w-full">
               <div className="text-center mb-3">
                  <p className="text-4xl mb-2">Contact us</p>
                  <h2 className="text-2xl">Stay connected with us</h2>
               </div>
               <div className="card w-full lg:w-1/3">
                  <div className="card-body p-0">
                     <div className="form-control">
                        <input type="text" placeholder="Email Address" className="input input-bordered rounded-md" />
                     </div>
                     <div className="form-control">
                        <input type="text" placeholder="Subject" className="input input-bordered rounded-md" />
                     </div>
                     <div className="form-control">
                        <textarea rows="4" className="textarea textarea-bordered text-base rounded-md" placeholder="Type Your Message"></textarea>
                     </div>
                  </div>
               </div>
               <div className="form-control">
                  <button className="btn btn-primary px-10 rounded-md">Submit</button>
               </div>
            </form>
         </div>
      </section>
   );
};

export default Contact;
