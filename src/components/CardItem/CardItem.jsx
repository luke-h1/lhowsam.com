import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.scss';
import {
  CardItem1,
  CardLink,
  CardFigure,
  CardItemInfo,
  CardText,
  CardImage,
} from './CardItemElements';

const CardItem = (props) => {
  return (
    <>
      <CardItem1>
        <CardLink className="cards__item__link" to={props.path}>
          <CardFigure data-category={props.label}>
            <CardImage src={props.src} alt="Travel" loading={props.loading} />
          </CardFigure>
          <CardItemInfo>
            <CardText>{props.text}</CardText>
          </CardItemInfo>
        </CardLink>
      </CardItem1>
    </>
  );
};
export default CardItem;
