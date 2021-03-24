import React from 'react';

export const Intro: React.FC<{}> = () => {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-center text-4xl	mb-8">
          Hi, I'm Luke 👋
        </h1>
        <div className="max-w-lg mx-auto">
          <h3 className="text-2xl mb-4 text-left" data-testid="intro">
            I'm passionate about solving technical problems and coming up with
            creative solutions.I enjoy working with the JAMstack, React, Node,
            testing technologies + practices & various dev-ops technologies
          </h3>
          <hr />
        </div>
      </div>
    </>
  );
};
