import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/logo-2audi.png";


export default function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState(false);



  useEffect(() => {

    if(location.hash){

      const id = location.hash.replace("#","");

      setTimeout(()=>{

        const element = document.getElementById(id);

        if(element){

          element.scrollIntoView({
            behavior:"smooth",
            block:"start",
          });

        }

      },100);

    }

  },[location]);





  const handleNavigation = (section:string)=>{

    setOpenMenu(false);


    if(location.pathname !== "/"){

      navigate(`/#${section}`);
      return;

    }


    const element = document.getElementById(section);


    if(element){

      element.scrollIntoView({
        behavior:"smooth",
        block:"start",
      });

    }

  };





  const menu = [
    {
      name:"Home",
      id:"home",
    },
    {
      name:"Layanan",
      id:"services",
    },
    {
      name:"Keunggulan",
      id:"advantages",
    },
    {
      name:"Portfolio",
      id:"portfolio",
    },
    {
      name:"Cara Order",
      id:"order",
    },
    {
      name:"Kontak",
      id:"contact",
    },
  ];





  return (

    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-slate-200/50
        bg-white/90
        backdrop-blur-xl
      "
    >


      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-6
          md:h-24
        "
      >





        {/* LOGO */}

        <button
          onClick={()=>navigate("/")}
          className="
            flex
            items-center
          "
        >

          <img
            src={logo}
            alt="2Audi Digital Printing"
            className="
              h-12
              w-auto
              object-contain
              md:h-16
            "
          />

        </button>






        {/* DESKTOP MENU */}

        <nav
          className="
            hidden
            items-center
            gap-8
            md:flex
          "
        >

          {menu.map((item)=>(

            <button
              key={item.id}
              onClick={()=>handleNavigation(item.id)}
              className="
                group
                relative
                whitespace-nowrap
                text-sm
                font-medium
                text-slate-700
                transition
                hover:text-blue-600
                lg:text-base
              "
            >

              {item.name}


              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-0.5
                  w-0
                  bg-blue-600
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />

            </button>

          ))}


        </nav>







        {/* MOBILE BUTTON */}

        <button
          onClick={()=>setOpenMenu(!openMenu)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border
            border-slate-200
            text-xl
            text-slate-700
            md:hidden
          "
        >

          {openMenu ? "✕" : "☰"}

        </button>



      </div>








      {/* MOBILE MENU */}

      <div
        className={`
          overflow-hidden
          border-t
          border-slate-200
          bg-white
          transition-all
          duration-300
          md:hidden
          ${
            openMenu
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
          }
        `}
      >

        <nav
          className="
            flex
            flex-col
            gap-2
            px-6
            py-5
          "
        >

          {menu.map((item)=>(

            <button
              key={item.id}
              onClick={()=>handleNavigation(item.id)}
              className="
                rounded-lg
                px-4
                py-3
                text-left
                text-sm
                font-medium
                text-slate-700
                transition
                hover:bg-blue-50
                hover:text-blue-600
              "
            >

              {item.name}

            </button>

          ))}


        </nav>


      </div>



    </header>

  );

}