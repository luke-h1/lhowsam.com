export interface Song {
  isPlaying?: boolean;
  title?: string;
  artist: string;
  albumImageUrl?: string;
  songUrl?: string;
}

export interface Artist {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface SongItem {
  is_playing: boolean;
  item: {
    album: Album;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    explicit: boolean;
    external_urls: {
      spotify: string;
    };
    href: string; // https://api.spotify.com/v1/tracks/xxx
    id: string;
    is_local: false;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
  };
}
