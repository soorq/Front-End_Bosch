import Image from 'next/image';
import React from 'react';

const CardAbout: React.FC = () => {
  return (
    <div className="grid content-center grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-2 justify-items-center lg:justify-items-stretch">
      <div className="relative overflow-hidden max-w-md col-span-1 p-5 border-2 rounded-xl border-neutral_gray_500 bg-neutral_gray_800 after:absolute after:left-0 after:top-0 after:w-full after:h-full after:mix-blend-hard-light after:bg-about-bg_mask-2 after:bg-cover after:bg-no-repeat after:bg-center">
        {/* Header */}
        <div className="flex justify-center py-5">
          <Image
            className="object-cover w-[250px] h-auto"
            src={'/img/card-phone.png'}
            alt="a"
            width={600}
            height={600}
          />
        </div>

        {/* DownPart */}
        <div className="flex flex-col items-start justify-center px-5 py-10 text-justify">
          <h1 className="mb-4 text-2xl font-bold text-neutral_white_200 md:text-3xl relative z-[1]">
            Mobile applications
          </h1>

          <p className="text-sm md:text-base text-neutral_gray_300 relative z-[1]">
            Prem ipsum dolor sit amet consectetur. Viverra sed dignissim risus
            aliquet condimentum. Vulputate varius feugiat egestas congue
          </p>
        </div>
      </div>

      <div className="col-span-1 relative overflow-hidden border-2 rounded-xl border-neutral_gray_500 after:absolute after:left-0 after:top-0 after:w-full after:h-full after:mix-blend-hard-light after:bg-about-bg_mask-3 after:bg-cover after:bg-no-repeat after:bg-center bg-neutral_gray_800">
        <div className="flex flex-col w-full h-full pt-10">
          <div className="mx-10 mb-10">
            <h1 className="mb-2 text-xl font-bold text-neutral_white_200 md:text-2xl">
              Upload, share, and preview any file
            </h1>
            <p className="text-sm text-neutral_gray_300 md:text-base">
              Tellus et adipiscing sit sit mauris pharetra bibendum. Ligula
              massa netus nulla ultricies purus.
            </p>
          </div>
          <div className="flex justify-center max-h-full mx-10 mt-auto">
            <Image
              className="object-cover w-[550px] h-auto rounded-t-xl overflow-hidden"
              src={'/img/card-info.png'}
              alt="CardUser"
              width={550}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAbout;
