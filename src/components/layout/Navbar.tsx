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

    if(location.hash){

      setTimeout(()=>{

        document
          .getElementById(location.hash.replace("#",""))
          ?.scrollIntoView({
            behavior:"smooth",
            block:"start"
          });

      },100);

    }

  },[location]);



  const handleNavigation = (id:string)=>{

    setOpenMenu(false);

    if(location.pathname !== "/"){
      navigate(`/#${id}`);
      return;
    }

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior:"smooth",
        block:"start"
      });

  };



  return (

<header
className="
sticky
top-0
z-50
h-20
border-b
border-slate-200/50
bg-white/90
backdrop-blur-xl
"
>


{/* DESKTOP */}

<div
className="
hidden
md:flex
mx-auto
h-full
max-w-7xl
items-center
justify-between
px-6
"
>


{/* LOGO DESKTOP */}

<button
onClick={()=>navigate("/")}
className="
h-12
w-32
overflow-hidden
flex
items-center
"
>

<img
src={logo}
alt="2Audi Digital Printing"
className="
w-full
h-full
object-contain
"
/>

</button>



{/* MENU */}

<nav
className="
flex
items-center
gap-8
"
>

{
menu.map(([name,id])=>(

<button
key={id}
onClick={()=>handleNavigation(id)}
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

))
}

</nav>


</div>





{/* MOBILE */}

<div
className="
flex
md:hidden
h-full
items-center
justify-between
px-5
"
>


{/* LOGO MOBILE */}

<button
onClick={()=>navigate("/")}
className="
h-10
w-24
overflow-hidden
flex
items-center
"
>

<img
src={logo}
alt="2Audi Digital Printing"
className="
w-full
h-full
object-contain
"
/>

</button>



{/* MENU BUTTON */}

<button
onClick={()=>setOpenMenu(!openMenu)}
className="
h-10
w-10
rounded-lg
border
border-slate-200
text-xl
text-slate-700
"
>

{
openMenu
?
"✕"
:
"☰"
}

</button>


</div>





{/* MOBILE MENU */}

<div
className={`
md:hidden
overflow-hidden
bg-white
border-t
transition-all
duration-300

${
openMenu
?
"max-h-96"
:
"max-h-0"
}

`}
>


<nav
className="
flex
flex-col
gap-2
px-5
py-5
"
>

{
menu.map(([name,id])=>(

<button
key={id}
onClick={()=>handleNavigation(id)}
className="
rounded-lg
px-4
py-3
text-left
text-sm
text-slate-700
transition
hover:bg-blue-50
hover:text-blue-600
"
>

{name}

</button>

))
}

</nav>


</div>



</header>

  );
}