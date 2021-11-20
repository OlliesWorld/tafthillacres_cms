import * as React from "react"



const Gallery = ({blok})  => {
 
  return (
    
   <div className="container m-auto">
     <div className="flex  flex-wrap">
     
          {blok.block.map((blok) => (
     
            <img key={blok._uid}
              className="h-48 w-36 flex-grow object-contain"
              src={blok.img} id={blok._uid} alt={blok.title}
     
              />
     
          ))}
     
     </div>
   </div>
    
  )
}
export default Gallery
