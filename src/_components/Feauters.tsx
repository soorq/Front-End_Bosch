'use client';
import useIsomorphicLayoutEffect from '~@/helpers/gsap/useIsomHelper';
import CardFeature from '~@/_components/Card/CardFeature';
import { TypePropsFeatures } from '~@/types/components';
import React from 'react';

import gsap from 'gsap-trial/dist/gsap';
import { ScrollTrigger } from 'gsap-trial/dist/ScrollTrigger';

const Feauters: React.FC<TypePropsFeatures> = ({ data }) => {
  const container = React.useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    const ctx = (gsap as any)['context'](() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          invalidateOnRefresh: true,
          end: 'bottom 10%',
          start: 'top 10%',
          pinSpacing: true,
          scrub: 1,
          pin: true,
        },
      });

      tl.fromTo(
        container.current!.querySelector('#sub-title'),
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1 }
      )
        .fromTo(
          '#feature-card_1',
          { y: '-400%', opacity: 0 },
          { y: '0', x: '0', opacity: 1 }
        )
        .fromTo(
          '#feature-card_2',
          { x: '-100%', opacity: 0 },
          { x: '0', opacity: 1, duration: 1.2 }
        )
        .fromTo(
          '#feature-card_3',
          { y: '-400%', opacity: 0 },
          { y: '0', opacity: 1, duration: 1.2 }
        )
        .fromTo(
          '#feature-card_4',
          { x: '-400%', opacity: 0 },
          { x: '0', opacity: 1, duration: 1.2 }
        )
        .fromTo(
          '#feature-card_5',
          { y: '500%', opacity: 0 },
          { y: '0', opacity: 1, duration: 1.2 }
        )
        .fromTo(
          '#feature-card_6',
          { x: '100%', opacity: 0 },
          { x: '0', opacity: 1, duration: 1.2 }
        );
    });

    return () => ctx.revert();
  }, []);

  const memoCard = React.useMemo(() => {
    return data?.map((card, index) => (
      <CardFeature
        {...card}
        key={index}
        id={`${'feature-card_' + (index + 1)}`}
      />
    ));
  }, [data]);

  return (
    <section className="w-full h-full">
      <div className="max-w-screen-xl px-5 mx-auto my-10" ref={container}>
        <div
          className="flex flex-col items-center justify-between mb-6 pt-4 sm:mb-8 md:flex-row"
          id="sub-title"
        >
          <h1 className="w-full font-bold leading-relaxed text-xl md:text-2xl mb-2 md:mb-0 text-transparent md:leading-normal md:w-1/2 bg-title-gradient bg-clip-text">
            Powerful features to help you manage all your leads
          </h1>

          <p className="w-full md:w-1/2 text-xs md:text-sm lg:w-1/3 text-neutral_gray_300">
            Apsum dolor sit amet consectetur. Aliquam elementum elementum in
            ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet
            vel.
          </p>
        </div>

        <div className="grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {memoCard}
        </div>
      </div>
    </section>
  );
};

export default Feauters;
