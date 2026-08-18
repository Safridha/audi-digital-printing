import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/logo-2audi.png";
import { products } from "../../data/products";


export default function Navbar(){

  const navigate = useNavigate();
  const location = useLocation();

  const [openMenu,setOpenMenu] = useState(false);
  const [search,setSearch] = useState("");


  const menu=[
    ["Home","home"],
    ["Layanan","services"],
    ["Keunggulan","advantages"],
    ["Portfolio","portfolio"],
    ["Cara Order","order"],
    ["Kontak","contact"],
  ];


  const result = products
    .filter(item =>
      item.title
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .slice(0,5);



  useEffect(()=>{

    if(location.hash){

      setTimeout(()=>{

        document
          .getElementById(location.hash.replace("#",""))
          ?.scrollIntoView({
            behavior:"smooth",
            block:"start"
          });

      },150);

    }

  },[location]);




  const goTo=(id:string)=>{

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



  return(

<header
className="
fixed
top-0
left-0
z-[999]
h-20
w-full
bg-white/95
backdrop-blur-xl
border-b
border-slate-200/70
shadow-sm
"
>


<div
className="
relative
mx-auto
flex
h-full
max-w-7xl
items-center
px-5
sm:px-6
"
>



{/* LOGO */}

<button
onClick={()=>navigate("/")}
className="
flex
h-14
w-28
items-center
"
>

<img
src={logo}
alt="2Audi Digital Printing"
className="
h-full
w-full
object-contain
"
/>

</button>





{/* SEARCH CENTER */}

<div
className="
absolute
left-1/2
hidden
-translate-x-1/2
md:block
"
>

<input
value={search}
onChange={(e)=>setSearch(e.target.value)}
placeholder="Cari produk..."
className="
w-56
rounded-xl
border
border-slate-200
px-4
py-2
text-sm
outline-none
transition
focus:border-blue-600
"
/>



{
search && result.length > 0 && (

<div
className="
absolute
top-12
left-0
w-56
rounded-xl
border
border-slate-100
bg-white
p-2
shadow-xl
"
>

{
result.map(item=>(

<button
key={item.slug}
onClick={()=>{

navigate(`/produk/${item.slug}`);
setSearch("");

}}
className="
block
w-full
rounded-lg
px-3
py-2
text-left
text-sm
hover:bg-blue-50
"
>

{item.title}

</button>

))
}

</div>

)
}


</div>







{/* DESKTOP MENU */}

<nav
className="
ml-auto
hidden
items-center
gap-7
md:flex
"
>

{
menu.map(([name,id])=>(

<button
key={id}
onClick={()=>goTo(id)}
className="
text-sm
font-medium
text-slate-700
transition
hover:text-blue-600
"
>

{name}

</button>

))
}

</nav>






{/* MOBILE BUTTON */}

<button
onClick={()=>setOpenMenu(!openMenu)}
className="
ml-auto
flex
h-10
w-10
items-center
justify-center
rounded-xl
border
border-slate-200
text-xl
text-slate-700
md:hidden
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
absolute
top-20
left-0
w-full
overflow-hidden
bg-white
border-b
transition-all
duration-300
md:hidden

${
openMenu
?
"max-h-[600px]"
:
"max-h-0"
}

`}
>


<div
className="
px-5
py-5
"
>


<input
value={search}
onChange={(e)=>setSearch(e.target.value)}
placeholder="Cari produk..."
className="
mb-4
w-full
rounded-xl
border
border-slate-200
px-4
py-3
text-sm
"
/>



{
search && result.map(item=>(

<button
key={item.slug}
onClick={()=>{

navigate(`/produk/${item.slug}`);
setSearch("");
setOpenMenu(false);

}}
className="
block
w-full
rounded-lg
px-3
py-2
text-left
text-sm
hover:bg-blue-50
"
>

{item.title}

</button>

))
}




{
menu.map(([name,id])=>(

<button
key={id}
onClick={()=>goTo(id)}
className="
mb-1
block
w-full
rounded-xl
px-4
py-3
text-left
text-sm
text-slate-700
hover:bg-blue-50
"
>

{name}

</button>

))
}



</div>


</div>



</header>

  );
}