import * as React from "react"



const Gallery = ({blok})  => {
 
  return (
    
   <div className="gallery p-4 ">
    
 
          {blok.block.map((blok) => (
     <li className="gallery-img">
            <img key={blok._uid}
            className="w-full h-full object-cover"
              src={blok.img} id={blok._uid} alt={blok.title}
             
              />
     </li>
          ))}
     
    
   </div>
    
  )
}
export default Gallery
