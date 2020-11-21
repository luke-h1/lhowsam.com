import React from 'react';
import CardItemLarge from '../../CardItem/CardItemLarge/CardItemLarge';
import Image6 from '../../../images/Projects/Shop-albert-renn.jpeg';
import '../../CardItem/CardItemLarge/CardItemLarge.scss';
const Quotes = () => {
  return (
    <>
      <CardItemLarge
        title="Breaking Bad Quotes App"
        src={Image6}
        alt="Macbook in Dark room"
        desc=" In this project I built a quote app that uses React hooks to display random breaking bad quotes."
        github="https://github.com/luke-h1/breaking-bad-quotes-react"
        site="https://breaking-bad-quotes.vercel.app/"
      ></CardItemLarge>
    </>
  );
};
export default Quotes;
