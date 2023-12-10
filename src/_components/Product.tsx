'use client';
import Button from '~@/_components/ui/Button';
import Image from 'next/image';
import React from 'react';

const Product: React.FC = () => {
  return (
    <section className="w-full h-full">
      <div className="max-w-screen-xl px-5 mx-auto my-10">
        <div className="relative border-neutral_gray_500 bg-neutral_gray_800 border-2 rounded-xl after:absolute after:left-0 after:top-0 after:w-full after:h-full after:mix-blend-hard-light after:bg-product-bg_mask after:bg-no-repeat after:bg-cover after:bg-center">
          <div className="mx-0 md:mx-10 py-10">
            <div className="flex flex-col lg:flex-row justify-between items-center w-full mb-5">
              <div className="md:p-10 w-full px-3 md:w-2/3 mb-12 lg:mb-0">
                <h1 className="text-2xl mb-4 font-bold leading-normal text-transparent sm:text-2xl md:text-4xl bg-title-gradient bg-clip-text text-neutral_white_200">
                  Transparent, audited, &open source
                </h1>

                <p className="text-base text-neutral_gray_300 mb-10">
                  Torem ipsum dolor sit amet consectetur. Nulla quisque
                  scelerisque eget quis. Eu amet amet eu interdum.
                </p>

                <Button url="/" border rounded size="md">
                  Browse all feature
                </Button>
              </div>
              <div className="w-full px-3 md:w-2/3 md:px-0">
                <Image
                  src="/img/Product.svg"
                  alt="Img"
                  width={1000}
                  height={1000}
                  className="w-full object-contain h-auto"
                />
              </div>
            </div>
            <div className="pt-7 flex flex-col xl:flex-row gap-12">
              <div className="bg-neutral_black_1000 mx-3 md:mx-0 border rounded-xl border-neutral_gray_500">
                <div className="p-8 pb-0">
                  <h1 className="text-xl md:text-3xl mb-3">Product Mail</h1>

                  <p className="mb-8 text-sm sm:text-base text-neutral_gray_300">
                    Gonsectetur eque nec nunc facilisis tellus tincidunt.
                    Malesuada maecenas ac bibendum consectetur.
                  </p>

                  <Image
                    className="max-w-[200px] sm:max-w-sm md:max-w-lg lg:max-w-md h-auto mx-auto"
                    src={'/img/ProductMail.svg'}
                    alt="Product Mail"
                    height={1000}
                    width={1000}
                  />
                </div>
              </div>

              <div className="bg-neutral_black_1000 mx-3 md:mx-0 rounded-xl border border-neutral_gray_500">
                <div className="p-8 pb-0">
                  <h1 className="text-xl md:text-3xl mb-3">Product UI</h1>

                  <p className="mb-8 md:text-base text-sm text-neutral_gray_300">
                    Honsectetur eque nec nunc facilisis tellus tincidunt.
                    Malesuada maecenas ac bibendum consectetur.
                  </p>

                  <Image
                    className="max-w-[200px] sm:max-w-sm md:max-w-lg lg:max-w-md h-auto mx-auto"
                    src={'/img/ProductUi.svg'}
                    alt="Product Ui"
                    height={1000}
                    width={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
