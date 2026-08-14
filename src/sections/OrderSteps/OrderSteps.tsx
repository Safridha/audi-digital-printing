import {
  MessageCircle,
  Palette,
  Printer,
  PackageCheck,
} from "lucide-react";


const steps = [
  {
    number:"01",
    icon:MessageCircle,
    title:"Chat WhatsApp",
    description:"Konsultasikan kebutuhan cetak."
  },

  {
    number:"02",
    icon:Palette,
    title:"Kirim Desain",
    description:"Kirim file atau request desain."
  },

  {
    number:"03",
    icon:Printer,
    title:"Proses Cetak",
    description:"Produksi cepat & berkualitas."
  },

  {
    number:"04",
    icon:PackageCheck,
    title:"Siap Dikirim",
    description:"Pesanan selesai dikirim."
  },
];



export default function OrderSteps(){

  return (

    <section
      id="order"
      className="
        scroll-mt-24
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-blue-50/40
        to-white
        py-10
      "
    >



      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
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
            mb-8
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
            Cara Pemesanan
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

            Mudah Pesan Cetak
            <span className="text-blue-600">
              {" "}Di 2Audi
            </span>

          </h2>


          <p
            className="
              mt-2
              text-sm
              text-slate-600
            "
          >
            Dari konsultasi sampai produk siap dikirim.
          </p>


        </div>








        {/* TIMELINE */}

        <div
          className="
            relative
            grid
            gap-6
            md:grid-cols-4
          "
        >



          {/* DESKTOP LINE */}

          <div
            className="
              absolute
              left-20
              right-20
              top-6
              hidden
              h-px
              bg-blue-100
              md:block
            "
          />





          {
            steps.map((step)=>{


              const Icon = step.icon;


              return (

                <div
                  key={step.number}
                  className="
                    relative
                    flex
                    items-center
                    gap-4
                    md:flex-col
                    md:text-center
                  "
                >


                  {/* ICON */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-600
                      text-white
                      shadow-lg
                    "
                  >

                    <Icon size={21}/>


                  </div>





                  <div>


                    <p
                      className="
                        text-xs
                        font-bold
                        text-blue-600
                      "
                    >
                      {step.number}
                    </p>



                    <h3
                      className="
                        mt-1
                        text-sm
                        font-bold
                        text-slate-900
                      "
                    >
                      {step.title}
                    </h3>



                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-slate-600
                      "
                    >
                      {step.description}
                    </p>


                  </div>




                </div>

              );


            })
          }




        </div>




      </div>



    </section>

  );

}