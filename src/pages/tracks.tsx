import { CustomHead } from '@src/components/CustomHead';
import { NextSeo } from 'next-seo';
import React from 'react';
import { tracks } from '../data/tracks';
import TrackPreview from '../components/TrackPreview';

const Tracks = () => {
  return (
    <>
      <CustomHead title="Tracks | lhowsam.com" description="Top Tacks" />
      <NextSeo
        title="Tracks"
        canonical="https://lhowsam.com/tracks"
        openGraph={{
          url: 'https://lhowsam.com/tracks',
          title: 'Tracks',
        }}
        twitter={{
          handle: '@LukeH_1999',
          cardType: 'summary_large_image',
        }}
      />
      <h1 className="text-4xl font-extrabold text-gray-800">Tracks</h1>

      <div className="mt-6 sm:grid sm:grid-cols-2 sm:gap-10">
        {tracks && tracks.map((t) => <TrackPreview track={t} />)}
      </div>
    </>
  );
};
export default Tracks;
