import spotifyService from '@frontend/services/spotifyService';
import { SongItem } from '@frontend/types/spotify';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('hitting');
  const response = await spotifyService.getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }
  const song = (await response.json()) as SongItem;

  if (!song.item) {
    return res.status(200).json({ isPlaying: false });
  }
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists
    .map((_artist: { name: string }) => _artist.name)
    .join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

//   res.setHeader(
//     'Cache-Control',
//     'public, s-maxage=60, stale-while-revalidate=30',
//   );
  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
}
