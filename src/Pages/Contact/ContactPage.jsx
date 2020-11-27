import React from 'react';
import Helmet from 'react-helmet';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact</title>
      <meta name="description" content="Contact page" />
    </Helmet>
    <Navbar />
    <Contact />
    <Footer />
  </>
);
export default ContactPage;
