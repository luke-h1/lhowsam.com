import { Paragraph, Title } from '@src/styles/typography';
import React from 'react';

const ContactSection = () => {
  return (
    <>
      <Title size={2.3}>Contact</Title>
      <Paragraph>
        Want to reach out? Get in touch via{' '}
        <a href="mailto:luke.howsam@yahoo.com" referrerPolicy="no-referrer">
          Email
        </a>
      </Paragraph>
    </>
  );
};
export default ContactSection;
