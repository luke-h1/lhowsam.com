import useIsFontReady from '@src/hooks/isFontReady';
import { COLORS } from '@src/shared/Colors';
import shuffleArray from '@src/shared/shuffleArray';
import React, { useEffect, useState } from 'react';

import { RoughNotationGroup } from 'react-rough-notation';
import { RoughHighlight } from './Highlight';

const Contact = () => {
  const [colors, setColors] = useState<string[]>([]);
  const isFontReady = useIsFontReady();

  useEffect(() => {
    setColors(shuffleArray(COLORS));
  }, []);

  return (
    <div className="container px-4 mx-auto mb-10">
      <RoughNotationGroup show={isFontReady}>
        <h2 className="text-2xl font-bold text-gray-800">Get in touch</h2>
        <p className="mt-6 text-gray-800">
          Do you have a project or opportunity you'd like to discuss? Feel free
          to reach me via
          {' '}
          <a
            href="mailto:luke.howsam54@gmail.com"
            className="font-medium transition-colors hover:text-sky-500 text-black"
          >
            <RoughHighlight color={colors[1]}>email</RoughHighlight>
          </a>
          .
        </p>
        <p className="mb-3 text-gray-800">
          You can also get in touch with me on the following platforms
        </p>
        <ul>
          <li className="mb-2">
            <a
              href="https://www.linkedin.com/in/lukehowsam"
              target="_blank"
              rel="noreferrer"
            >
              <RoughHighlight color={colors[1]}>Linkedin</RoughHighlight>
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://github.com/luke-h1"
              target="_blank"
              rel="noreferrer"
            >
              <RoughHighlight color={colors[1]}>Github</RoughHighlight>
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://twitter.com/LukeH_1999"
              target="_blank"
              rel="noreferrer"
            >
              <RoughHighlight color={colors[1]}>Twitter</RoughHighlight>
            </a>
          </li>
        </ul>
      </RoughNotationGroup>
    </div>
  );
};
export default Contact;
