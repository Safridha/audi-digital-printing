import {
  Printer,
  Zap,
  Palette,
  Truck,
  ShieldCheck,
} from "lucide-react";


const advantages = [
  {
    icon: Printer,
    text: "Hasil cetak tajam & berkualitas",
  },

  {
    icon: Zap,
    text: "Pengerjaan cepat 1-2 hari",
  },

  {
    icon: Palette,
    text: "Desain custom sesuai request",
  },

  {
    icon: Truck,
    text: "Pengiriman seluruh Indonesia",
  },

  {
    icon: ShieldCheck,
    text: "Bahan & tinta berkualitas",
  },
];



export default function Advantages() {


  return (

    <section
      id="advantages"
      className="
        scroll-mt-24
        relative
        overflow-hidden
        bg-white
        py-10
        lg:py-12
      "
    >



      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-0
          h-72
          w-72
          rounded-full
          bg-blue-400/20
          blur-3xl
        "
      />



      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
        "
      >




        {/* HEADER */}

        <div
          className="
            text-center
          "
        >

          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.25em]
              text-blue-600
            "
          >
            Keunggulan Kami
          </p>


          <h2
            className="
              mt-3
              text-2xl
              font-extrabold
              text-slate-900
              md:text-4xl
            "
          >

            Kenapa Memilih

            <span className="text-blue-600">
              {" "}
              2Audi Digital?
            </span>

          </h2>


        </div>







        {/* LIST */}

        <div
          className="
            mt-8
            grid
            grid-cols-2
            gap-x-4
            gap-y-5
            md:grid-cols-5
          "
        >


          {advantages.map((item)=>{


            const Icon = item.icon;


            return (

              <div
                key={item.text}
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-50
                    text-blue-600
                  "
                >

                  <Icon size={18}/>

                </div>



                <p
                  className="
                    text-xs
                    font-medium
                    leading-5
                    text-slate-700
                  "
                >
                  {item.text}
                </p>


              </div>

            );


          })}


        </div>



      </div>



    </section>

  );

}