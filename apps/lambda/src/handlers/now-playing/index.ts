import spotifyService from '@lambda/services/spotifyService';
import { Song, SongItem } from '@lambda/types/spotify';

const nowPlayingHandler = async (): Promise<Song | string> => {
  if (process.env.SHOULD_CALL_SPOTIFY === 'false') {
    return JSON.stringify({
      isPlaying: false,
      status: 200,
      maintenance: true,
    });
  }

  const res = await spotifyService.getNowPlaying();
  if (res.status === 204 || res.status > 400) {
    return JSON.stringify({
      isPlaying: false,
      status: 200,
    });
  }

  const song = (await res.json()) as SongItem;

  if (!song.item) {
    return JSON.stringify({
      isPlaying: false,
      status: 200,
    });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists
    .map((_artist: { name: string }) => _artist.name)
    .join(', ');
  const album = song.item.album.name;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return JSON.stringify({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
};
export default nowPlayingHandler;
