import React from 'react'
import SbEditable from 'storyblok-react'
import Feature from './Feature'
import Teaser from './Teaser'
import Carousel from './Carousel'
import Gallery from './Gallery'
import Article from './Article'
import Testimonial from './Testimonial'
import Image from './Image' 

const Components = {
  'feature': Feature,
  'teaser': Teaser,
  'carousel': Carousel,
  'gallery': Gallery,
  'article': Article,
  'testimonial': Testimonial,
  'image': Image,
}
 
const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return (<SbEditable content={blok}><Component blok={blok} /></SbEditable>)
  }
  return (<p>The component <strong>{blok.component}</strong> has not been created yet.</p>)
}
 
export default DynamicComponent