import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

const font = fetch(
  new URL('../../../public/fonts/Inter-SemiBold.otf', import.meta.url),
).then(res => res.arrayBuffer());

const handler = async (req: NextRequest) => {
  const [fontData] = await Promise.all([font]);
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.has('title')
      ? searchParams.get('title')?.slice(0, 100)
      : 'Software Engineer';

    const description = searchParams.has('description')
      ? searchParams.get('description')?.slice(0, 100)
      : 'lhowsam.com';

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#161616',
            height: '100%',
            width: '100%',
            padding: 64,
          }}
        >
          <img
            src={new URL(
              '../../../public/images/luke.jpeg',
              import.meta.url,
            ).toString()}
            width={96}
            height={96}
            alt=""
            style={{
              borderRadius: 8,
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontFamily: 'Inter',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: title ? 56 : 64,
                fontStyle: 'normal',
                color: '#fff',
                whiteSpace: 'pre-wrap',
              }}
            >
              {title}
            </div>
            <div
              style={{
                marginTop: 16,
                fontSize: 32,
                color: '#a0a0a0',
              }}
            >
              {description}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontData,
          },
        ],
      },
    );
  } catch (e) {
    return new Response('Failed to generate og image', { status: 500 });
  }
};

export default handler;
