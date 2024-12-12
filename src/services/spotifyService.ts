/* eslint-disable camelcase */

import { Song } from '@frontend/types/spotify';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = btoa(`${client_id}:${client_secret}`);

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getConsumer = () => {
  let consumer = '';

  switch (process.env.NEXT_PUBLIC_URL) {
    case 'https://dev.lhowsam.com':
      consumer = 'lhowsam-dev';
      return consumer;
    case 'https://lhowsam.com':
      consumer = 'lhowsam-prod';
      return consumer;

    case 'http://localhost:3000':
      consumer = 'lhowsam-local';
      return consumer;

    default:
      return 'unknown';
  }
};

const spotifyService = {
  async getAccessToken(): Promise<{ access_token: string }> {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    });
    return response.json();
  },

  async getNowPlaying() {
    const { access_token } = await spotifyService.getAccessToken();
    return fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  },

  async getTopTracks() {
    const { access_token } = await spotifyService.getAccessToken();

    return fetch(TOP_TRACKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  },
  async nextNowPlaying(): Promise<Song> {
    const response = await fetch(`${window.location.origin}/api/now-playing`);
    return response.json();
  },
  async lambdaNowPlaying(): Promise<Song> {
    const consumer = getConsumer();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NOW_PLAYING_API_BASE_URL}/api/now-playing`,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-consumer': consumer,
        },
      },
    );
    return response.json();
  },
};

export default spotifyService;
