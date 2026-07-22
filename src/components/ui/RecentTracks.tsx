import { formatDistanceToNowStrict } from 'date-fns';
import React, { useEffect, useState } from 'react';
import spotifyService from '../../services/spotifyService';
import type { RecentTrack } from '../../types/spotify';
import styles from './Tracks.module.css';

const POLL_MS = 30_000;
const LIMIT = 10;

const SKELETON_KEYS = Array.from({ length: 5 }, (_, index) => `row-${index}`);

function EqualiserBars() {
  return (
    <span className={styles.bars} aria-hidden>
      <span />
      <span />
      <span />
    </span>
  );
}

function playedLabel(track: RecentTrack): string {
  if (track.nowPlaying) {
    return 'Now playing';
  }

  if (track.playedAt) {
    return formatDistanceToNowStrict(new Date(track.playedAt * 1000), {
      addSuffix: true,
    });
  }

  return '';
}

function trackKey(track: RecentTrack): string {
  return `${track.songUrl || track.title}-${track.nowPlaying ? 'now' : track.playedAt}`;
}

export default function RecentTracks() {
  const [tracks, setTracks] = useState<RecentTrack[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const response = await spotifyService.recentTracks(LIMIT);
        if (active) {
          setTracks(response.tracks);
          setFailed(false);
        }
      } catch {
        if (active) {
          setFailed(true);
        }
      }
    };

    load();
    const intervalId = window.setInterval(load, POLL_MS);

    return () => {
      active = false;
      window.clearInterval(intervalId);
    };
  }, []);

  if (failed && !tracks) {
    return (
      <p className={styles.status} role="status">
        Could not load recent tracks right now.
      </p>
    );
  }

  if (!tracks) {
    return (
      <ul className={styles.list} aria-hidden>
        {SKELETON_KEYS.map(key => (
          <li
            key={key}
            className={`${styles.skeleton} ${styles.skeletonRow}`}
          />
        ))}
      </ul>
    );
  }

  if (tracks.length === 0) {
    return (
      <p className={styles.status} role="status">
        No recent tracks to show.
      </p>
    );
  }

  return (
    <ul className={styles.list} data-testid="recent-tracks">
      {tracks.map(track => {
        const label = playedLabel(track);

        return (
          <li key={trackKey(track)}>
            <a
              className={styles.track}
              href={track.songUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {track.albumImageUrl ? (
                <img
                  className={styles.cover}
                  src={track.albumImageUrl}
                  alt=""
                  width={48}
                  height={48}
                  loading="lazy"
                />
              ) : (
                <span className={styles.cover} aria-hidden />
              )}
              <span className={styles.trackBody}>
                <span className={styles.trackTitle}>{track.title}</span>
                <span className={styles.trackArtist}>{track.artist}</span>
              </span>
              {track.nowPlaying ? (
                <span className={`${styles.trackMeta} ${styles.nowPlaying}`}>
                  <EqualiserBars />
                  {label}
                </span>
              ) : (
                label && <span className={styles.trackMeta}>{label}</span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
