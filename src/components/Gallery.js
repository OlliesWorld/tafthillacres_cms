import * as React from "react"



const Gallery = ({blok})  => {
 
  return (
    
   <div className="grid grid-cols-4 justify-center container md:mx-16">
     
        {blok.block.map((blok) => (
     
          <img key={blok._uid} 
            className="max-h-64" 
            src={blok.img} id={blok._uid} alt={blok.title}
             
            // onClick={(e) => blok._uid.style.width='800'
            />
          
        ))}
      
   </div>
    
  )
}
export default Gallery
