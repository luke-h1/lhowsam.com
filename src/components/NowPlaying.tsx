import { useMounted } from '@frontend/hooks/useMounted';
import spotifyService from '@frontend/services/spotifyService';
import { Song } from '@frontend/types/spotify';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import styles from './NowPlaying.module.scss';

function truncate(str: string, num: number): string {
  if (str.length > num) {
    return `${str.slice(0, num)}`;
  }
  return str;
}

export const NowPlayingIcon = ({
  albumImageUrl,
}: {
  albumImageUrl?: string;
}) => {
  return (
    <div className={styles.icon}>
      <span />
      <span />
      <span />
      {albumImageUrl && (
        <div className={styles.cover}>
          <Image src={albumImageUrl} width={30} height={30} alt="album cover" />
        </div>
      )}
    </div>
  );
};

const NowPlaying = () => {
  const { isMounted } = useMounted();
  const { data, isLoading, error } = useQuery<Song>(['nowPlaying'], () =>
    spotifyService.nextNowPlaying(),
  );

  const nowPlaying = `${data?.title} - ${data?.artist}`;
  return isMounted ? (
    <div className={styles.wrapper}>
      {!isLoading && data?.isPlaying && !error ? (
        <a
          className={styles.widget}
          href={data?.songUrl}
          target="_blank"
          rel="noreferrer noopener"
          title={`Currently listening to ${nowPlaying} on spotify`}
          aria-label={`Currently listening to ${nowPlaying} on spotify`}
        >
          <NowPlayingIcon albumImageUrl={data.albumImageUrl} />
          {truncate(nowPlaying, 80)}
        </a>
      ) : (
        <span className={styles.widgetHidden}>Not playing</span>
      )}
    </div>
  ) : null;
};
export default NowPlaying;
