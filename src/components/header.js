import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Nav from "./Nav"


const Header = ({ siteTitle}) => (
  <header className=" bg-green border-b-8 border-dark-tan md:pt-4 max-h-44">
    
  <div className="flex flex-col justify-center text-center md:mt-4">

    <h1 className="text-dark-tan m-0">
        <Link to="/" className="lg:text-6xl">{siteTitle}</Link>
    </h1>
         <p className="m-0 text-sm md:text-md lg:text-lg text-dark-tan">Fort Collins Horse Boarding Facility</p>
  </div>
  <div className="flex justify-center mb-4">
      
      <Nav/>
      
 </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
