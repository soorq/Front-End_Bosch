'use client';
import TitleAbout from '~@/_components/TitleAverage/TitleAbout';
import CardInovation from '~@/_components/Card/CardInovation';
import CardAbout from '~@/_components/Card/CardsAbout';
import { TypeAboutProps } from '~@/types/components';
import Button from '~@/_components/ui/Button';
import Link from 'next/link';
import React from 'react';

const About: React.FC<TypeAboutProps> = ({ data }) => {
  const parent = React.useRef<HTMLDivElement | null>(null);

  return (
    <section className="w-full h-full" ref={parent}>
      <div className="max-w-screen-xl px-5 mx-auto my-10 pt-5">
        <h1 className="w-full text-xl font-bold leading-normal text-center text-transparent sm:text-3xl md:text-4xl bg-title-gradient bg-clip-text">
          Essential apps that protect your
        </h1>

        <div className="flex flex-col items-center max-w-screen-lg mx-auto mb-8 sm:flex-row">
          {data &&
            data.map((item, index) => <TitleAbout key={index} {...item} />)}
        </div>

        <div className="flex relative overflow-hidden flex-col items-center justify-between w-full mb-10 border-2 lg:gap-10 lg:p-12 lg:flex-row rounded-xl border-neutral_gray_500 bg-neutral_gray_800 after:absolute after:left-0 after:top-0 after:w-full after:h-full after:mix-blend-hard-light after:bg-about-bg_mask-1 after:bg-cover after:bg-no-repeat after:bg-center">
          <div className="w-full px-5 py-4 my-10 lg:w-1/2 lg:my-0">
            <h1 className="mb-4 text-xl font-bold text-neutral_white_200 md:text-3xl relative z-[1]">
              End-to-end encrypted inbox and messages
            </h1>

            <p className="text-sm md:text-base mb-7 text-neutral_gray_300 relative z-[1]">
              Rorem ipsum dolor sit amet consectetur. Proin dignissim tortor
              mauris viverra sed volutpat mauris. Amet nisi amet commodo
              adipiscing ut imperdiet nunc.
            </p>

            <Link
              href="/"
              className="px-6 py-3 transition-all border rounded-full text-neutral_white_200 ease-cubic-bezier hover:shadow-lg hover:shadow-primary border-neutral_gray_500 hover:bg-neutral_gray_500 relative z-[1]"
            >
              Learn More
            </Link>
          </div>
          <CardInovation />
        </div>

        <CardAbout />

        <div className="flex flex-col items-center justify-center gap-4 my-10 text-center md:gap-10 md:flex-row">
          <Button url={'/'} fill rounded size="md" color="primary" border>
            Get Started
          </Button>

          <Button url="/" rounded size="md" border color="secondary">
            Browse all feature
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
