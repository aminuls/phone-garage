import React from "react";

const Loading = ({ classes }) => {
   return (
      <div className="min-h-screen grid grid-cols-1 place-items-center">
         <div className={`${classes ? classes + " " : ""}w-20 h-20 rounded-full border-8 border-dashed border-green-400 animate-spin`}></div>
      </div>
   );
};

export default Loading;
