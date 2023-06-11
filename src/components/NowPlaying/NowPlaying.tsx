import { useMounted } from '@frontend/hooks/useMounted';
import spotifyService from '@frontend/services/spotifyService';
import { Song } from '@frontend/types/spotify';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import s from './NowPlaying.module.scss';

const truncate = (str: string, num: number) => {
  if (str.length > num) {
    return `${str.slice(0, num)}...`;
  }
  return str;
};

interface Props {
  albumImageUrl?: string;
}

const NowPlayingIcon = ({ albumImageUrl }: Props) => {
  return (
    <div className={s.icon}>
      <span />
      <span />
      <span />
      {albumImageUrl && (
        <div className={s.cover}>
          <Image src={albumImageUrl} width={13} height={13} alt="Album cover" />
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
    <div className={s.wrapper}>
      {!isLoading && data?.isPlaying && !error ? (
        <a
          className={s.widget}
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
        <span className={s.widgetHidden}>Not playing</span>
      )}
    </div>
  ) : null;
};
export default NowPlaying;
