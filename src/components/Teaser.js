import React from 'react'
import SbEditable from 'storyblok-react'

const Slider = ({blok}) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="w-full mb-4">
       <img className="object-contain m-auto" src={blok.img} id={blok._uid} alt={blok.title} width={400}/>
       </div>
    </SbEditable>
    )
}

export default Slider