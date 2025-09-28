interface VideoData {
  id: string;
  video: {
    playbackId: string;
    filename?: string;
  };
  caption?: string;
}

export function parseVideoShortcodes(
  content: string,
  videos: VideoData[] = [],
): string {
  return content.replace(/\{\{video:([^}]+)\}\}/g, (match, videoId) => {
    const video = videos.find(v => v.id === videoId);
    if (video) {
      return `<MuxVideo playbackId="${video.video.playbackId}" caption="${video.caption || ''}" />`;
    }
    return match;
  });
}
