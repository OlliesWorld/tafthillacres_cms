import * as React from "react"
import SbEditable from 'storyblok-react'
 
const Feature = ({ blok }) => (
    <SbEditable content={blok} key={blok._uid}>
    <div className="container md:w-3/4 lg:w-3/5  m-auto mb-8">
      <div className="p-6  bg-tan">
        <h2 className="text-md text-dark-tan mb-0 rounded-sm">
          { blok.subtitle }
      </h2>
      <h2 className="text-xlg uppercase text-text-dark text-center">
          { blok.title }
      </h2>
      <p className="leading-normal text-text-dark">
          {blok.description}
      </p>
      </div>
    </div>
    </SbEditable>
)
 
export default Feature