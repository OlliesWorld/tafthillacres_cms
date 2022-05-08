import React from 'react'
import SbEditable from 'storyblok-react'

const Image = ({blok}) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="">
       <img className="object-cover m-auto" src={blok.img} id={blok._uid} alt={blok.title} width={600} height={300}/>
       </div>
    </SbEditable>
    )
}

export default Image
