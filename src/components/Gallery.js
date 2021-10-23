import * as React from "react"




const Gallery = ({blok})  => {
 
  // function scale() {
  //   console.log('clicked')
  //   // img.style.transform = scale(3);
  // }
 
  return (
    
   <div className="grid grid-cols-4 container md:mx-16">
     
        {blok.block.map((blok) => (
     
          <img key={blok._uid} 
            className="max-h-64 px-2" 
            src={blok.img} id={blok._uid} alt={blok.title}
             
            // onClick={(e) => blok._uid.style.width='800'
            />
     
        ))}
      
   </div>
    
  )
}
export default Gallery