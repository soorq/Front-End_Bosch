import Image from 'next/image';
import React from 'react';
import { TypeCardFeature } from '~@/types/components';

const CardFeature: React.FC<TypeCardFeature> = ({ desc, icon, title, id }) => {
  return (
    <div
      className="p-8 border rounded-xl bg-neutral_gray_800 border-neutral_gray_500"
      id={id}
    >
      <Image
        className="w-10 h-auto mb-5"
        src={`/icons/${icon}.svg`}
        alt={title}
        width={1}
        height={1}
      />
      <div>
        <h1 className="mb-3 text-xl text-left text-neutral_white_200 md:text-3xl">
          {title}
        </h1>
        <p className="text-sm md:text-justify md:text-base text-neutral_gray_300">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default CardFeature;
