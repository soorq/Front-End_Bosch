'use client';
import { AnalyticChart } from '~@/_components/Charts/AnalyticChart';
import Image from 'next/image';
import React from 'react';

const Analytic = React.forwardRef((props, ref) => {
  const analyticParent = React.useRef<HTMLElement | null>(null);

  React.useImperativeHandle(ref, () => {
    getData: () => {
      return analyticParent.current;
    };
  });

  return (
    <div
      className="hidden sm:block max-w-screen-lg px-10 mx-auto"
      id="hero-table"
    >
      <div className="w-full h-full overflow-hidden border bg-neutral_gray_800 border-neutral_gray_500 rounded-xl">
        {/* Header buttons */}
        <div className="w-full px-5 py-2 bg-neutral_gray_500">
          <div className="flex items-center justify-start gap-3">
            <span className="block w-3 h-3 rounded-full bg-neutral_gray_800 hover:bg-rose-500"></span>
            <span className="block w-3 h-3 rounded-full bg-neutral_gray_800 hover:bg-yellow-200"></span>
            <span className="block w-3 h-3 rounded-full bg-neutral_gray_800 hover:bg-green-300"></span>
          </div>
        </div>

        {/* Body */}
        <div className="w-full h-auto p-10">
          {/* Body - header */}
          <div className="w-full h-full divide-y-2 divide-neutral_gray_500">
            <div
              className="flex items-center justify-between w-full mb-4"
              id="hero-child_analytic-header"
            >
              <div className="flex items-center">
                <Image
                  className="object-cover w-12 h-12 mr-5 rounded-full"
                  src={'/img/card1.png'}
                  alt=""
                  width={100}
                  height={100}
                />

                <div className="">
                  <h1 className="text-white">Hello Sajeeb!</h1>
                  <p className="text-neutral_gray_300">
                    We hope you’re having a great night.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2 border border-neutral_gray_500 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.1616 0.833252C13.5066 0.833252 13.7866 1.11325 13.7866 1.45825L13.787 2.16476C15.0037 2.24818 16.0143 2.66496 16.7295 3.38167C17.5103 4.16584 17.9212 5.29334 17.917 6.64584V14.2483C17.917 17.025 16.1537 18.75 13.3162 18.75H6.26783C3.43033 18.75 1.66699 17.0008 1.66699 14.185V6.64417C1.66699 4.02516 3.23954 2.34404 5.80423 2.16505L5.80474 1.45825C5.80474 1.11325 6.08474 0.833252 6.42974 0.833252C6.77474 0.833252 7.05474 1.11325 7.05474 1.45825L7.05449 2.14909H12.5362L12.5366 1.45825C12.5366 1.11325 12.8166 0.833252 13.1616 0.833252ZM16.667 8.25325H2.91699V14.185C2.91699 16.3233 4.10699 17.5 6.26783 17.5H13.3162C15.477 17.5 16.667 16.345 16.667 14.2483L16.667 8.25325ZM13.5013 13.4968C13.8463 13.4968 14.1263 13.7768 14.1263 14.1218C14.1263 14.4668 13.8463 14.7468 13.5013 14.7468C13.1563 14.7468 12.873 14.4668 12.873 14.1218C12.873 13.7768 13.1488 13.4968 13.4938 13.4968H13.5013ZM9.80341 13.4968C10.1484 13.4968 10.4284 13.7768 10.4284 14.1218C10.4284 14.4668 10.1484 14.7468 9.80341 14.7468C9.45841 14.7468 9.17508 14.4668 9.17508 14.1218C9.17508 13.7768 9.45091 13.4968 9.79591 13.4968H9.80341ZM6.09774 13.4968C6.44274 13.4968 6.72274 13.7768 6.72274 14.1218C6.72274 14.4668 6.44274 14.7468 6.09774 14.7468C5.75274 14.7468 5.46858 14.4668 5.46858 14.1218C5.46858 13.7768 5.74524 13.4968 6.09024 13.4968H6.09774ZM13.5013 10.2579C13.8463 10.2579 14.1263 10.5379 14.1263 10.8829C14.1263 11.2279 13.8463 11.5079 13.5013 11.5079C13.1563 11.5079 12.873 11.2279 12.873 10.8829C12.873 10.5379 13.1488 10.2579 13.4938 10.2579H13.5013ZM9.80341 10.2579C10.1484 10.2579 10.4284 10.5379 10.4284 10.8829C10.4284 11.2279 10.1484 11.5079 9.80341 11.5079C9.45841 11.5079 9.17508 11.2279 9.17508 10.8829C9.17508 10.5379 9.45091 10.2579 9.79591 10.2579H9.80341ZM6.09774 10.2579C6.44274 10.2579 6.72274 10.5379 6.72274 10.8829C6.72274 11.2279 6.44274 11.5079 6.09774 11.5079C5.75274 11.5079 5.46858 11.2279 5.46858 10.8829C5.46858 10.5379 5.74524 10.2579 6.09024 10.2579H6.09774ZM12.5362 3.39909H7.05449L7.05474 4.20075C7.05474 4.54575 6.77474 4.82575 6.42974 4.82575C6.08474 4.82575 5.80474 4.54575 5.80474 4.20075L5.8043 3.418C3.93744 3.57483 2.91699 4.70647 2.91699 6.64417V7.00325H16.667L16.667 6.64417C16.6703 5.615 16.3937 4.815 15.8445 4.265C15.3624 3.78151 14.6577 3.49275 13.7873 3.4184L13.7866 4.20075C13.7866 4.54575 13.5066 4.82575 13.1616 4.82575C12.8166 4.82575 12.5366 4.54575 12.5366 4.20075L12.5362 3.39909Z"
                    fill="#fff"
                  />
                </svg>
                <p className="text-white">Today</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#8F9BB7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="flex flex-col">
              <div
                className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-4"
                id="hero-child_analytic-cols"
              >
                <div className="col-span-1 px-5 py-4 rounded-md bg-neutral_black_1000">
                  <svg
                    className="mb-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.45 3.7803C15.41 4.0303 15.39 4.2803 15.39 4.5303C15.39 6.7803 17.21 8.5993 19.45 8.5993C19.7 8.5993 19.94 8.5703 20.19 8.5303V16.5993C20.19 19.9903 18.19 22.0003 14.79 22.0003H7.401C4 22.0003 2 19.9903 2 16.5993V9.2003C2 5.8003 4 3.7803 7.401 3.7803H15.45ZM15.651 9.8603C15.38 9.8303 15.111 9.9503 14.95 10.1703L12.531 13.3003L9.76 11.1203C9.59 10.9903 9.39 10.9393 9.19 10.9603C8.991 10.9903 8.811 11.0993 8.69 11.2593L5.731 15.1103L5.67 15.2003C5.5 15.5193 5.58 15.9293 5.88 16.1503C6.02 16.2403 6.17 16.3003 6.34 16.3003C6.571 16.3103 6.79 16.1893 6.93 16.0003L9.44 12.7693L12.29 14.9103L12.38 14.9693C12.7 15.1393 13.1 15.0603 13.33 14.7593L16.22 11.0303L16.18 11.0503C16.34 10.8303 16.37 10.5503 16.26 10.3003C16.151 10.0503 15.91 9.8803 15.651 9.8603ZM19.5901 2C20.9201 2 22.0001 3.08 22.0001 4.41C22.0001 5.74 20.9201 6.82 19.5901 6.82C18.2601 6.82 17.1801 5.74 17.1801 4.41C17.1801 3.08 18.2601 2 19.5901 2Z"
                      fill="#2D55FB"
                    />
                  </svg>

                  <div className="flex gap-2 mb-2">
                    <p className="text-white">Total Revenue</p>
                    <span className="px-2 py-1 text-[10px] text-success_green rounded-full bg-success_green/20">
                      +15%
                    </span>
                  </div>

                  <p className="text-2xl text-white">$59,158</p>
                </div>

                <div className="col-span-1 px-5 py-4 rounded-md bg-neutral_black_1000">
                  <svg
                    className="mb-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.191 2C19.28 2 21 3.78 21 6.83V17.16C21 20.26 19.28 22 16.191 22H7.81C4.77 22 3 20.26 3 17.16V6.83C3 3.78 4.77 2 7.81 2H16.191ZM8.08 15.74C7.78 15.71 7.49 15.85 7.33 16.11C7.17 16.36 7.17 16.69 7.33 16.95C7.49 17.2 7.78 17.35 8.08 17.31H15.92C16.319 17.27 16.62 16.929 16.62 16.53C16.62 16.12 16.319 15.78 15.92 15.74H8.08ZM15.92 11.179H8.08C7.649 11.179 7.3 11.53 7.3 11.96C7.3 12.39 7.649 12.74 8.08 12.74H15.92C16.35 12.74 16.7 12.39 16.7 11.96C16.7 11.53 16.35 11.179 15.92 11.179ZM11.069 6.65H8.08V6.66C7.649 6.66 7.3 7.01 7.3 7.44C7.3 7.87 7.649 8.22 8.08 8.22H11.069C11.5 8.22 11.85 7.87 11.85 7.429C11.85 7 11.5 6.65 11.069 6.65Z"
                      fill="#B756FE"
                    />
                  </svg>
                  <div className="flex gap-2 mb-2">
                    <p className="text-white">Subscribers</p>

                    <span className="px-2 py-1 text-[10px] text-success_green rounded-full bg-success_green/20">
                      +11%
                    </span>
                  </div>

                  <p className="text-2xl text-white">2,984</p>
                </div>

                <div className="col-span-1 px-5 py-4 rounded-md bg-neutral_black_1000">
                  <svg
                    className="mb-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.3408 2.1037C11.7333 1.96543 12.1661 1.96543 12.5687 2.1037L19.2014 4.32867C19.9462 4.57382 20.4495 5.26122 20.4495 6.02608L20.4999 12.6637C20.5099 14.674 19.7751 16.6253 18.4264 18.1561C17.8125 18.8621 17.0174 19.4603 16.0109 19.9996L12.4379 21.9117C12.3272 21.9706 12.2064 22 12.0856 22C11.9648 22 11.834 21.9706 11.7233 21.9117L8.12005 20.0486C7.1035 19.5191 6.30838 18.9307 5.68436 18.2345C4.31554 16.7244 3.55062 14.773 3.54055 12.7628L3.50014 6.12316C3.49023 5.3583 3.99347 4.67286 4.7282 4.41693L11.3408 2.1037ZM10.6363 9.35913C10.3444 9.07476 9.87133 9.07476 9.56939 9.35913C9.27751 9.65429 9.27751 10.1152 9.56939 10.3995L10.9281 11.7224L9.56939 13.0472C9.27751 13.3315 9.27751 13.8022 9.56939 14.0866C9.72036 14.2337 9.91159 14.3013 10.1028 14.3013C10.3041 14.3013 10.4954 14.2337 10.6363 14.0866L11.995 12.7628L13.3538 14.0866C13.5047 14.2337 13.696 14.3013 13.8872 14.3013C14.0784 14.3013 14.2797 14.2337 14.4206 14.0866C14.7125 13.8022 14.7125 13.3315 14.4206 13.0472L13.0619 11.7224L14.4206 10.3995C14.7125 10.1152 14.7125 9.65429 14.4206 9.35913C14.1288 9.07476 13.6456 9.07476 13.3538 9.35913L11.995 10.6839L10.6363 9.35913Z"
                      fill="#32CAFD"
                    />
                  </svg>

                  <div className="flex gap-2 mb-2">
                    <p className="text-white">Conversations</p>

                    <span className="px-2 py-1 text-[10px] text-red-400 rounded-full bg-red-400/20">
                      -5%
                    </span>
                  </div>
                  <p className="text-2xl text-white">698</p>
                </div>

                <div className="col-span-1 px-5 py-4 rounded-md bg-neutral_black_1000">
                  <svg
                    className="mb-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.669 2.00049C20.07 2.00049 21.99 3.92949 22 7.33049V16.6705C22 20.0705 20.07 22.0005 16.669 22.0005H7.33C3.929 22.0005 2 20.0705 2 16.6705V7.33049C2 3.92949 3.929 2.00049 7.33 2.00049H16.669ZM12.5 6.13049C12.219 5.96049 11.879 5.96049 11.61 6.13049C11.339 6.29949 11.19 6.61049 11.219 6.92049V17.1105C11.27 17.5405 11.629 17.8605 12.049 17.8605C12.48 17.8605 12.839 17.5405 12.879 17.1105V6.92049C12.919 6.61049 12.77 6.29949 12.5 6.13049ZM7.83 9.41049C7.56 9.24049 7.219 9.24049 6.95 9.41049C6.679 9.58049 6.53 9.88949 6.56 10.2005V17.1105C6.599 17.5405 6.959 17.8605 7.389 17.8605C7.82 17.8605 8.179 17.5405 8.219 17.1105V10.2005C8.25 9.88949 8.099 9.58049 7.83 9.41049ZM17.089 13.0405C16.82 12.8705 16.48 12.8705 16.2 13.0405C15.929 13.2105 15.78 13.5095 15.82 13.8305V17.1105C15.86 17.5405 16.219 17.8605 16.65 17.8605C17.07 17.8605 17.429 17.5405 17.48 17.1105V13.8305C17.509 13.5095 17.36 13.2105 17.089 13.0405Z"
                      fill="#DF2DB1"
                    />
                  </svg>

                  <div className="flex gap-2 mb-2">
                    <p className="text-white">Popup sales</p>

                    <span className="px-2 py-1 text-[10px] text-success_green rounded-full bg-success_green/20">
                      +15%
                    </span>
                  </div>
                  <p className="text-2xl text-white">$658</p>
                </div>
              </div>

              {/* Chart */}
              <div
                className="relative max-w-full px-10 py-5 overflow-hidden rounded-md max-h-96 bg-neutral_black_1000"
                id="hero-child_analytic-chart"
              >
                <div className="relative w-full">
                  <React.Suspense
                    fallback={<h1 className="text-white">Loading...</h1>}
                  >
                    <AnalyticChart />
                  </React.Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Analytic.displayName = 'Analytic';

export default Analytic;
