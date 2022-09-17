import * as React from "react"
import {  graphql } from "gatsby"

import SbEditable from 'storyblok-react'
import Layout from "../components/Layout"
import Seo from "../components/seo"
import DynamicComponent from "../components/DynamicComponent"
import useStoryblok from "../lib/storyblok"

const IndexPage = ({data, location}) => {
  let story = data.storyblokEntry
  story = useStoryblok(story, location)

    const components = story.content.body.map(blok => {
    return (<DynamicComponent blok={blok} key={blok._uid} />)
  })
 

  return (
  <Layout>
    <SbEditable content={story.content}>
    <Seo title="Taft Hill Acres Horse Boarding Facility, close to CSU" />
    
    {components}
     
    </SbEditable>
  </Layout>
)}

export default IndexPage
export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: {eq: "home"}) {
      content
      name
    }
  }
`