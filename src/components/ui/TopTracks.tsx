import React, { useEffect, useState } from 'react';
import spotifyService from '../../services/spotifyService';
import type { TopTrack, TopTracksTimeRange } from '../../types/spotify';
import styles from './Tracks.module.css';

const LIMIT = 12;

const SKELETON_KEYS = Array.from(
  { length: LIMIT },
  (_, index) => `card-${index}`,
);

const RANGES: { value: TopTracksTimeRange; label: string }[] = [
  { value: 'short_term', label: '4 weeks' },
  { value: 'medium_term', label: '6 months' },
  { value: 'long_term', label: 'All time' },
];

interface State {
  range: TopTracksTimeRange;
  tracks: TopTrack[] | null;
  failed: boolean;
}

export default function TopTracks() {
  const [range, setRange] = useState<TopTracksTimeRange>('medium_term');
  const [state, setState] = useState<State>({
    range: 'medium_term',
    tracks: null,
    failed: false,
  });

  useEffect(() => {
    let active = true;

    spotifyService
      .topTracks(range, LIMIT)
      .then(response => {
        if (active) {
          setState({ range, tracks: response.tracks, failed: false });
        }
      })
      .catch(() => {
        if (active) {
          setState({ range, tracks: null, failed: true });
        }
      });

    return () => {
      active = false;
    };
  }, [range]);

  const settled = state.range === range;
  const tracks = settled ? state.tracks : null;
  const failed = settled && state.failed;

  let content: React.ReactNode;

  if (failed) {
    content = (
      <p className={styles.status} role="status">
        Could not load top tracks right now.
      </p>
    );
  } else if (!tracks) {
    content = (
      <ul className={styles.grid} aria-hidden>
        {SKELETON_KEYS.map(key => (
          <li
            key={key}
            className={`${styles.skeleton} ${styles.skeletonCard}`}
          />
        ))}
      </ul>
    );
  } else if (tracks.length === 0) {
    content = (
      <p className={styles.status} role="status">
        No top tracks to show.
      </p>
    );
  } else {
    content = (
      <ul className={styles.grid} data-testid="top-tracks">
        {tracks.map((track, index) => (
          <li key={`${track.title}-${track.artist}`}>
            <a
              className={styles.card}
              href={track.songUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.cardCoverWrap}>
                {track.albumImageUrl && (
                  <img
                    className={styles.cardCover}
                    src={track.albumImageUrl}
                    alt=""
                    loading="lazy"
                  />
                )}
                <span className={styles.cardRank}>{index + 1}</span>
              </span>
              <span className={styles.cardTitle}>{track.title}</span>
              <span className={styles.cardArtist}>{track.artist}</span>
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <div className={styles.ranges} role="group" aria-label="Time range">
        {RANGES.map(option => (
          <button
            key={option.value}
            type="button"
            className={styles.rangeButton}
            aria-pressed={range === option.value}
            onClick={() => setRange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>

      {content}
    </div>
  );
}
