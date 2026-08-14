import { motion } from "framer-motion";
import Button from "../../components/ui/Button";

export default function HeroContent() {
  return (
    <motion.div
      initial={{opacity:0,y:30}}
      animate={{opacity:1,y:0}}
      transition={{duration:.7}}
      className="max-w-xl lg:-translate-y-6"
    >

      <h1 className="
        text-3xl
        font-extrabold
        leading-tight
        text-slate-900
        sm:text-5xl
        lg:text-6xl
      ">
        Solusi Digital Printing
        <br/>
        Untuk Kebutuhan
        <br/>
        <span className="text-blue-600">
          Bisnis Anda
        </span>
      </h1>


      <p className="
        mt-5
        max-w-lg
        text-sm
        leading-6
        text-slate-600
        sm:text-lg
        sm:leading-7
      ">
        Melayani kebutuhan digital printing seperti banner,
        spanduk, MMT, X-Banner, umbul-umbul, dan berbagai
        media promosi dengan hasil berkualitas.
      </p>


      <div className="
        mt-7
        flex
        flex-col
        gap-3
        sm:flex-row
      ">
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


      <div className="
        mt-7
        grid
        gap-2
        text-sm
        font-medium
        text-slate-600
        sm:grid-cols-3
      ">
        <span>✓ Kualitas Terjamin</span>
        <span>⚡ Proses Cepat</span>
        <span>🎨 Bisa Custom</span>
      </div>

    </motion.div>
  );
}