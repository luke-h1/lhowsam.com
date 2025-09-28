import { revalidatePath, revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

type WebhookPayload = {
  path?: string;
  tags?: string[];
  _type?: string;
  _id?: string;
  slug?: { current?: string };
};

export async function POST(req: NextRequest) {
  try {
    if (!process.env.SANITY_REVALIDATE_SECRET) {
      return new Response(
        'Missing environment variable SANITY_REVALIDATE_SECRET',
        { status: 500 },
      );
    }

    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    );

    if (!isValidSignature) {
      const message = 'Invalid signature';
      return new Response(JSON.stringify({ message, isValidSignature, body }), {
        status: 401,
      });
    }

    const revalidatedPaths: string[] = [];
    const revalidatedTags: string[] = [];

    // Handle path-based revalidation
    if (body?.path) {
      revalidatePath(body.path);
      revalidatedPaths.push(body.path);
    }

    // Handle tag-based revalidation based on document type
    if (body?._type) {
      const baseTags = [body._type];

      // Add specific tags based on document type and slug
      if (body.slug?.current) {
        baseTags.push(`${body._type}-${body.slug.current}`);
      }

      // Add list tags for index pages
      if (body._type === 'post') {
        baseTags.push('post-list', 'post-recent');
      } else if (body._type === 'work') {
        baseTags.push('work-list');
      } else if (body._type === 'project') {
        baseTags.push('project-list', 'project-recent');
      }

      baseTags.forEach(tag => {
        revalidateTag(tag);
        revalidatedTags.push(tag);
      });
    }

    if (body?.tags && Array.isArray(body.tags)) {
      body.tags.forEach(tag => {
        revalidateTag(tag);
        revalidatedTags.push(tag);
      });
    }

    const message = `Revalidated paths: ${revalidatedPaths.join(', ')} | tags: ${revalidatedTags.join(', ')}`;
    return NextResponse.json({
      body,
      message,
      revalidatedPaths,
      revalidatedTags,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return new Response((err as Error).message, { status: 500 });
  }
}
