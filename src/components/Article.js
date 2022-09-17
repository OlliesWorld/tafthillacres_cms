import React from 'react'
import SbEditable from 'storyblok-react'
import { render} from 'storyblok-rich-text-react-renderer'



const Article = ({blok}) => {
  // const text = typeof blok.text === 'string' ? blok.text : render(blok.text)
  // console.log(render(blok.text))
  const key = typeof blok._editable !== 'undefined' ? blok._uid + '-edit' : blok._uid
  return (
    
  <SbEditable content={blok} key={key}>      
     <div className="text-center text-tan w-11/12 md:w-3/4 m-auto"> {render(blok.text)}</div>  
  </SbEditable>

  )
  }

export default Article
