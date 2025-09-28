'use client';

import { disableDraftMode } from '@frontend/app/actions';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export function DisableDraftMode() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  //   // Only show the disable draft mode button when outside of Presentation Tool
  //   if (environment !== 'live' && environment !== 'unknown') {
  //     return null;
  //   }

  const disable = () =>
    startTransition(async () => {
      await disableDraftMode();
      router.refresh();
    });

  return (
    <div>
      {pending ? (
        'Disabling draft mode...'
      ) : (
        <button type="button" onClick={disable}>
          Disable draft mode
        </button>
      )}
    </div>
  );
}
