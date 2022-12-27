import { useRegisterActions } from 'kbar';
import type { Action } from 'kbar';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const useNavActions = () => {
  const router = useRouter();

  const actions: Action[] = useMemo(
    () => [
      {
        id: 'home',
        name: 'Home',
        perform: () => router.push('/'),
        section: 'navigation',
      },
      {
        id: 'about',
        name: 'About',
        keywords: 'About',
        perform: () => router.push('/about'),
        section: 'navigation',
      },
      {
        id: 'blog',
        name: 'Blog',
        keywords: 'blog',
        perform: () => router.push('/blog'),
        section: 'navigation',
      },
      {
        id: 'projects',
        name: 'Projects',
        keywords: 'projects',
        perform: () => router.push('/projects'),
        section: 'navigation',
      },
      // {
      //   id: 'links',
      //   name: 'Links',
      //   keywords: 'links',
      //   perform: () => router.push('/links'),
      //   section: 'navigation',
      // },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return useRegisterActions(actions);
};
export default useNavActions;
