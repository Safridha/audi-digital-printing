import Container from "../../components/ui/Container";
import HeroContent from "./HeroContent";
import HeroImageSlider from "./HeroImageSlider";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-blue-50/50
        to-white
        py-10
        sm:py-14
        lg:py-20
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
            grid
            items-center
            gap-10
            rounded-3xl
            bg-white
            p-6
            shadow-xl
            sm:p-10
            lg:grid-cols-2
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