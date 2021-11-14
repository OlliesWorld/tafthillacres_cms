import * as React from "react"

 
import Layout from "../components/Layout"
import Seo from "../components/seo"
import DynamicComponent from "../components/DynamicComponent"
import useStoryblok from "../lib/storyblok"
 
const Page = ({ pageContext, location }) => { 
  let story = pageContext.story
  story = useStoryblok(story, location)
 
  const components = story.content.body.map(blok => {
    return (<DynamicComponent blok={blok} key={blok._uid} />)
  })
 
  return (
  <Layout>
    <Seo title="Taft Hill Acres" />
    {/* <h1>{ story.content.title }</h1> */}
    { components }
    
  </Layout>
)}
 
export default Page
