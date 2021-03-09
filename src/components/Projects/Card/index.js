import React from 'react';
import PropTypes from 'prop-types';
import CardImage from './CardImage';
import CardTitle from './CardTitle';
import CardWrapper from './CardWrapper';

const Card = ({ title, image }) => (
  <CardWrapper>
    <CardImage image={image} />
    <CardTitle>{title}</CardTitle>
  </CardWrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
