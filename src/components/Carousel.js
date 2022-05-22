import * as React from "react"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';




const Carousel = ({blok})  => { 
  
  return (
    
   <div className="  h-full w-full md:h-3/4 md:w-3/4 m-auto">
     <AliceCarousel autoPlay autoPlayInterval="3400" infinite animationType="fadeout" animationDuration={800}>
     {blok.block.map((blok) => (
     
     <img key={blok._uid} className="object-cover max-h-80 w-3/4 m-auto" src={blok.img} id={blok._uid} alt={blok.title}  width={600} height={300} />

   ))}
      </AliceCarousel>
   </div>
    
  )
}


export default  Carousel
