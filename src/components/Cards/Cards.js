import React from 'react';
import './Cards.scss';
import CardItem from '../CardItem/CardItem';
import Image2 from '../../images/project-img-2.jpeg';
import Image3 from '../../images/project-img-3.jpeg';
import Image4 from '../../images/project-img-4.jpeg';
import Image5 from '../../images/project-img-5.jpeg';
const Cards = () => {
  return (
    <div className="cards">
      <h1>check out these destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Image2}
              text="Drink Recipe Site"
              label="React, SASS"
              path="/projects/drink-recipe-site"
            />
            <CardItem
              src={Image3}
              text="Automation"
              label="Ansible, Bash"
              path="/projects/Automation"
            />
            <CardItem
              src={Image4}
              text="Form Validator"
              label="Vanilla JS"
              path="/projects/form-validator"
            />
            <CardItem
              src={Image5}
              text="Quotes App"
              label="Vanilla JS"
              path="/projects/quotes-app"
            />
            {/* Add new ul after 4 cards */}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Cards;
