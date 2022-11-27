import React from "react";
import Carousel from "react-multi-carousel";
const Featured = () => {
   return (
      <div className="px-2 mt-16">
         <div>
            <h2 className="text-4xl text-center mb-6">Featured Product</h2>
         </div>
         <div>
            <Carousel
               additionalTransfrom={0}
               arrows
               autoPlaySpeed={2000}
               autoPlay={true}
               centerMode={false}
               className=""
               containerClass="container-with-dots rounded-md"
               itemClass="mx-2"
               dotListClass=""
               draggable
               focusOnSelect={false}
               infinite
               keyBoardControl
               minimumTouchDrag={80}
               pauseOnHover
               renderArrowsWhenDisabled={false}
               renderButtonGroupOutside={false}
               renderDotsOutside={false}
               responsive={{
                  desktop: {
                     breakpoint: {
                        max: 3000,
                        min: 1024,
                     },
                     items: 3,
                     partialVisibilityGutter: 40,
                  },
                  mobile: {
                     breakpoint: {
                        max: 464,
                        min: 0,
                     },
                     items: 1,
                     partialVisibilityGutter: 30,
                  },
                  tablet: {
                     breakpoint: {
                        max: 1024,
                        min: 464,
                     },
                     items: 2,
                     partialVisibilityGutter: 30,
                  },
               }}
               rewind={false}
               rewindWithAnimation={false}
               rtl={false}
               shouldResetAutoplay
               showDots={false}
               sliderClass="rounded-lg"
               slidesToSlide={1}
               swipeable
            >
               <div>
                  <img src="https://picsum.photos/id/1015/1000/600/" className="rounded-md" alt="" />
               </div>
               <div>
                  <img src="https://picsum.photos/id/1016/1000/600/" className="rounded-md" alt="" />
               </div>
               <div>
                  <img src="https://picsum.photos/id/1018/1000/600/" className="rounded-md" alt="" />
               </div>
               <div>
                  <img src="https://picsum.photos/id/1019/1000/600/" className="rounded-md" alt="" />
               </div>
            </Carousel>
         </div>
      </div>
   );
};

export default Featured;
