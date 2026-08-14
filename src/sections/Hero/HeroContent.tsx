import { motion } from "framer-motion";
import Button from "../../components/ui/Button";

export default function HeroContent() {

  return (

    <motion.div

      initial={{
        opacity:0,
        y:20
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:.6
      }}

      className="
        w-full
        max-w-xl
        overflow-hidden
        text-center
        lg:text-left
      "

    >

      <h1
        className="
          break-words
          text-3xl
          font-extrabold
          leading-tight
          text-slate-900
          sm:text-5xl
          lg:text-6xl
        "
      >

        Solusi Digital Printing

        <br />

        Untuk Kebutuhan

        <br />

        <span className="text-blue-600">
          Bisnis Anda
        </span>

      </h1>



      <p
        className="
          mx-auto
          mt-5
          max-w-lg
          text-sm
          leading-7
          text-slate-600
          sm:text-base
          lg:mx-0
        "
      >

        Melayani kebutuhan digital printing seperti banner,
        spanduk, MMT, X-Banner, umbul-umbul, dan berbagai
        media promosi dengan hasil berkualitas.

      </p>




      {/* BUTTON */}

      <div
        className="
          mt-7
          flex
          flex-row
          justify-center
          gap-3
          lg:justify-start
        "
      >

        <Button
          href="https://wa.me/6282241823895"
          target="_blank"
        >
          Pesan via WhatsApp
        </Button>


        <Button
          variant="outline"
          href="#services"
        >
          Lihat Produk
        </Button>


      </div>




      {/* TRUST */}

      <div
        className="
          mt-8
          flex
          flex-col
          items-center
          gap-4
          text-sm
          text-slate-600
          sm:flex-row
          sm:justify-center
          lg:justify-start
        "
      >
        
      </div>


    </motion.div>

  );
}