import React from 'react';
import CardItemLarge from '../../CardItem/CardItemLarge/CardItemLarge';
import Image4 from '../../../assets/images/Projects/pattern-ahmad-dirini.jpeg';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const FormValidator = () => {
  return (
    <>
      <Navbar />
      <CardItemLarge
        title="Form Validator"
        src={Image4}
        alt="Dark room with lights hanging from the ceiling"
        desc="In this project I built a form validator that uses built in
        javascript regular expressions to validate name, email, postcode
        & phone numbers. I also performed numerous automated and manual tests on the application to ensure that the regex functioned as expected."
        label="Vanilla JS"
        github="javascript-regex-validation-form"
        site="https://javascript-regex-validation-form.vercel.app/"
      ></CardItemLarge>
      <Footer />
    </>
  );
};
export default FormValidator;
