'use client';

import { variables } from '@frontend/styles/variables.css';
import MuxPlayer from '@mux/mux-player-react';

interface MuxVideoProps {
  playbackId: string;
  caption?: string;
}

export default function MuxVideo({ playbackId, caption }: MuxVideoProps) {
  return (
    <div
      style={{
        marginTop: variables.spacing.md,
        marginBottom: variables.spacing.md,
        maxWidth: '400px', // Limit the maximum width
        margin: '0 auto', // Center the video
      }}
    >
      <MuxPlayer
        streamType="on-demand"
        playbackId={playbackId}
        metadataVideoTitle={caption}
        style={{
          width: '100%',
          height: '225px', // Fixed height instead of percentage
          borderRadius: variables.radii.lg,
        }}
      />
      {caption && (
        <p
          style={{
            textAlign: 'center',
            fontSize: variables.fontSize.sm,
            color: variables.color.foregroundNeutral,
            marginTop: variables.spacing.sm,
            fontStyle: 'italic',
          }}
        >
          {caption}
        </p>
      )}
    </div>
  );
}
