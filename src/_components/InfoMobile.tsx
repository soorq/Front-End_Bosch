'use client';
import Button from '~@/_components/ui/Button';
import React from 'react';

const InfoMobile: React.FC = () => {
  return (
    <section className="w-full h-full">
      <div className="lg:max-w-screen-lg md:max-w-screen-md px-5 py-6 mx-auto my-10">
        <div className="w-full h-full block after:absolute after:top-0 after:left-0 relative after:w-full after:h-full after:bg-info-bg_mask after:bg-center after:bg-cover bg-center bg-no-repeat bg-cover border bg-info-bg overflow-hidden after:mix-blend-hard-light border-neutral_gray_500 rounded-xl">
          <div className="w-full h-full max-w-md py-12 mx-auto">
            <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="66"
                height="50"
                viewBox="0 0 66 50"
                fill="none"
              >
                <g clipPath="url(#clip0_125_4362)">
                  <path
                    d="M55.6945 4.1701C51.4065 2.19641 46.8702 0.794019 42.2053 0C41.6243 1.03342 40.9454 2.42337 40.4772 3.52915C35.4477 2.78518 30.4645 2.78518 25.5274 3.52915C25.0595 2.42362 24.3653 1.03342 23.7789 0C19.1095 0.794385 14.5693 2.20035 10.2793 4.1804C1.74249 16.8711 -0.571773 29.2462 0.585229 41.4462C6.24738 45.6058 11.7346 48.1327 17.1293 49.7862C18.4701 47.9724 19.6552 46.0521 20.6726 44.0452C18.7357 43.3198 16.8684 42.4258 15.093 41.3739C15.5602 41.0332 16.0164 40.6782 16.4609 40.3093C27.2192 45.2595 38.9088 45.2595 49.5389 40.3093C49.9854 40.6757 50.4414 41.0307 50.9066 41.3739C49.1283 42.4286 47.2576 43.3244 45.3167 44.0505C46.3399 46.0656 47.5229 47.9877 48.86 49.7912C54.2599 48.1379 59.7522 45.6111 65.4143 41.4462C66.7721 27.3035 63.0952 15.042 55.6945 4.1701ZM22.1384 33.9435C18.9088 33.9435 16.2602 30.9774 16.2602 27.3656C16.2602 23.7538 18.8523 20.7827 22.1384 20.7827C25.4247 20.7827 28.0731 23.7485 28.0166 27.3656C28.0217 30.9774 25.4247 33.9435 22.1384 33.9435ZM43.8612 33.9435C40.6315 33.9435 37.9832 30.9774 37.9832 27.3656C37.9832 23.7538 40.5751 20.7827 43.8612 20.7827C47.1475 20.7827 49.7958 23.7485 49.7394 27.3656C49.7394 30.9774 47.1475 33.9435 43.8612 33.9435Z"
                    fill="#5865F2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_125_4362">
                    <rect
                      width="65.3846"
                      height="50"
                      fill="white"
                      transform="translate(0.307617)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <h1 className="text-xl font-bold text-neutral_white_200 md:text-3xl">
                Join the community
              </h1>
              <p className="text-base text-center text-neutral_gray_300">
                Join our 400,000+ person community and contribute to a more
                private and decentralized internet. Start for free.
              </p>
              <Button
                url="/"
                border
                rounded
                size="md"
                className="text-center relative z-[1] bg-blue-400 text-neutral_white_200"
              >
                Join to us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoMobile;
