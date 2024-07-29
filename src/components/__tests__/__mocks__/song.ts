import { Song } from '@frontend/types/spotify';

export const playingSong: Song = {
  albumImageUrl:
    'https://i.scdn.co/image/ab67616d0000b2738d30694491e182ea7e38f517',
  artist: 'Lil Kleine',
  isPlaying: true,
  songUrl: 'https://open.spotify.com/track/3bhmMwkuZFhgUr9Y6hmjze',
  title: 'Heel Mijn Leven',
};

export const notPlayingSong: Song = {
  ...playingSong,
  isPlaying: false,
};
