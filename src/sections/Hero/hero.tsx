import Container from "../../components/ui/Container";

import HeroContent from "./HeroContent";
import HeroImageSlider from "./HeroImageSlider";


export default function Hero() {

  return (

    <section
      id="home"
      className="
        relative
        scroll-mt-24
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-blue-50/60
        to-white
        py-12
        lg:py-20
      "
    >


      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-20
          h-80
          w-80
          rounded-full
          bg-blue-400/20
          blur-3xl
        "
      />


      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          -left-32
          h-72
          w-72
          rounded-full
          bg-cyan-300/20
          blur-3xl
        "
      />



      <Container>

        <div
          className="
            relative
            z-10
            grid
            items-center
            gap-8
            lg:grid-cols-2
            lg:gap-16
          "
        >


          {/* CONTENT */}

          <HeroContent />



          {/* IMAGE */}

          <HeroImageSlider />


        </div>

      </Container>


    </section>

  );

}