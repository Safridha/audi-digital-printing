import { motion } from "framer-motion";

export default function PrintingMockup() {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative h-[420px] w-[350px]"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 rounded-full bg-blue-200 blur-3xl opacity-60" />


      {/* Banner Card */}
      <div className="absolute right-0 top-10 h-48 w-64 rotate-6 rounded-2xl bg-blue-600 p-6 text-white shadow-xl">

        <p className="text-sm">
          2Audi
        </p>

        <h3 className="mt-8 text-2xl font-bold">
          Banner Print
        </h3>

      </div>


      {/* Business Card */}
      <div className="absolute bottom-10 left-0 h-40 w-60 -rotate-6 rounded-2xl border bg-white p-6 shadow-xl">

        <p className="text-sm font-semibold text-blue-600">
          BUSINESS CARD
        </p>

        <p className="mt-6 text-lg font-bold text-slate-900">
          2Audi Digital
        </p>

      </div>


    </motion.div>
  );
}