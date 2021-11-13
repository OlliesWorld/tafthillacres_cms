import React from 'react'
import SbEditable from 'storyblok-react'

const Image = ({blok}) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="">
       <img className="object-cover m-auto md:w-1/2 max-h-80" src={blok.img} id={blok._uid} alt={blok.title} width={300}/>
       </div>
    </SbEditable>
    )
}

export default Image
