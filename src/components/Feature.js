import * as React from "react"
import SbEditable from 'storyblok-react'
 
const Feature = ({ blok }) => (
    <SbEditable content={blok} key={blok._uid}>
    <div className="container w-3/5 bg-bg-light m-auto mb-8">
      <div className="p-6  ">
        <h2 className="text-md text-dark-tan mb-0">
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