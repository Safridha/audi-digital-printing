import Container from "../../components/ui/Container";
import HeroContent from "./HeroContent";
import HeroImageSlider from "./HeroImageSlider";


export default function Hero(){

  return (

    <section
      id="home"
      className="
        relative
        w-full
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-blue-50/50
        to-white
        pt-28
        pb-10
        sm:pt-32
        sm:pb-14
        lg:pt-36
        lg:pb-20
      "
    >

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-80
          w-80
          rounded-full
          bg-blue-400/20
          blur-3xl
        "
      />


      <Container>

        <div
          className="
            relative
            flex
            w-full
            flex-col
            gap-10
            lg:grid
            lg:grid-cols-2
            lg:items-center
            lg:gap-16
          "
        >

          <HeroContent />

          <HeroImageSlider />

        </div>

      </Container>


    </section>

  );
}