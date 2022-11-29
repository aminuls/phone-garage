import React from "react";
import Carousel from "react-multi-carousel";
import CategoryCard from "../../../components/CategoryCard/CategoryCard";
const  Featured = () => {
   return (
      <div className="px-2 mt-20">
         <div>
            <h2 className="text-4xl text-center mb-6">Featured Product</h2>
         </div>
         <div>
            <Carousel
               additionalTransfrom={0}
               arrows
               autoPlay
               autoPlaySpeed={2000}
               centerMode={false}
               className=""
               containerClass="container-with-dots"
               dotListClass=""
               draggable
               focusOnSelect={false}
               infinite
               itemClass="px-2"
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
               sliderClass=""
               slidesToSlide={1}
               swipeable
            >
               <CategoryCard></CategoryCard>
               <CategoryCard></CategoryCard>
               <CategoryCard></CategoryCard>
               <CategoryCard></CategoryCard>
               <CategoryCard></CategoryCard>
               <CategoryCard></CategoryCard>
               <CategoryCard></CategoryCard>
               <CategoryCard></CategoryCard>
               <CategoryCard></CategoryCard>
               <CategoryCard></CategoryCard>
            </Carousel>
         </div>
      </div>
   );
};

export default Featured;
