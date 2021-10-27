import { Stack, StackContainer } from '@src/styles/layouts';
import React from 'react';

interface Props {
  tech: string[];
} 

const Tag = ({ tech }: Props) => {
  return (
      <StackContainer>
        {tech.map((t) => (
          <Stack key={t}>
            {t}
            </Stack>
        ))}
      </StackContainer>
  )
};
export default Tag;
