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
        
        <button type="button" className="block ml-20 lg:hidden" onClick={handleClick}>
    <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {isOpen && (
        <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
        )}
        {!isOpen && (
        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
        )}
    </svg>
</button>
        <div className="w-full md:w-auto md:flex-grow md:flex md:items-center ">
          <ul className={`lg:flex ${  isOpen ? "block" : "hidden" } `}>
          
                
           {Navigation &&
              Navigation.allStoryblokEntry.edges.map((edge) => (
                 
                <li key={edge.node.uuid}>
                 <Link to={`/${(edge.node.full_slug)}`} prefetch="true" className="lg:w-full w-1/2 block px-4 py-1 md:p-2 rounded-lg text-tan uppercase hover:bg-dark-tan">
                     {edge.node.name} 
                   </Link> 
                   </li>
              ))}
              <li><Link to="/Contact" 
              className="block lg:w-full  w-1/2 uppercase px-4 py-1 md:p-2 rounded-lg lg:px-4 text-tan  hover:bg-dark-tan"
              >Contact</Link></li>
          </ul>
          </div>
           
        
      </div>
              
    </nav>
  </div>
 
  
)
};
  export default Nav
