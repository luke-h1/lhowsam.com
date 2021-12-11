import { Space, Center, StyledImage } from '@src/styles/layouts';
import { Title, Paragraph } from '@src/styles/typography';
import React from 'react';

const IntroSection = () => {
  return (
    <>
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
    </>
  );
};
export default IntroSection;
