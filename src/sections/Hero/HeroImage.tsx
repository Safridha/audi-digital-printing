import { motion } from "framer-motion";
import heroImage from "../../assets/images/hero/hero-tampilan.png";

export default function HeroImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 50,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        relative
        flex
        justify-center
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          h-72
          w-72
          rounded-full
          bg-blue-500/10
          blur-3xl
          sm:h-96
          sm:w-96
        "
      />

      {/* Circle */}
      <div
        className="
          absolute
          -right-5
          top-0
          hidden
          h-20
          w-20
          rounded-full
          border-4
          border-blue-100
          sm:block
        "
      />

      {/* Image */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          overflow-hidden
          rounded-3xl
          bg-white
          p-3
          shadow-2xl
        "
      >
        <img
          src={heroImage}
          alt="2Audi Digital Printing"
          className="
            w-full
            max-w-[520px]
            rounded-2xl
            object-cover
          "
        />
      </motion.div>
    </motion.div>
  );
}
