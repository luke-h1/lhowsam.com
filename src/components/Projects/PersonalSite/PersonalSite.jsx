import React from 'react';
import CardItemLarge from '../../CardItem/CardItemLarge/CardItemLarge';
import Image1 from '../../../assets/images/Projects/Coffee-jon-tyson.jpeg';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const PersonalSite = () => (
  <>
    <Navbar />
    <CardItemLarge
      title="Personal Site (This one!)"
      src={Image1}
      alt="Neon sign that says: Coffee"
      desc="This is a project I've worked on since I started learning web development. It has been through many iterations (Vanilla javascript to React, CSS to SASS and SASS to styled components to name a few...) and it has helped me challenge myself and learn a lot about web development in general. I've really enjoyed spending time improving this site and thinking of new features I can add to this site. I plan on remaking this site into a gatsby site and integrate GraphQL to simplify querying for data"
      label="Javascript, React,CSS, SCSS, styled-components"
      github="https://github.com/luke-h1/lhowsam.com"
      site="https://lhowsam.com"
    />
    <Footer />
  </>
);
export default PersonalSite;
