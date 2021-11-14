import React from 'react';

import Layout from '../components/Layout';
// import ContactFormPage from '../components/Form';

import ContactForm from '../components/form';

const ContactPage = () => (
    <Layout activeLink="contact">
      
        
        
                <div className="container md:flex w-full">
                    <div className="pt-2 text-center">
                        <h2>Send Us A Message</h2>
                    <ContactForm />
                        
                    </div>
                
                <div className="container px-4 m-auto text-center">
                    
                        <p className="w-half">We are conveniently located within 2 miles of CSU, and Old Town. There is direct access to the Poudre Trail and close access to Lory State Park and Reservoir Ridge.</p>
                   

                

    
            <p className="">
                1012 N Taft Hill Rd <br />
                Fort Collins, CO 80521
                        </p>
       
        </div>
        </div>
    </Layout >
);

export default ContactPage;