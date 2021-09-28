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
      <div className="container px-5 py-4 mx-auto">
        <div className="">
          <div className="p-4">
            {tracks && tracks.map((t) => <TrackPreview track={t} />)}
          </div>
        </div>
      </div>
    </>
  );
};
export default Tracks;
