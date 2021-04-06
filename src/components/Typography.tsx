import { MdxRemote } from 'next-mdx-remote/types';
import React from 'react';

export const H1 = ({ children }: MdxRemote.Components) => (
  <h1 className="text-3xl py-1 px-1 mt-4 mb-4">{children}</h1>
);

export const H2 = ({ children }: MdxRemote.Components) => (
  <h2 className="text-3xl py-1 px-1 mt-1 mb-1">{children}</h2>
);

export const H3 = ({ children }: MdxRemote.Components) => (
  <h3 className="text-3xl py-1 px-1 mt-1 mb-1">{children}</h3>
);

export const H4 = ({ children }: MdxRemote.Components) => (
  <h4 className="text-3xl py-1 px-1 mt-1 mb-1">{children}</h4>
);

export const H5 = ({ children }: MdxRemote.Components) => (
  <h5 className="text-3xl py-1 px-1 mt-1 mb-1">{children}</h5>
);

export const H6 = ({ children }: MdxRemote.Components) => (
  <h6 className="text-3xl py-1 px-1 mt-1 mb-1">{children}</h6>
);

export const P = ({ children }: MdxRemote.Components) => (
  <p className="text-3xl leading-4 py-1 px-1 mt-1 mb-1">{children}</p>
);
