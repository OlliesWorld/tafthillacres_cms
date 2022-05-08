import {Link} from 'gatsby'
import React, {useState} from 'react'

import {  useStaticQuery, graphql } from 'gatsby'

const Nav = () => {
  const Navigation = useStaticQuery(graphql`
    query {
      allStoryblokEntry(sort: {fields: created_at}) {
        edges {
          node {
            name
            slug
            full_slug
            uuid
            created_at
          }
        }
    }
  } 
  `)
  const [isOpen, setisOpen] = useState(false);
  function handleClick() {
    setisOpen(!isOpen);
  }
  //  console.log(Navigation)

return (
  <div className="w-half mt-4">
   
    <nav className="m-0 ">
      <div className="container mx-auto flex flex-wrap items-center md:flex-no-wrap">
        
        <button type="button" className="inline-block z-10 lg:hidden bg-dark-tan" onClick={handleClick}>
    <svg className="h-10 w-10 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {isOpen && (
        <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
        )}
        {!isOpen && (
        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
        )}
    </svg>
</button>
        <div className="z-10 w-full text-center text-lg md:w-auto md:flex-grow flex md:items-center bg-dark-tan bg-opacity-90 lg:bg-transparent">
          <ul className={`lg:flex ${  isOpen ? "block" : "hidden" } `}>
          
                
           {Navigation &&
              Navigation.allStoryblokEntry.edges.map((edge) => (
                 
                <li key={edge.node.uuid}>
                 <Link to={`/${(edge.node.full_slug)}`} prefetch="true" className="w-full block lg:px-4 py-1 md:p-2 rounded-lg text-2xl text-green lg:text-tan uppercase hover:underline">
                     {edge.node.name} 
                   </Link> 
                   </li>
              ))}
              <li><Link to="/Contact" 
              className="block w-full  uppercase px-4 py-1 md:p-2 rounded-lg lg:px-4 text-green text-2xl lg:text-tan hover:bg-dark-tan"
              >Contact</Link></li>
          </ul>
          </div>
           
        
      </div>
              
    </nav>
  </div>
 
  
)
};
  export default Nav
