/* eslint-disable no-unused-expressions */

import React from 'react';
import { Helmet } from 'react-helmet';
import CardItemLarge from '../../templates/CardItemLarge/CardItemLarge';
import Image6 from '../../assets/images/Projects/Shop-albert-renn.jpeg';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Quotes = () => (

  <>
    <Helmet>
      <title>Projects - Quotes</title>
      <meta name="description" content="Projects - Quotes" />
    </Helmet>
    <Navbar />
    <CardItemLarge
      title="Breaking Bad Quotes App"
      src={Image6}
      alt="Macbook in Dark room"
      desc=" In this project I built a quote app that uses React hooks to display random breaking bad quotes."
      github="https://github.com/luke-h1/breaking-bad-quotes-react"
      site="https://breaking-bad-quotes.vercel.app/"
    />
    <Footer />
  </>

);
export default Quotes;
