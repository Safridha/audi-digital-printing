import { motion } from "framer-motion";
import Button from "../../components/ui/Button";

export default function HeroContent() {

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: .6
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
          sm:text-4xl
          lg:text-5xl
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
          mt-4
          max-w-md
          text-sm
          leading-6
          text-slate-600
          sm:text-base
          lg:mx-0
        "
      >
        Melayani kebutuhan digital printing seperti banner,
        spanduk, MMT, X-Banner, umbul-umbul, dan berbagai
        media promosi dengan hasil berkualitas.
      </p>



      <div
        className="
          mt-6
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


    </motion.div>
  );
}