import React from "react";
import ImageGallery from "react-image-gallery";
import "./Slider.css";

const images = [
   {
      original: "https://picsum.photos/id/1018/1000/600/",
      description: (
         <>
            <div className="absolute top-0 right-0">$999 only</div>
            <button className="btn btn-outline text-white rounded-md">Buy Now</button>
         </>
      ),
   },
   {
      original: "https://picsum.photos/id/1015/1000/600/",
      description: (
         <>
            <div className="absolute top-0 right-0">$999 only</div>
            <button className="btn btn-outline text-white rounded-md">Buy Now</button>
         </>
      ),
   },
   {
      original: "https://picsum.photos/id/1019/1000/600/",
      description: (
         <>
            <div className="absolute top-0 right-0">$999 only</div>
            <button className="btn btn-outline text-white btn-primary rounded-md">Buy Now</button>
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
