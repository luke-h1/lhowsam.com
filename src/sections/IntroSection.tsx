import { Space, Center, StyledImage } from '@src/styles/layouts';
import { Title, Paragraph } from '@src/styles/typography';
import React from 'react';
import styled from 'styled-components';

const IntroWrap = styled.div`
  min-height: 90vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IntroSection = () => {
  return (
    <IntroWrap>
      <Space size={25} />
      <Center>
        <Title size={2.5}>
          Hey, I&apos;m Luke{' '}
          <span role="img" aria-label="wave">
            👋
          </span>
        </Title>
      </Center>
      <Center>
        <StyledImage
          src="/images/luke.jpeg"
          width={320}
          height={400}
          blurDataURL="/images/luke.jpeg"
          placeholder="blur"
          alt="profile picture"
        />
      </Center>
      <Space size={25} />
      <Paragraph data-testid="text">
        I&apos;m a <strong>software tester</strong> and{' '}
        <strong>developer</strong>. I like building and testing projects that
        are scalable, performant & user friendly. I currently work as a software
        tester where I do a mixture of manual & automated testing in an agile
        environment
      </Paragraph>
      <Space size={25} />
    </IntroWrap>
  );
};
export default IntroSection;
