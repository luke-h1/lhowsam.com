import React from 'react';
import CardItemLarge from '../../CardItem/CardItemLarge/CardItemLarge';
import Image6 from '../../../assets/images/Projects/Shop-albert-renn.jpeg';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
const Quotes = () => {
  return (
    <>
      <Navbar />
      <CardItemLarge
        title="Breaking Bad Quotes App"
        src={Image6}
        alt="Macbook in Dark room"
        desc=" In this project I built a quote app that uses React hooks to display random breaking bad quotes."
        github="https://github.com/luke-h1/breaking-bad-quotes-react"
        site="https://breaking-bad-quotes.vercel.app/"
      ></CardItemLarge>
      <Footer />
    </>
  );
};
export default Quotes;
