import * as React from "react"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'

const Testimonial = ({blok})  => {
  return (
    <SbEditable content={blok} key={blok._uid}>
   <div className="motion-safe:animate-spin  w-10/12 md:w-full m-auto pb-20">
     <AliceCarousel autoPlay autoPlayInterval="2400"  autoHeight infinite>
        {blok.block.map((blok) => (
     
            <div key={blok._uid} className="mt-4 mr-4">
            <DynamicComponent blok={blok} />
            {/* <img className="object-cover w-full pt-3" src={blok.img} id={blok._uid} alt={blok.title} /> */}
          </div>
     
        ))}
      </AliceCarousel>
   </div>
    </SbEditable>
  )
}
export default Testimonial