import React from "react";
import ImageGallery from "react-image-gallery";
import "./Slider.css";

// All image will be 10:6

const Slider = ({ advertise }) => {
   console.log(advertise);
   const images = [];
   advertise.map((ad) =>
      images.push({
         original: ad.image,
         description: (
            <>
               <div className="absolute m-2 top-0 right-0 h-20 w-20 rounded-full border-2 border-dashed border-slate-300 flex justify-center items-center flex-col">
                  <p className="text-lg leading-5 font-bold">${ad.resale_price}</p>
                  <p>
                     <span className="text-sm font-normal">only</span>
                  </p>
               </div>
               <button className="btn btn-outline text-white rounded-md">Buy Now</button>
            </>
         ),
      })
   );
   return (
      <div>
         <ImageGallery items={images} autoPlay={true} showPlayButton={false} showThumbnails={false} showBullets={true} />
      </div>
   );
};

export default Slider;
