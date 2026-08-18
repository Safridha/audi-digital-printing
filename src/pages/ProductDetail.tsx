import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";


export default function ProductDetail(){

  const {slug}=useParams();
  const navigate=useNavigate();

  const product=products.find(
    item=>item.slug===slug
  );


  if(!product)
    return (
      <div className="p-10 text-center">
        Produk tidak ditemukan
      </div>
    );


  return(
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-blue-50/50
        to-white
        pt-32
        pb-12
        sm:pt-36
        lg:pt-40
      "
    >

      <div
        className="
          absolute
          -right-32
          top-20
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

        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-2
          "
        >


          {/* IMAGE */}

          <div
            className="
              rounded-3xl
              bg-white
              p-5
              shadow-xl
            "
          >

            <img
              src={product.image}
              alt={product.title}
              className="
                h-72
                w-full
                object-contain
                sm:h-[430px]
              "
            />

          </div>




          {/* CONTENT */}

          <div>


            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-widest
                text-blue-600
              "
            >
              {product.category}
            </p>


            <h1
              className="
                mt-2
                text-3xl
                font-extrabold
                text-slate-900
                md:text-4xl
              "
            >
              {product.title}
            </h1>


            <p
              className="
                mt-4
                text-2xl
                font-extrabold
                text-blue-600
              "
            >
              {product.price}
            </p>



            <div
              className="
                mt-6
                grid
                grid-cols-3
                gap-3
              "
            >

              <InfoBox
                title="Ukuran"
                value={product.detail.ukuran}
              />

              <InfoBox
                title="Bahan"
                value={product.detail.bahan}
              />

              <InfoBox
                title="Proses"
                value={product.detail.waktu}
              />

            </div>




            <div
              className="
                mt-7
                grid
                gap-6
                sm:grid-cols-2
              "
            >

              <ListInfo
                title="Spesifikasi"
                items={product.specifications}
              />

              <ListInfo
                title="Keunggulan"
                items={product.benefits}
              />

            </div>





            <div
              className="
                mt-8
                grid
                grid-cols-2
                gap-3
              "
            >

              <button
                onClick={()=>navigate("/#services")}
                className="
                  rounded-xl
                  border
                  border-blue-600
                  py-3
                  text-sm
                  font-semibold
                  text-blue-600
                  transition
                  hover:bg-blue-50
                "
              >
                ← Kembali
              </button>



              <a
                href={`https://wa.me/6282241823895?text=Halo 2Audi, saya ingin pesan ${product.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-600
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >
                Pesan WhatsApp
              </a>


            </div>


          </div>


        </div>

      </div>


    </section>
  );
}




function InfoBox({
  title,
  value
}:{
  title:string;
  value:string;
}){

  return(
    <div
      className="
        rounded-xl
        bg-white
        p-3
        shadow-md
      "
    >

      <p className="text-[10px] text-slate-500">
        {title}
      </p>


      <p
        className="
          mt-1
          text-xs
          font-semibold
          text-slate-900
        "
      >
        {value}
      </p>


    </div>
  );
}




function ListInfo({
  title,
  items=[]
}:{
  title:string;
  items:string[];
}){

  return(
    <div>

      <h3
        className="
          text-sm
          font-bold
          text-slate-900
        "
      >
        {title}
      </h3>


      <ul
        className="
          mt-2
          space-y-1
          text-xs
          text-slate-600
        "
      >

        {
          items.map(item=>(
            <li key={item}>
              ✓ {item}
            </li>
          ))
        }

      </ul>


    </div>
  );
}