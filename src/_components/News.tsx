'use client';
import { TypeNewsProps } from '~@/types/components';
import CardNews from '~@/_components/Card/CardNews';
import Button from '~@/_components/ui/Button';
import React from 'react';

const News: React.FC<TypeNewsProps> = ({ data }) => {
  const memoNewsCard = React.useMemo(() => {
    return (
      data && data.map((card, index) => <CardNews key={index} {...card} />)
    );
  }, [data]);

  return (
    <section className="w-full h-full">
      <div className="max-w-screen-xl px-5 mx-auto my-10">
        <div className="flex flex-col items-center justify-between w-full gap-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12 md:flex-row">
          <h1 className="text-2xl font-bold leading-normal text-center text-transparent sm:text-2xl md:text-4xl bg-title-gradient bg-clip-text">
            Product in the news
          </h1>

          <Button
            url="/"
            border
            rounded
            size="md"
            fill
            color="primary"
            className="text-center"
          >
            Browse all news
          </Button>
        </div>

        <div className="flex flex-col items-center gap-10 lg:flex-row justify-evenly">
          {memoNewsCard}
        </div>
      </div>
    </section>
  );
};

export default News;
