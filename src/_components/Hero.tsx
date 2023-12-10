'use client';
import useIsomorphicLayoutEffect from '~@/helpers/gsap/useIsomHelper';
import Analytic from '~@/_components/Analytic';
import Button from '~@/_components/ui/Button';
import React from 'react';

import gsap from 'gsap-trial/dist/gsap';
import { ScrollTrigger } from 'gsap-trial/dist/ScrollTrigger';

const Hero: React.FC = () => {
  const parent = React.useRef<HTMLElement | null>(null);
  const childComponent = React.useRef<HTMLElement | null>(null);

  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    const ctx = (gsap as any)['context'](() => {
      const HeadingTl = gsap.timeline();
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parent.current!.querySelector('#hero-container'),
          start: 'top 10%',
          end: 'bottom 70%',
          toggleActions: 'play none none reverse',
          scrub: 2,
        },
      });

      HeadingTl.fromTo(
        parent.current!.querySelector('#hero-title'),
        {
          x: 0,
          y: '-100vh',
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
        }
      )
        .fromTo(
          parent.current!.querySelector('#hero-desc'),
          {
            x: 0,
            y: '-100vh',
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
          }
        )
        .fromTo(
          parent.current!.querySelector('#hero-link_1'),
          {
            x: 0,
            y: -50,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
          }
        )
        .fromTo(
          parent.current!.querySelector('#hero-link_2'),
          {
            x: 0,
            y: -50,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
          }
        );

      tl.fromTo(
        parent.current!.querySelector('#hero-table'),
        {
          x: -500,
          y: 0,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
        }
      )
        .fromTo(
          parent.current!.querySelector('#hero-child_analytic-header'),
          {
            x: 0,
            y: 50,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
          }
        )
        .fromTo(
          parent.current!.querySelector('#hero-child_analytic-cols'),
          {
            x: 0,
            y: 50,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
          }
        )
        .fromTo(
          parent.current!.querySelector('#hero-child_analytic-chart'),
          {
            x: 0,
            y: 50,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
          }
        );
    });

    return () => ctx.revert();
  }, [parent]);

  return (
    <section className="relative w-full h-full" ref={parent}>
      <div className="max-w-screen-xl px-5 mx-auto my-10">
        <div className="w-full h-full">
          <div
            className="flex flex-col items-center justify-center gap-5 sm:gap-7 md:gap-8"
            id="hero-container"
          >
            <h1
              className="text-2xl font-bold text-center text-transparent md:text-3xl lg:text-6xl bg-title-gradient bg-clip-text"
              id="hero-title"
            >
              A CRM dashboard for engineering teams
            </h1>
            <p
              className="max-w-screen-md mx-auto text-center md:text-left text-sx md:text-base text-neutral_gray_300"
              id="hero-desc"
            >
              Rorem ipsum dolor sit amet consectetur. Gravida convallis orci
              ultrices non. Ultricies tempor at ut cursus mi. Aliquam sed amet
              vitae orci ac penatibus consectetur.
            </p>
            <div className="flex flex-col items-center justify-center mb-5 md:flex-row gap-5">
              <Button
                id="hero-link_1"
                url={'/'}
                rounded
                color="primary"
                size="md"
                className="text-center"
              >
                Get a demo
              </Button>
              <Button
                id="hero-link_2"
                url={'/'}
                rounded
                size="md"
                className="text-center border border-neutral_gray_500"
              >
                View pricing
              </Button>
            </div>

            <Analytic ref={childComponent} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
