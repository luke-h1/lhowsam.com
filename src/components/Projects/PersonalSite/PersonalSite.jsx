import React from 'react';
import CardItemLarge from '../../CardItem/CardItemLarge/CardItemLarge';
import Image1 from '../../../Images/Projects/Image1.jpeg';

const PersonalSite = () => {
  return (
    <>
      <CardItemLarge
        title="Personal Site (This one!)"
        src={Image1}
        alt="Neon sign that says: Coffee"
        desc="This is a project I've worked on since I started learning web development. It has been through many iterations (Vanilla JS, to React for example) and it has helped me challenge myself and learn a lot about web development in general. I've really enjoyed spending time improving and thinking of new features I can add to this site."
        label="React, Vanilla JS, SCSS, CSS"
        github="https://github.com/luke-h1/lhowsam.com"
        site="https://lhowsam.com"
      ></CardItemLarge>
    </>
  );
};
export default PersonalSite;
