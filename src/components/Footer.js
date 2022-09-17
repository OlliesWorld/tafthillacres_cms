import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import fbicon from '../images/icons8-facebook-48.png';

export default function Footer() {
  return (
    <footer className="bg-green flex flex-col-reverse text-center lg:flex-row   border-t-8 border-dark-tan">
      <div className="m-auto pt-12 text-tan">
        <p className="text-md justify-center ">Fort Collins Horse Boarding Facility</p>
        <p className="text-xs  pt-2 m-0">&copy; {new Date().getFullYear()}  Taft Hill Acres</p>
        <p className="mt-0 text-sm">Made with <span role="img" >💙</span> by<a href="https://roni.rocks/" target="/"> Roni</a></p>
      </div>
      <div className="m-auto">
            <StaticImage src="../images/Logo-THA.png" alt="Taft Hill Acres"  width={300}/>
          </div>
      <div  className="m-auto pt-2 ">
        <p>
          <a href="https://www.facebook.com/TaftHillAcres/?ref=hl"  className="fb-btn"><img src={fbicon} alt="Facebook Icon" /></a>
        </p>
      </div>

    </footer >
  );
}
