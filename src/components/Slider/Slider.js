import React from "react";
import ImageGallery from "react-image-gallery";
import "./Slider.css";
import phone from "../../assets/images/Apple iPhone 11 Pro Max.png";

// All image will be 10:6
const images = [
   {
      original: phone,
      description: (
         <>
            <div className="absolute m-2 top-0 right-0 h-20 w-20 rounded-full border-2 border-dashed border-slate-300 flex justify-center items-center">
               <p className="text-lg leading-5 font-bold">
                  $1470 <span className="text-sm font-normal">only</span>
               </p>
            </div>
            <button className="btn btn-outline text-white rounded-md">Buy Now</button>
         </>
      ),
   },
   {
      original: "https://picsum.photos/id/1015/1000/600/",
      description: (
         <>
            <div className="absolute m-2 top-0 right-0 h-20 w-20 rounded-full border-2 border-dashed border-slate-300 flex justify-center items-center">
               <p className="text-lg leading-5 font-bold">
                  $1470 <span className="text-sm font-normal">only</span>
               </p>
            </div>
            <button className="btn btn-outline text-white rounded-md">Buy Now</button>
         </>
      ),
   },
   {
      original: "https://picsum.photos/id/1019/1000/600/",
      description: (
         <>
            <div className="absolute m-2 top-0 right-0 h-20 w-20 rounded-full border-2 border-dashed border-slate-300 flex justify-center items-center">
               <p className="text-lg leading-5 font-bold">
                  $1470 <span className="text-sm font-normal">only</span>
               </p>
            </div>
            <button className="btn btn-outline text-white rounded-md">Buy Now</button>
         </>
      ),
   },
];

const Slider = () => {
   return (
      <div>
         <ImageGallery items={images} autoPlay={true} showPlayButton={false} showThumbnails={false} showBullets={true} />
      </div>
   );
};

export default Slider;
