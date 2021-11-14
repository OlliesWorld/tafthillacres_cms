import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import fbicon from '../images/icons8-facebook-48.png';
// import logo from '../images/Taft-Logo.png'

export default function Footer() {
  return (
    <footer  className="flex flex-col-reverse justify-center text-center  lg:flex-row md:justify-evenly pb-4 border-t-8 border-dark-tan">
      <div className="pt-2 lg:-ml-20">
        <p className="text-md m-0 ">Fort Collins Horse Boarding Facility</p>
        <p className="text-xs  pt-2 m-0">&copy; {new Date().getFullYear()}  Taft Hill Acres</p>
        <p className="mt-0 text-sm">Made with <span role="img" >💙</span> by<a href="https://roni.rocks/" target="/"> Roni</a></p>
      </div>
      <div className="-mt-8 md:-ml-20">
            <StaticImage src="../images/Logo-THA.png" alt="Taft Hill Acres"  width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                />
          </div>
      <div  className="m-auto pt-2 lg:mt-20">
        <p>
          <a href="https://www.facebook.com/TaftHillAcres/?ref=hl"  className="fb-btn"><img src={fbicon} alt="Facebook Icon" /></a>
        </p>
      </div>

    </footer >
  );
}
