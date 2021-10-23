import * as React from "react"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const Carousel = ({blok})  => {
  return (
    
   <div className="h-1/4 w-1/2 m-auto">
     <AliceCarousel autoPlay autoPlayInterval="2400"  autoHeight infinite>
        {blok.block.map((blok) => (
     
          <img key={blok._uid} className="object-cover" src={blok.img} id={blok._uid} alt={blok.title} />
     
        ))}
      </AliceCarousel>
   </div>
    
  )
}
export default Carousel