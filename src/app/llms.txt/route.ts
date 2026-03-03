import postService from '@frontend/services/postService';
import projectService from '@frontend/services/projectService';
import talkService from '@frontend/services/talkService';
import workService from '@frontend/services/workService';
import { NextResponse } from 'next/server';

export async function GET() {
  const [posts, projects, works, talks] = await Promise.all([
    postService.getAllPosts(),
    projectService.getAllProjects(),
    workService.getWorks(),
    talkService.getTalks(),
  ]);

  const tags = posts.flatMap(post => post.tags);

  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://lhowsam.com';

  const routes = ['', '/blog', '/projects', '/about', '/talks', '/work'];

  const urls: string[] = [
    ...routes.map(route => `${baseUrl}${route}`),
    ...posts.map(post => `${baseUrl}/blog/${post.slug.current}`),
    ...projects.map(project => `${baseUrl}/projects/${project.slug.current}`),
    ...works.map(work => `${baseUrl}/work/${work.slug.current}`),
    ...talks.map(talk => `${baseUrl}/talks/${talk.slug.current}`),
    ...tags.map(tag => `${baseUrl}/blog/tags/${tag.slug.current}`),
  ];

  // Remove duplicates and sort
  const uniqueUrls = Array.from(new Set(urls)).sort();

  const instructions = `# llms.txt for lhowsam.com

## About this site
This is the personal website of Luke Howsam, a Software Engineer focused on React Native, Cloud infrastructure (AWS, Azure), and automation technologies (Terraform). The site includes blog posts, projects, work experience, and talks.

## Site structure
- Home page: Overview and introduction
- About: Professional background, experience, and skills
- Blog: Technical articles and posts on software development, cloud, and related topics
- Projects: Open source and personal projects
- Work: Professional work experience and case studies
- Talks: Presentations given at meetups and events

## Content types
- Blog posts: Technical articles covering React, React Native, Next.js, Node.js, Python, GraphQL, AWS, Azure, DevOps, Terraform, and related technologies
- Projects: Code repositories and project descriptions
- Work: Professional experience and work history
- Talks: Conference and meetup presentations

## How to use this file
The URLs below represent all publicly accessible pages on this site. You can use these URLs to:
- Understand the site structure and content
- Reference specific pages when answering questions about Luke or his work
- Discover blog posts, projects, and other content

## URLs
`;

  const content = instructions + uniqueUrls.join('\n');

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
