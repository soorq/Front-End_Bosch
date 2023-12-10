import { TypeCard } from '~@/types/components';
import Image from 'next/image';
import React from 'react';

const SlideCard: React.FC<TypeCard> = props => {
  const { desc, name, role, avatar } = props as TypeCard;

  return (
    <div className="overflow-hidden border border-neutral_gray_500 bg-neutral_gray_800 rounded-xl">
      <div className="relative w-full p-6">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between w-full mb-5">
            <div className="flex items-center">
              <Image
                className="w-10 h-auto rounded-full"
                src={`/img/${avatar}.png`}
                alt={name}
                width={1000}
                height={1000}
              />

              <div className="px-4">
                <h1 className="text-sm text-neutral_white_200">{name}</h1>
                <p className="text-[10px] text-neutral_white_200/50">{role}</p>
              </div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="41"
              viewBox="0 0 58 41"
              fill="none"
            >
              <path
                d="M25.5283 15.6342C25.5283 6.06226 20.0382 0 12.449 0C5.34419 0 0.5 4.94553 0.5 11.965C0.5 18.9844 5.18272 22.9728 10.9958 22.9728C12.772 22.9728 14.2252 22.6537 15.517 22.1751C15.517 27.7588 10.5113 32.0661 3.56799 33.3424V41C16.4858 39.4047 25.5283 29.035 25.5283 15.6342ZM57.5 15.6342C57.5 6.06226 52.0099 0 44.4207 0C37.3159 0 32.4717 4.94553 32.4717 11.965C32.4717 18.9844 36.9929 22.9728 42.806 22.9728C44.5822 22.9728 46.0354 22.6537 47.3272 22.1751C47.3272 27.7588 42.483 32.0661 35.5397 33.3424V41C48.4575 39.4047 57.5 29.035 57.5 15.6342Z"
                fill="#060B27"
              />
            </svg>
          </div>

          {/* Body */}
          <div className="flex-grow max-h-[109px] overflow-auto">
            <p className="h-auto text-base text-neutral_white_200">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
