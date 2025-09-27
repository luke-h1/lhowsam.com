import { defineField, defineType } from 'sanity';
import { altField } from './fields';

export const videoBlock = defineType({
  name: 'videoBlock',
  title: 'Video Block',
  type: 'object',
  fields: [
    {
      name: 'video',
      title: 'Video',
      type: 'mux.video',
      validation: rule => rule.required(),
    },
    {
      name: 'playbackId',
      title: 'Playback ID (for embedding)',
      type: 'string',
      readOnly: true,
      description: 'Copy this ID to embed the video using {{video:playbackId}}',
      initialValue: (
        _doc: unknown,
        context: { parent: { video: { asset: { playbackId: string } } } },
      ) => {
        return context.parent?.video?.asset?.playbackId || '';
      },
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional caption for the video',
    },
  ],
  preview: {
    select: {
      title: 'caption',
      subtitle: 'video.asset->playbackId',
      media: 'video',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Video',
        subtitle: `ID: ${subtitle}`,
      };
    },
  },
});

const work = defineType({
  name: 'work',
  title: 'Work Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
      description: 'short intro of project post',
      rows: 3,
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [altField()],
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'markdown',
      description:
        'Content of project post. Use {{video:muxPlaybackId}} to embed videos',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'videos',
      title: 'Videos',
      type: 'array',
      description:
        'Videos that can be embedded in the content using {{video:muxPlaybackId}}',
      of: [{ type: 'videoBlock' }],
    }),
    defineField({
      name: 'companySite',
      title: 'Company site',
      type: 'string',
      description: 'Link to company',
    }),
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'string',
      description: 'Link to deployed site',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'string',
      description: 'Link to GitHub repo',
    }),
    defineField({
      name: 'publishedAt',
      title: 'publish date',
      type: 'date',
      validation: rule => rule.required(),
    }),
  ],
});
export default work;

/**
 * 
Refused to load media from 'blob:http://localhost:3000/c7e63342-9f48-47a1-84bc-36816ccf3ad6' because it violates the following Content Security Policy directive: "default-src 'self' *.sanity.io *.sanity-cdn.com". Note that 'media-src' was not explicitly set, so 'default-src' is used as a fallback.
:3000/studio/presentation/work/5c692f10-be8a-4912-b33f-3b77c82d1199/videos[_key==%228a68ccd11b07%22]?preview=http%3A//localhost%3A3000/work/sporting-life-mobile%3Fsanity-preview-perspective%3Ddrafts:1 Refused to load media from 'https://image.mux.com/IIOTxxct4FjCIgVnSoTtOTejOHV8kl7G02cv0227ywWME/storyboard.vtt?format=webp' because it violates the following Content Security Policy directive: "default-src 'self' *.sanity.io *.sanity-cdn.com". Note that 'media-src' was not explicitly set, so 'default-src' is used as a fallback.
 */
