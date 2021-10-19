import { useEffect, useState } from 'react';

const useIsFontReady = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsReady(true);
    });
  }, []);
  return isReady;
};
export default useIsFontReady;
