import Hero from '@src/components/Hero';
import PostCard from '@src/components/PostCard';
import SkillsCard from '@src/components/SkillsCard';
import React from 'react';

interface indexProps {}

const index: React.FC<indexProps> = () => {
  return (
    <>
      <Hero />
      <SkillsCard />
      <PostCard />
    </>
  );
};
export default index;
