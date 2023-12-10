import { TypeTitleAbout } from '~@/types/components';
import Image from 'next/image';
import React from 'react';

const TitleAbout: React.FC<TypeTitleAbout> = ({ icon, sizeIcon = 5, text }) => {
  return (
    <div className="flex items-center justify-center flex-grow-0 w-1/4 px-4">
      {icon && (
        <Image
          className={`object-cover w-${sizeIcon} h-auto md:w-${sizeIcon * 2}`}
          src={`/icons/${icon ? icon : ''}.svg`}
          alt={icon ? icon : 'icon'}
          width={1}
          height={1}
        />
      )}

      <span className="px-3 text-xl font-bold leading-normal text-transparent md:text-4xl bg-title-gradient bg-clip-text">
        {text},
      </span>
    </div>
  );
};

export default TitleAbout;
