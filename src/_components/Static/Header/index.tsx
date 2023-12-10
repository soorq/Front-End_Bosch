'use client';
import type { TypeHeaderProps } from '~@/types/components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Nav from './Nav';

const Header: React.FC<TypeHeaderProps> = ({ data }) => {
  return (
    <header className="w-full h-auto border-b border-neutral_gray_600">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex relative items-center justify-between w-full px-10 py-4">
          <Link href={'/'}>
            <Image
              className="object-cover w-10 h-auto select-none"
              src={'/logo.svg'}
              alt="logo"
              width={1}
              height={1}
            />
          </Link>
          <Nav data={data} />
        </div>
      </div>
    </header>
  );
};

export default Header;
