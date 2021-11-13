import * as React from "react"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const Carousel = ({blok})  => {
  return (
    
   <div className="h-full w-full md:h-3/4 md:w-3/4 m-auto">
     <AliceCarousel autoPlay autoPlayInterval="2400"  autoHeight infinite>
        {blok.block.map((blok) => (
     
          <img key={blok._uid} className="object-cover m-auto" src={blok.img} id={blok._uid} alt={blok.title} />
     
        ))}
      </AliceCarousel>
   </div>
    
  )
}
export default Carousel