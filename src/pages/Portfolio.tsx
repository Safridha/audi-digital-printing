import { useEffect, useState } from "react";
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

const [activeImage,setActiveImage] = useState(0);
const [activeVideo,setActiveVideo] = useState(0);



useEffect(()=>{

const close = (e:KeyboardEvent)=>{

if(e.key==="Escape"){
setImageOpen(false);
setVideoOpen(false);
}

};


window.addEventListener(
"keydown",
close
);


document.body.style.overflow =
imageOpen || videoOpen
? "hidden"
: "auto";


return()=>{

window.removeEventListener(
"keydown",
close
);

document.body.style.overflow="auto";

};


},[imageOpen,videoOpen]);



return(

<section
id="portfolio"
className="
relative overflow-hidden
bg-gradient-to-b from-white via-blue-50/40 to-white
py-10
"
>


<div className="
mx-auto max-w-7xl px-5 sm:px-6
">


{/* TITLE */}

<div className="
mb-6 text-center
">

<h2 className="
text-2xl font-extrabold text-slate-900 md:text-4xl
">

Portfolio

<span className="text-blue-600">
{" "}2Audi Digital
</span>

</h2>


<p className="
mt-2 text-sm text-slate-600
">
Lihat hasil cetak dan proses produksi kami.
</p>


</div>





{/* CARD */}

<div className="
mx-auto grid max-w-5xl grid-cols-2 gap-4
">



{/* FOTO */}

<motion.button

whileTap={{scale:.97}}

onClick={()=>{
setActiveImage(0);
setImageOpen(true);
}}

className="
overflow-hidden rounded-2xl
bg-white shadow-md
hover:shadow-xl transition
"

>


<img

src={spanduk}

className="
aspect-video
h-full
w-full
object-contain
bg-slate-100
"

/>


<div className="
p-3 text-center
">

<p className="
text-xs font-bold
">
KLIK UNTUK LIHAT HASIL CETAK
</p>

</div>


</motion.button>





{/* VIDEO */}


<motion.button

whileTap={{scale:.97}}

onClick={()=>{

setActiveVideo(0);
setVideoOpen(true);

}}

className="
overflow-hidden rounded-2xl
bg-white shadow-md
hover:shadow-xl transition
"

>


<div className="
relative aspect-video bg-black
">


<video

src={prosesCetak1}

muted

className="
h-full w-full object-cover
"

/>


<div className="
absolute inset-0 flex items-center justify-center
bg-black/30
">


<span className="
rounded-full bg-white
px-4 py-3
font-bold
">

▶

</span>


</div>


</div>



<div className="
p-3 text-center
">

<p className="
text-xs font-bold
">
KLIK UNTUK LIHAT PROSES PRODUKSI
</p>

</div>



</motion.button>



</div>


</div>







{/* IMAGE MODAL */}


<AnimatePresence>

{

imageOpen && (

<motion.div

initial={{opacity:0}}

animate={{opacity:1}}

exit={{opacity:0}}

onClick={()=>setImageOpen(false)}

className="
fixed inset-0 z-[999]
flex items-center justify-center
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
top-20
z-[1000]
h-10 w-10
rounded-full
bg-white/30
text-xl
font-bold
text-white
"

>

✕

</button>




<div

onClick={(e)=>e.stopPropagation()}

className="
relative
flex
max-w-4xl
items-center
justify-center
"

>


<button

onClick={()=>setActiveImage(
activeImage===0
?
portfolioImages.length-1
:
activeImage-1
)}

className="
absolute left-2
rounded-full
bg-white/20
px-4 py-2
text-3xl
text-white
"

>

‹

</button>



<img

src={portfolioImages[activeImage]}

className="
max-h-[70vh]
max-w-[85vw]
rounded-2xl
object-contain
"

/>



<button

onClick={()=>setActiveImage(
activeImage===portfolioImages.length-1
?
0
:
activeImage+1
)}

className="
absolute right-2
rounded-full
bg-white/20
px-4 py-2
text-3xl
text-white
"

>

›

</button>


</div>



</motion.div>

)

}

</AnimatePresence>







{/* VIDEO MODAL */}


<AnimatePresence>

{

videoOpen && (

<motion.div

initial={{opacity:0}}

animate={{opacity:1}}

exit={{opacity:0}}

onClick={()=>setVideoOpen(false)}

className="
fixed inset-0 z-[999]
flex items-center justify-center
bg-black/80
p-4
"

>


<button

onClick={()=>setVideoOpen(false)}

className="
absolute
right-5 top-20
h-10 w-10
rounded-full
bg-white/30
text-white
text-xl
"

>

✕

</button>



<div

onClick={(e)=>e.stopPropagation()}

>

<video

src={portfolioVideos[activeVideo]}

controls

className="
max-h-[75vh]
max-w-[90vw]
rounded-xl
"

/>


<div className="
mt-4 flex justify-center gap-5
">


<button

onClick={()=>setActiveVideo(
activeVideo===0
?
portfolioVideos.length-1
:
activeVideo-1
)}

className="
rounded-full bg-white/20
px-5 py-2 text-white
"

>
‹
</button>



<button

onClick={()=>setActiveVideo(
activeVideo===portfolioVideos.length-1
?
0
:
activeVideo+1
)}

className="
rounded-full bg-white/20
px-5 py-2 text-white
"

>
›
</button>


</div>


</div>



</motion.div>

)

}

</AnimatePresence>




</section>

);

}