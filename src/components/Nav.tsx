import React from 'react';
import Link from 'next/link';

const Nav: React.FC<{}> = () => {
  return (
    <>
      <div className="bg-white-100 w-full mb-4 m-0">
        <div className="bg-white shadow">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-5 align-center">
              <div className="sm:flex sm:items-center">
                <Link href="/">
                  <a className="text-gray-800 text-sm font-semibold hover:text-blue-100 mr-4">
                    lhowsam
                  </a>
                </Link>
              </div>
              <div className="sm:flex sm:items-center">
                <Link href="/">
                  <a className="text-gray-800 text-sm font-semibold hover:text-blue-100 mr-7">
                    Home
                  </a>
                </Link>
                <Link href="/about">
                  <a className="text-gray-800 text-sm font-semibold hover:text-blue-100 mr-7">
                    About
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav;
