import Image from 'next/image';
import React from 'react';

const CardInovation: React.FC = () => {
  return (
    <div className="hidden relative z-[1] w-full p-3 mb-10 sm:block lg:w-1/2 lg:mb-0 lg:p-0">
      <div className="border-2 rounded-lg border-neutral_gray_500">
        <div className="p-5 ">
          {/* Header Img */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex justify-between divide-x-2 md:justify-center divide-neutral_gray_500">
              <div className="p-2 mr-5 transition-all border rounded-lg stroke-neutral_gray_300 hover:bg-neutral_gray_500 hover:stroke-neutral_gray_800 border-neutral_gray_500">
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.49605 1L1.38581 9M1.38574 1L9.49598 9"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="flex gap-2 px-5">
                <div className="p-2 transition-all border rounded-lg stroke-neutral_gray_300 hover:bg-neutral_gray_500 hover:stroke-neutral_gray_800 border-neutral_gray_500">
                  <svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.3555 0.987854V10.3212M7.68614 8.18263L4.32308 11.5L1.28174 7.99998"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="p-2 transition-all border rounded-lg stroke-neutral_gray_300 hover:bg-neutral_gray_500 hover:stroke-neutral_gray_800 border-neutral_gray_500">
                  <svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.79597 11.3212L4.79597 1.98787M1.46533 4.12643L4.8284 0.809082L7.86973 4.30908"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="p-2 transition-all border rounded-lg stroke-neutral_gray_300 hover:bg-neutral_gray_500 hover:stroke-neutral_gray_800 border-neutral_gray_500">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.44255 6.8893L1.52588 3.97264M1.52588 3.97264L4.44255 1.05597M1.52588 3.97264L8.52588 3.97264C9.14472 3.97264 9.73821 4.21847 10.1758 4.65605C10.6134 5.09364 10.8592 5.68713 10.8592 6.30597V10.3893"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="p-2 transition-all border rounded-lg stroke-neutral_gray_300 hover:bg-neutral_gray_500 hover:stroke-neutral_gray_800 border-neutral_gray_500">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.44255 6.8893L1.52588 3.97264M1.52588 3.97264L4.44255 1.05597M1.52588 3.97264L8.52588 3.97264C9.14472 3.97264 9.73821 4.21847 10.1758 4.65605C10.6134 5.09364 10.8592 5.68713 10.8592 6.30597V10.3893"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="p-2 transition-all border rounded-lg stroke-neutral_gray_300 hover:bg-neutral_gray_500 hover:stroke-neutral_gray_800 border-neutral_gray_500">
                <svg
                  width="11"
                  height="12"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.20671 7.16665L10.1234 4.24998M10.1234 4.24998L7.20671 1.33331M10.1234 4.24998L3.12337 4.24998C2.50453 4.24998 1.91104 4.49581 1.47346 4.9334C1.03587 5.37098 0.790039 5.96447 0.790039 6.58331V10.6666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Body Img */}
          <div
            className="flex flex-col gap-5 overflow-x-hidden max-h-72"
            id="scroll-body"
          >
            <h1 className="text-lg text-neutral_white_200">
              Invitation to present at Bsides
            </h1>

            <div className="p-4 border rounded-lg border-neutral_gray_500 bg-neutral_gray_600">
              {/* HeaderCard */}
              <div className="flex justify-between w-full mb-3 md:items-start">
                <div className="flex items-center">
                  <Image
                    className="object-cover w-5 h-auto rounded-lg md:w-10"
                    src={'/img/card1.png'}
                    alt="CardUser"
                    width={40}
                    height={40}
                  />

                  <div className="px-4">
                    <h4 className="text-sm text-neutral_white_200 md:text-normal">
                      R. Baynham
                    </h4>

                    <p className="text-xs md:text-sm text-neutral_gray_300">
                      tranthuy.nute@gmail.com
                    </p>
                  </div>
                </div>

                <p className="text-neutral_gray_300">Feb 8, 2023</p>
              </div>

              {/* BodyCard */}
              <p className="text-neutral_gray_300">
                Lorem ipsum dolor sit amet consectetur. Non eget facilisis justo
                euismod ante mauris orci cursus.{' '}
              </p>
            </div>

            <div className="p-4 border rounded-lg border-neutral_gray_500 bg-neutral_gray_600">
              {/* HeaderCard */}
              <div className="flex items-start justify-between w-full mb-3">
                <div className="flex items-center">
                  <Image
                    className="object-cover w-10 h-auto rounded-lg"
                    src={'/img/card2.png'}
                    alt="CardUser"
                    width={40}
                    height={40}
                  />
                  <div className="px-4">
                    <h4 className="text-neutral_white_200">Cooper Kristin</h4>
                    <p className="text-neutral_gray_300">
                      tranthuy.nute@gmail.com
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="text-neutral_gray_300">Feb 8, 2023</p>
                </div>
              </div>
              {/* BodyCard */}
              <div className="">
                <p className="text-neutral_gray_300">
                  Lorem ipsum dolor sit amet consectetur. Non eget facilisis
                  justo euismod ante mauris orci cursus.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInovation;
