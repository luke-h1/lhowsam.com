'use client';

import 'easymde/dist/easymde.min.css';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../../sanity.config';

export const runtime = 'edge';

export default function Studio() {
  return <NextStudio config={config} />;
}
