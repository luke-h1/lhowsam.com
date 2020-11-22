import React, { useState } from 'react';
import { WaveButton } from './WaveElements';
const Wave = () => {
  const [waves, setWaves] = useState(0);
  const label = `👋 ${waves} ${waves === 1 ? 'wave' : 'waves'}`;

  return <WaveButton onClick={() => setWaves(waves + 1)}>{label}</WaveButton>;
};
export default Wave;
