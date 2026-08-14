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



  return(

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
          max-w-xl
        "

      >


        {
          images.map((img,i)=>(


            <SwiperSlide key={i}>


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

                  className="
                    h-auto
                    max-h-[420px]
                    w-full
                    object-contain

                    sm:max-h-[450px]
                  "

                />


              </div>


            </SwiperSlide>


          ))
        }


      </Swiper>


    </div>

  );

}