import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/logo-2audi.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  const menu = [
    ["Home", "home"],
    ["Layanan", "services"],
    ["Keunggulan", "advantages"],
    ["Portfolio", "portfolio"],
    ["Cara Order", "order"],
    ["Kontak", "contact"],
  ];

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 100);
    }
  }, [location]);

  const handleNavigation = (section: string) => {
    setOpenMenu(false);

    if (location.pathname !== "/") {
      navigate(`/#${section}`);
      return;
    }

    document
      .getElementById(section)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

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
          px-5
          sm:px-6
        "
      >

        {/* LOGO */}
        <button
          onClick={() => navigate("/")}
          className="
            flex
            h-12
            w-32
            items-center
            overflow-hidden
          "
        >
          <img
            src={logo}
            alt="2Audi Digital Printing"
            className="
              h-20
              w-auto
              max-w-none
              object-contain
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
          {menu.map(([name, id]) => (
            <button
              key={id}
              onClick={() => handleNavigation(id)}
              className="
                whitespace-nowrap
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
            px-5
            py-4
          "
        >
          {menu.map(([name, id]) => (
            <button
              key={id}
              onClick={() => handleNavigation(id)}
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
              {name}
            </button>
          ))}
        </nav>
      </div>

    </header>
  );
}