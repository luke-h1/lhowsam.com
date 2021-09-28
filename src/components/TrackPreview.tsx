import { Track } from '@src/types/Track';

interface TrackPreviewProps {
  track: Track;
}

const TrackPreview = ({ track }: TrackPreviewProps) => {
  return (
    <a href={track.link} target="_blank" rel="noreferrer">
      <div className="mt-6 sm:grid sm:grid-cols-2 sm:gap-10">
        {track.image && (
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center mb-4"
            src={`/track-images/${track.image}`}
            alt={track.image}
          />
        )}
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {track.title}
          </h1>
        </div>
      </div>
    </a>
  );
};
export default TrackPreview;
