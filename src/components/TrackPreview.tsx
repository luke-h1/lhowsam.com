import { Track } from '@src/types/Track';

interface TrackPreviewProps {
  track: Track;
}

const TrackPreview = ({ track }: TrackPreviewProps) => {
  return (
    <a href={track.link}>
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        {track.image && (
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={`/track-images/${track.image}`}
            alt={track.image}
          />
        )}
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {track.title}
          </h1>
          <p className="leading-relaxed mb-3">
            <a href={track.link}>Link</a>
          </p>
          <div className="flex items-center flex-wrap" />
        </div>
      </div>
    </a>
  );
};
export default TrackPreview;
