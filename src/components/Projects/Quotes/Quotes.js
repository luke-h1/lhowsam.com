import React, { Fragment } from 'react';
import CardItemLarge from '../../CardItem/CardItemLarge/CardItemLarge';
import Image6 from '../../../Images/Projects/Image6.jpeg';
import '../../CardItem/CardItemLarge/CardItemLarge.scss'
const Quotes = () => {
  return (
    <Fragment>
      <CardItemLarge
        title="Quotes App"
        src={Image6}
        alt="Macbook in Dark room"
        desc=" In this project I made a quotes app that pulls data from the anime-chan API with vanilla Javascript and materialize CSS. This was a really intuitive
        API to work with and made the development of this app enjoyable."
        label="Vanilla JS, infinite scroll"
        github="https://github.com/luke-h1/anime-quotes-app"
        site="https://anime-quotes-app.vercel.app/"
      ></CardItemLarge>
    </Fragment>
  );
};
export default Quotes;