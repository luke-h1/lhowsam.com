import spotifyService from '@frontend/services/spotifyService';
import { SongItem } from '@frontend/types/spotify';

export const revalidate = 3600;

const isEnabled = false;

export async function GET() {
  if (isEnabled) {
    const res = await spotifyService.getNowPlaying();

    if (res.status === 204 || res.status > 400) {
      return new Response(JSON.stringify({ isPlaying: false }), {
        status: 200,
      });
    }

    const song = (await res.json()) as SongItem;

    if (!song.item) {
      return new Response(
        JSON.stringify({
          isPlaying: false,
        }),
        {
          status: 200,
        },
      );
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists
      .map((_artist: { name: string }) => _artist.name)
      .join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const body = JSON.stringify({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    });
  }

  return new Response(null, {
    status: 200,
  });
}
