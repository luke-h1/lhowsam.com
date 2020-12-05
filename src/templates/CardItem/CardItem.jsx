import React from 'react';
import PropTypes from 'prop-types';
import {
  CardItem1,
  CardLink,
  CardFigure,
  CardItemInfo,
  CardText,
  CardImage,
} from './CardItemElements';

const CardItem = (props) => {
  const {
    path, label, src, loading, text,
  } = props;

  return (
    <>
      <CardItem1>
        <CardLink className="cards__item__link" to={path}>
          <CardFigure data-category={label}>
            <CardImage src={src} alt="Travel" loading={loading} />
          </CardFigure>
          <CardItemInfo>
            <CardText>{text}</CardText>
          </CardItemInfo>
        </CardLink>
      </CardItem1>
    </>
  );
};

CardItem.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  loading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CardItem;
