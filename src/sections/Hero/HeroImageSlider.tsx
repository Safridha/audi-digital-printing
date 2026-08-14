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



export default function HeroImageSlider(){

  const images=[
    heroImage,
    promo17
  ];


  const [zoom,setZoom]=useState(false);



  return (

    <div
      className="
        flex
        w-full
        justify-center
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
          disableOnInteraction:false
        }}

        pagination={{
          clickable:true
        }}

        effect="fade"

        loop

        className="
          w-full
          max-w-md
          sm:max-w-xl
        "

      >


        {
          images.map((img,index)=>(

            <SwiperSlide key={index}>


              <div
                className="
                  overflow-hidden
                  rounded-3xl
                  bg-white
                  shadow-lg
                "
              >

                <img

                  src={img}

                  alt="2Audi Digital Printing"

                  onClick={()=>setZoom(!zoom)}

                  className={`
                    block
                    w-full
                    max-h-[350px]
                    object-contain
                    rounded-3xl
                    transition
                    duration-500

                    ${
                      zoom
                      ? "scale-105"
                      : ""
                    }
                  `}

                />


              </div>


            </SwiperSlide>

          ))
        }


      </Swiper>


    </div>

  );

}