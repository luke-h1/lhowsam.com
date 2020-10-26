import React, { Fragment } from 'react';
import CardItemLarge from '../../CardItem/CardItemLarge/CardItemLarge';
import Image2 from '../../../Images/Projects/Image2.jpeg';
import '../../CardItem/CardItemLarge/CardItemLarge.scss'

const DrinkApp = () => {
  return (
    <Fragment>
      <CardItemLarge
        title="Drink Recipe App"
        src={Image2}
        alt="Drink recipe app"
        desc="In this app I made a drink recipe app using React hooks that
         pulls data from the DrinkDB API. This was a really fun project to work on and was one of the first projects I converted to React JS (from vanilla JS)"
        label="React, Vanilla JS, CSS"
        github="https://github.com/luke-h1/cocktail-recipe-app "
        site="https://cocktail-recipe-app.vercel.app/"
      ></CardItemLarge>
    </Fragment>
  );
};
export default DrinkApp;