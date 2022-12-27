import type { Action } from 'kbar';
import { useRegisterActions } from 'kbar';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import LinkIcon from '../../../../../public/icons/link.svg';
import UndoIcon from '../../../../../public/icons/undo.svg';

const useHelperActions = () => {
  const router = useRouter();

  const actions: Action[] = useMemo(
    () => [
      {
        id: 'undo',
        name: 'go back',
        keywords: 'go back',
        perform: () => router.back(),
        section: 'Actions',
        icon: <UndoIcon />,
      },
      {
        id: 'copy',
        name: 'Copy URL',
        keywords: 'copy',
        perform: () =>
          navigator.clipboard.writeText(
            `${process.env.NEXT_PUBLIC_URL}${router.pathname}`,
          ),
        section: 'Actions',
        icon: <LinkIcon />,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  return useRegisterActions(actions);
};
export default useHelperActions;
