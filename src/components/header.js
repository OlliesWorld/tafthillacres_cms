import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import ThemeToggle from '../components/themeToggle'
import Nav from "./Nav"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle, siteDescription }) => (
  <header className=" bg-green border-b-8 border-dark-tan pt-4 max-h-44">
  <h1 className="text-tan text-center m-0 h-1/2 ">
        <Link
          to="/"
          className="text-main "
        >
          {siteTitle}
        </Link>
      
        </h1>
  <div className="flex justify-evenly">
    <div className="-mt-12 -ml-8 pb-4">
        <StaticImage src="../images/Logo-THA.png" alt="Taft Hill Acres"  width={200}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                />
    </div>  
      
      <Nav />
      <div className="text-tan  pt-2">
          <ThemeToggle  />
      </div>
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
