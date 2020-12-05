import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Container,
  Intro,
  Instructions,
  NotFoundLink,
  ArrowIcon,
} from './FourOhFourElements';

const fourOhFour = ({
  linkOne,
  linkTwo,
  linkThree,
  fourOhFourTitle,
  instructions,
}) => (
  <Wrapper>
    <Helmet>
      <title>404 not found</title>
      <meta name="description" content="404 not found" />
    </Helmet>
    <Container>
      <Intro>
        {fourOhFourTitle}
        {' '}
        <span role="img" aria-label="not found">
          🤔
        </span>
      </Intro>
      <Instructions>{instructions}</Instructions>

      <NotFoundLink to="/" aria-label="Home">
        {linkOne}
        <ArrowIcon />
      </NotFoundLink>
      <NotFoundLink to="/projects" aria-label="projects">
        {linkTwo}
        <ArrowIcon />
      </NotFoundLink>
      <NotFoundLink to="/contact" aria-label="contact">
        {linkThree}
        <ArrowIcon />
      </NotFoundLink>
    </Container>
  </Wrapper>
);

fourOhFour.defaultProps = {
  fourOhFourTitle: "404 - The Page you're looking for doesn't exist",
  instructions: 'Find your way back to the right page:',
  linkOne: 'Home',
  linkTwo: 'Projects',
  linkThree: 'Contact',
};

fourOhFour.propTypes = {
  fourOhFourTitle: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  linkOne: PropTypes.string.isRequired,
  linkTwo: PropTypes.string.isRequired,
  linkThree: PropTypes.string.isRequired,
};

export default fourOhFour;
