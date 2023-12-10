'use client';
import { EffectCoverflow, Navigation, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import React from 'react';
import 'swiper/css';

import SlideCard from '~@/_components/Card/CardSlide';
import { TypePropsSlideCard } from '~@/types/components';

const Clients: React.FC<TypePropsSlideCard> = ({ data }) => {
  const memozidSlides = React.useMemo(() => {
    return data?.map((slide, index) => (
      <SwiperSlide key={index} className="lg:max-w-sm  h-fit" id="slider-card">
        <SlideCard {...slide} />
      </SwiperSlide>
    ));
  }, [data]);

  return (
    <section className="w-full h-full overflow-hidden">
      <div className="max-w-screen-xl px-5 mx-auto my-10">
        <Swiper
          modules={[Virtual, EffectCoverflow, Navigation]}
          virtual
          spaceBetween={10}
          grabCursor
          effect="Coverflow"
          navigation={{
            nextEl: '#next_slider',
            prevEl: '#prev_slider',
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            600: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            425: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            375: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {memozidSlides}
        </Swiper>
        <div className="flex items-center justify-center w-full gap-6 mt-10">
          <div
            className="p-1 transition-all border stroke-neutral_gray_300 bg-neutral_gray_800 border-neutral_gray_500 rounded-xl hover:stroke-neutral_white_200"
            id="prev_slider"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M19.5 12L5.5 12"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 19L5.5 12L12.5 5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className="p-1 transition-all border stroke-neutral_gray_300 bg-neutral_gray_800 border-neutral_gray_500 rounded-xl hover:stroke-neutral_white_200"
            id="next_slider"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M5.5 12H19.5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 5L19.5 12L12.5 19"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
