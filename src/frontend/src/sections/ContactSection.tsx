import { ContactButton, ContactWrapper } from '@src/styles/contact';
import { Center } from '@src/styles/layouts';
import { Flex, Paragraph, Title } from '@src/styles/typography';
import React from 'react';

const ContactSection = () => {
  return (
    <>
      <Title size={2.3}>Contact</Title>
      <Paragraph>
        I'm not currently looking for new opportunites but feel free to get in
        touch if you have an interesting project or opportunity
      </Paragraph>
      <ContactWrapper>
        <a href='mailto:luke.howsam@yahoo.com' referrerPolicy='no-referrer'>Email</a>
      </ContactWrapper>
    </>
  );
};
export default ContactSection;
