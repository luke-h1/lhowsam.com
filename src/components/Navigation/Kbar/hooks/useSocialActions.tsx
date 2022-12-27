/* eslint-disable @typescript-eslint/no-empty-function */
import { useRegisterActions } from 'kbar';
import type { Action } from 'kbar';
import { useMemo } from 'react';
import GithubIcon from '../../../../../public/icons/github.svg';
import LinkedInIcon from '../../../../../public/icons/linkedin.svg';
import TwitterIcon from '../../../../../public/icons/twitter.svg';

const useSocialActions = () => {
  const actions: Action[] = useMemo(
    () => [
      {
        id: 'linkedin',
        name: 'Linkedin',
        keywords: 'linkedin',
        perform: () => {},
        section: 'Social media',
        icon: <LinkedInIcon />,
      },
      {
        id: 'twitter',
        name: 'Twitter',
        keywords: 'twitter',
        perform: () => {},
        section: 'Social media',
        icon: <TwitterIcon />,
      },
      {
        id: 'github',
        name: 'GitHub',
        keywords: 'github',
        perform: () => {},
        section: 'Social media',
        icon: <GithubIcon />,
      },
    ],
    [],
  );

  return useRegisterActions(actions);
};
export default useSocialActions;
