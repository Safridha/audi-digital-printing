import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/logo-2audi.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  const menu = [
    ["Home","home"],
    ["Layanan","services"],
    ["Keunggulan","advantages"],
    ["Portfolio","portfolio"],
    ["Cara Order","order"],
    ["Kontak","contact"],
  ];

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        document
          .getElementById(location.hash.replace("#",""))
          ?.scrollIntoView({ behavior:"smooth" });
      },100);
    }
  },[location]);

  const handleNavigation = (id:string) => {
    setOpenMenu(false);

    if(location.pathname !== "/"){
      navigate(`/#${id}`);
      return;
    }

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior:"smooth" });
  };

  return (
    <header className="
      sticky top-0 z-50
      border-b border-slate-200/50
      bg-white/90 backdrop-blur-xl
    ">
      <div className="
        mx-auto flex h-20 max-w-7xl
        items-center justify-between
        px-6
      ">

        {/* LOGO */}
        <button
          onClick={() => navigate("/")}
          className="
            flex
            h-full
            items-center
          "
        >
          <img
            src={logo}
            alt="2Audi Digital Printing"
            className="
              h-10
              w-auto
              object-contain
              sm:h-12
              md:h-14
            "
          />
        </button>


        {/* DESKTOP MENU */}
        <nav className="
          hidden md:flex
          items-center gap-8
        ">
          {menu.map(([name,id]) => (
            <button
              key={id}
              onClick={() => handleNavigation(id)}
              className="
                text-sm
                font-medium
                text-slate-700
                transition
                hover:text-blue-600
                lg:text-base
              "
            >
              {name}
            </button>
          ))}
        </nav>


        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="
            flex md:hidden
            h-10 w-10
            items-center justify-center
            rounded-lg
            border border-slate-200
            text-xl text-slate-700
          "
        >
          {openMenu ? "✕" : "☰"}
        </button>

      </div>


      {/* MOBILE MENU */}
      <div className={`
        overflow-hidden
        border-t border-slate-200
        bg-white
        transition-all
        md:hidden
        ${openMenu ? "max-h-96" : "max-h-0"}
      `}>
        <nav className="
          flex flex-col gap-2
          px-6 py-5
        ">
          {menu.map(([name,id]) => (
            <button
              key={id}
              onClick={() => handleNavigation(id)}
              className="
                rounded-lg
                px-4 py-3
                text-left
                text-sm
                text-slate-700
                hover:bg-blue-50
              "
            >
              {name}
            </button>
          ))}
        </nav>
      </div>

    </header>
  );
}