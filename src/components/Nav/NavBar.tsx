import Link from 'next/link';
import React from 'react';
import { Links } from './Links';

export const Nav: React.FC<{}> = () => {
  return (
    <nav className="bg-white py-1 mb-7">
      <div className="-mb-px flex justify-center align-center items-center">
        {Links
          && Links.map((l) => (
            <Link href={l.slug} key={l.id}>
              <a className="text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8">
                {l.name}
              </a>
            </Link>
          ))}
      </div>
    </nav>
  );
};
