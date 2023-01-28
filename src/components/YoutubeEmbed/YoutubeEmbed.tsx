import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

interface Props {
  id: string;
  title: string;
}

const YoutubeEmbed = ({ id, title }: Props) => {
  return (
    <LiteYouTubeEmbed
      id={id}
      title={title}
      poster="hqdefault"
      thumbnail="maxresdefault"
    />
  );
};
export default YoutubeEmbed;
