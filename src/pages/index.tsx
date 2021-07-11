import Hero from '@src/components/Hero';
import SkillsCard from '@src/components/SkillsCard';
import React from 'react';

interface indexProps {}

const index: React.FC<indexProps> = () => {
  return (
    <>
      <Hero />
      <SkillsCard />
    </>
  );
};
export default index;
