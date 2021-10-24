import React from 'react'
import Layout from '../components/Layout';

import { StaticImage } from 'gatsby-plugin-image';


const ThanksPage = () => (
    <Layout >
        <section className="container md:flex justify-center m-auto">
        <StaticImage src="../images/Wyatt.jpg" alt="Taft Hill Acres"  width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                />
                <div class="w-1/2 ml-12 mt-20">
                <h2 className=""><span role="img" aria-label="horse face emoji">🐴</span> Thank you for sending a message! <span role="img" aria-label="horse face emoji">🐴</span><br/> We will neigh at you later!</h2>
            
                
            </div>
        </section>
    </Layout >
);

export default ThanksPage;