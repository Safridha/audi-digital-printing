import { Link } from "react-router-dom";
import { products } from "../../data/products";


export default function Services() {

  return (

    <section
      id="services"
      className="
        relative
        scroll-mt-24
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-blue-50/40
        to-white
        py-12
        lg:py-16
      "
    >


      {/* Glow Background */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-0
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
          -left-32
          bottom-0
          h-72
          w-72
          rounded-full
          bg-cyan-300/20
          blur-3xl
        "
      />



      {/* Dot Pattern */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.08]
          bg-[radial-gradient(circle,_#2563eb_1px,transparent_1px)]
          bg-[size:28px_28px]
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
            mx-auto
            max-w-2xl
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
            Layanan Kami
          </p>



          <h2
            className="
              mt-3
              text-3xl
              font-extrabold
              text-slate-900
              md:text-4xl
            "
          >

            Solusi Cetak Untuk

            <span className="text-blue-600">
              {" "}
              Semua Kebutuhan
            </span>

          </h2>



          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-sm
              leading-6
              text-slate-600
            "
          >
            Digital printing berkualitas untuk kebutuhan bisnis,
            event, promosi, dan personal.
          </p>


        </div>







        {/* PRODUCT CARD */}

        <div
          className="
            mt-8
            grid
            grid-cols-2
            gap-4
            lg:grid-cols-4
          "
        >



          {products.map((item)=>(


            <div

              key={item.slug}

              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white/90
                shadow-md
                backdrop-blur
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "

            >





              {/* IMAGE */}

              <div
                className="
                  flex
                  h-32
                  items-center
                  justify-center
                  overflow-hidden
                  bg-slate-50
                "
              >

                <img
                  src={item.image}
                  alt={item.title}

                  className="
                    h-full
                    w-full
                    object-contain
                    p-2
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />

              </div>







              {/* CONTENT */}

              <div
                className="
                  p-3
                "
              >



                <h3
                  className="
                    text-sm
                    font-bold
                    text-slate-900
                  "
                >
                  {item.title}
                </h3>



                <p
                  className="
                    mt-1
                    line-clamp-2
                    text-xs
                    leading-4
                    text-slate-600
                  "
                >
                  {item.description}
                </p>




                <p
                  className="
                    mt-2
                    text-xs
                    font-bold
                    text-blue-600
                  "
                >
                  {item.price}
                </p>





                <div
                  className="
                    mt-3
                    space-y-2
                  "
                >



                  <Link
                    to={`/produk/${item.slug}`}

                    className="
                      block
                      rounded-lg
                      bg-blue-600
                      px-2
                      py-2
                      text-center
                      text-xs
                      font-semibold
                      text-white
                      transition
                      hover:bg-blue-700
                    "
                  >
                    Detail
                  </Link>




                  <a

                    href={`https://wa.me/6282241823895?text=Halo%202Audi,%20saya%20ingin%20pesan%20${item.title}`}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="
                      block
                      rounded-lg
                      border
                      border-blue-600
                      px-2
                      py-2
                      text-center
                      text-xs
                      font-semibold
                      text-blue-600
                      transition
                      hover:bg-blue-50
                    "
                  >
                    Pesan
                  </a>


                </div>



              </div>


            </div>


          ))}



        </div>




      </div>


    </section>

  );

}