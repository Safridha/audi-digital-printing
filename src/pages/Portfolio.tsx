import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import spanduk from "../assets/images/portfolio/spanduk.png";
import xbanner from "../assets/images/portfolio/xbanner.png";
import bendera from "../assets/images/portfolio/bendera.png";


import prosesCetak1 from "../assets/video/portfolio/proses-cetak-1.mp4";
import prosesCetak2 from "../assets/video/portfolio/proses-cetak-2.mp4";



const portfolioImages = [
  spanduk,
  xbanner,
  bendera,
  spanduk,
  xbanner,
];


const portfolioVideos = [
  prosesCetak1,
  prosesCetak2,
];





export default function Portfolio(){


  const [imageOpen,setImageOpen] = useState(false);
  const [videoOpen,setVideoOpen] = useState(false);



  return (

<section
id="portfolio"
className="
relative
overflow-hidden
bg-gradient-to-b
from-white
via-blue-50/40
to-white
py-10
"
>


<div
className="
pointer-events-none
absolute
-right-32
top-0
h-64
w-64
rounded-full
bg-blue-400/20
blur-3xl
"
/>




<div
className="
mx-auto
max-w-7xl
px-5
sm:px-6
"
>




{/* HEADER */}

<div
className="
mb-6
text-center
"
>

<h2
className="
text-2xl
font-extrabold
text-slate-900
md:text-4xl
"
>

Portfolio
<span className="text-blue-600">
{" "}2Audi Digital
</span>

</h2>


<p
className="
mt-2
text-xs
text-slate-600
sm:text-sm
"
>
Lihat hasil cetak dan proses produksi kami.
</p>


</div>








{/* CARD MENU */}


<div
className="
mx-auto
grid
max-w-5xl
grid-cols-2
gap-3
md:gap-5
"
>




{/* IMAGE CARD */}


<motion.button

whileTap={{
scale:.97
}}

onClick={()=>setImageOpen(true)}

className="
overflow-hidden
rounded-2xl
bg-white
shadow-md
transition
hover:shadow-xl
"

>


<div
className="
aspect-video
flex
items-center
justify-center
overflow-hidden
bg-slate-100
"
>


<img

src={spanduk}

alt="hasil cetak"

className="
max-h-full
max-w-full
object-contain
transition
duration-500
hover:scale-105
"

/>


</div>



<div
className="
p-2.5
text-center
"
>

<p
className="
text-xs
font-bold
text-slate-900
sm:text-sm
"
>
KLIK UNTUK LIHAT HASIL CETAK
</p>


</div>



</motion.button>










{/* VIDEO CARD */}


<motion.button

whileTap={{
scale:.97
}}

onClick={()=>setVideoOpen(true)}

className="
overflow-hidden
rounded-2xl
bg-white
shadow-md
transition
hover:shadow-xl
"

>


<div
className="
relative
aspect-video
overflow-hidden
bg-black
"
>


<video

src={prosesCetak1}

muted

preload="metadata"

className="
h-full
w-full
object-cover
"

/>



<div
className="
absolute
inset-0
flex
items-center
justify-center
bg-black/20
"
>


<span
className="
flex
h-10
w-10
items-center
justify-center
rounded-full
bg-white
text-sm
font-bold
shadow-lg
"
>
▶
</span>


</div>


</div>




<div
className="
p-2.5
text-center
"
>

<p
className="
text-xs
font-bold
text-slate-900
sm:text-sm
"
>
KLIK UNTUK LIHAT PROSES PRODUKSI
</p>


</div>


</motion.button>



</div>






</div>



{/* IMAGE POPUP */}


<AnimatePresence>

{
imageOpen && (

<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

exit={{
opacity:0
}}

className="
fixed
inset-0
z-[100]
flex
items-center
justify-center
bg-black/80
backdrop-blur-sm
p-4
"

>


<button

onClick={()=>setImageOpen(false)}

className="
absolute
right-5
top-5
z-30
flex
h-10
w-10
items-center
justify-center
rounded-full
bg-white/20
text-xl
font-bold
text-white
backdrop-blur-md
"

>
✕
</button>





<div
className="
relative
w-full
max-w-4xl
overflow-hidden
rounded-3xl
bg-white/10
p-3
"
>


{/* SWIPE INFO */}

<div
className="
absolute
bottom-5
left-1/2
z-20
-translate-x-1/2
rounded-full
bg-white/20
px-4
py-2
text-xs
font-medium
text-white
backdrop-blur-md
"
>
← Geser untuk melihat foto lainnya →
</div>





<div

className="
flex
gap-5
overflow-x-auto
snap-x
snap-mandatory
scroll-smooth
"

>


{
portfolioImages.map((img,index)=>(


<div

key={index}

className="
flex
min-w-full
snap-center
items-center
justify-center
"

>


<img

src={img}

alt="portfolio"

className="
max-h-[75vh]
max-w-full
rounded-2xl
object-contain
shadow-2xl
"

/>


</div>


))

}



</div>


</div>



</motion.div>

)

}

</AnimatePresence>









{/* VIDEO POPUP */}


<AnimatePresence>

{
videoOpen && (

<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

exit={{
opacity:0
}}

className="
fixed
inset-0
z-[100]
flex
items-center
justify-center
bg-black/80
backdrop-blur-sm
p-4
"

>


<button

onClick={()=>setVideoOpen(false)}

className="
absolute
right-5
top-5
z-30
flex
h-10
w-10
items-center
justify-center
rounded-full
bg-white/20
text-xl
font-bold
text-white
backdrop-blur-md
"

>
✕
</button>





<div

className="
relative
w-full
max-w-4xl
overflow-hidden
rounded-3xl
bg-black/30
p-3
"

>


{/* SWIPE INFO */}

<div
className="
absolute
bottom-5
left-1/2
z-20
-translate-x-1/2
rounded-full
bg-white/20
px-4
py-2
text-xs
font-medium
text-white
backdrop-blur-md
"
>
← Geser untuk melihat video lainnya →
</div>





<div

className="
flex
gap-5
overflow-x-auto
snap-x
snap-mandatory
"

>


{
portfolioVideos.map((video,index)=>(


<div

key={index}

className="
flex
min-w-full
snap-center
items-center
justify-center
"

>


<video

src={video}

controls

className="
max-h-[75vh]
w-full
rounded-2xl
object-contain
"

/>


</div>


))

}



</div>


</div>




</motion.div>

)

}

</AnimatePresence>





</section>

);

}