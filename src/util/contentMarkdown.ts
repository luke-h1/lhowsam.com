import { siteConfig } from '../config/site';

interface MarkdownDocumentInput {
  title: string;
  intro: string;
  path: string;
  body: string;
}

export function toMarkdownDocument({
  title,
  intro,
  path,
  body,
}: MarkdownDocumentInput): string {
  const content = body
    .replace(/^import\s.+$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return `# ${title}\n\n> ${intro}\n\nSource: ${siteConfig.siteUrl}${path}\n\n${content}\n`;
}

export function markdownResponse(body: string): Response {
  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
