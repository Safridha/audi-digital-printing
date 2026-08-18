import { Link } from "react-router-dom";
import { products } from "../../data/products";

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative overflow-hidden scroll-mt-24
        bg-gradient-to-b from-white via-blue-50/40 to-white
        py-12 lg:py-16
      "
    >

      <div className="
        absolute -right-32 top-0 h-80 w-80
        rounded-full bg-blue-400/20 blur-3xl
      "/>

      <div className="
        absolute -left-32 bottom-0 h-72 w-72
        rounded-full bg-cyan-300/20 blur-3xl
      "/>


      <div className="
        absolute inset-0 opacity-[0.08]
        bg-[radial-gradient(circle,#2563eb_1px,transparent_1px)]
        bg-[size:28px_28px]
      "/>


      <div className="
        relative mx-auto max-w-7xl px-5 sm:px-6
      ">


        {/* HEADER */}
        <div className="
          mx-auto max-w-5xl text-center
        ">

          <p className="
            text-xs font-bold uppercase
            tracking-[0.25em] text-blue-600
          ">
            Layanan Kami
          </p>


          <h2 className="
            mt-3
            whitespace-nowrap
            text-3xl
            font-extrabold
            text-slate-900
            md:text-4xl
          ">
            Solusi Cetak Untuk{" "}
            <span className="text-blue-600">
              Semua Kebutuhan
            </span>
          </h2>


          <p className="
            mt-3 text-sm text-slate-600
          ">
            Digital printing berkualitas untuk kebutuhan bisnis,
            event, promosi, dan personal.
          </p>

        </div>



        {/* CARD */}
        <div className="
          mt-8 grid
          grid-cols-2
          gap-5
          sm:grid-cols-3
          lg:grid-cols-5
        ">


          {products.map((item)=>(

            <div
              key={item.slug}
              className="
                group
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-[0_10px_35px_rgba(0,0,0,0.08)]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-[0_20px_45px_rgba(37,99,235,0.15)]
              "
            >


              {/* IMAGE */}
              <div className="
                flex
                h-44
                items-center
                justify-center
                overflow-hidden
                bg-white
                p-3
              ">

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-full
                    w-full
                    object-contain
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />

              </div>



              {/* CONTENT */}
              <div className="
                p-4
              ">


                <h3 className="
                  min-h-[40px]
                  text-sm
                  font-bold
                  text-slate-900
                ">
                  {item.title}
                </h3>


                <p className="
                  mt-2
                  text-xs
                  font-bold
                  text-blue-600
                ">
                  {item.price}
                </p>



                <div className="
                  mt-4 space-y-2
                ">


                  <Link
                    to={`/produk/${item.slug}`}
                    className="
                      block
                      rounded-xl
                      bg-blue-600
                      py-2
                      text-center
                      text-xs
                      font-semibold
                      text-white
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
                      rounded-xl
                      border
                      border-blue-600
                      py-2
                      text-center
                      text-xs
                      font-semibold
                      text-blue-600
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