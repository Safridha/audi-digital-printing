import { useState } from "react";

import {
  Swiper,
  SwiperSlide
} from "swiper/react";

import {
  Autoplay,
  Pagination,
  EffectFade
} from "swiper/modules";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


import heroImage from "../../assets/images/hero/hero-tampilan.png";
import promo17 from "../../assets/images/hero/17-an.png";



export default function HeroImageSlider() {


  const images = [
    heroImage,
    promo17
  ];


  const [zoomImage,setZoomImage] = useState(false);



  return (

    <div
      className="
        relative
        flex
        justify-center
        lg:-translate-y-6
        pb-6
      "
    >



      <Swiper

        modules={[
          Autoplay,
          Pagination,
          EffectFade
        ]}


        autoplay={{
          delay:4000,
          disableOnInteraction:false,
        }}


        pagination={{
          clickable:true,
        }}


        effect="fade"


        loop


        className="
          w-full
          max-w-[620px]
          hero-swiper
        "

      >



        {
          images.map((image,index)=>(


            <SwiperSlide
              key={index}
            >


              <div
                className="
                  overflow-hidden
                  rounded-2xl
                "
              >


                <img

                  src={image}

                  alt={`2Audi Digital Printing ${index+1}`}


                  onClick={()=>
                    setZoomImage(!zoomImage)
                  }


                  className={`

                    block

                    w-full

                    cursor-pointer

                    rounded-2xl

                    object-contain

                    mix-blend-multiply

                    transition

                    duration-500


                    ${
                      zoomImage
                      ?
                      "scale-105"
                      :
                      "hover:scale-105"
                    }

                  `}

                />


              </div>


            </SwiperSlide>


          ))
        }



      </Swiper>






      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -z-10
          h-80
          w-80
          rounded-full
          bg-blue-400/20
          blur-3xl
        "
      />





      <style>

        {`

        .hero-swiper .swiper-pagination {
          bottom:-3px !important;
        }


        `}

      </style>



    </div>

  );

}