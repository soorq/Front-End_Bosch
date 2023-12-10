import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full h-full">
      <div className="max-w-screen-xl px-5 mx-auto mt-10">
        <div className="divide-y-2 py-5 relative divide-neutral_gray_800 divide-dashed after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-footer-bg_mask after:bg-cover after:bg-no-repeat after:bg-center">
          <div className="grid grid-cols-1 gap-5 py-4 lg:gap-0 sm:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-1 px-2 mx-6">
              <Image
                className="object-cover w-10 h-auto mb-4"
                src={'/logo.svg'}
                alt="logo"
                width={1}
                height={1}
              />
              <form className="w-full p-6 border rounded-lg border-neutral_gray_500 bg-neutral_gray_800 relative z-10">
                <label
                  htmlFor="email"
                  className="flex flex-col items-start justify-center gap-4 mb-4"
                >
                  <h1 className="text-xl text-neutral_white_200">
                    Subscribe to our newsletter
                  </h1>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="false"
                    placeholder="Enter your email address"
                    className="py-2.5 text-xs px-4 rounded-full outline-none outline-0 border-neutral_gray_500 w-full border bg-neutral_gray_800"
                  />
                </label>
                <button
                  className="w-full px-10 py-2 rounded-full bg-primary"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="col-span-1 px-2 mx-6">
              <h1 className="mb-4 text-xl text-neutral_gray_300">Pages</h1>
              <p className="px-2 mb-3 text-base text-neutral_gray_300">Pages</p>
              <p className="px-2 mb-3 text-base text-neutral_gray_300">Pages</p>
              <p className="px-2 mb-3 text-base text-neutral_gray_300">Pages</p>
              <p className="px-2 mb-3 text-base text-neutral_gray_300">Pages</p>
              <p className="px-2 mb-3 text-base text-neutral_gray_300">Pages</p>
            </div>
            <div className="col-span-1 px-2 mx-6">
              <h1 className="mb-4 text-xl text-neutral_gray_300">Feauters</h1>
              <p className="px-2 mb-3 text-base text-neutral_gray_300">
                Careers
              </p>
              <p className="px-2 mb-3 text-base text-neutral_gray_300">
                Careers single
              </p>
              <p className="px-2 mb-3 text-base text-neutral_gray_300">
                Request a demo
              </p>
              <p className="px-2 mb-3 text-base text-neutral_gray_300">Login</p>
              <p className="px-2 mb-3 text-base text-neutral_gray_300">
                Sign Up
              </p>
            </div>
            <div className="col-span-1 px-2 mx-6">
              <h1 className="mb-4 text-xl text-neutral_gray_300">
                Utility Pages
              </h1>
              <p className="px-2 mb-3 text-base text-neutral_gray_300">
                Style guide
              </p>
              <p className="px-2 mb-3 text-base text-neutral_gray_300">
                Password protected
              </p>
              <p className="px-2 mb-3 text-base text-neutral_gray_300">
                404 Not found
              </p>
              <p className="px-2 mb-3 text-base text-neutral_gray_300">
                Licenses
              </p>
              <p className="px-2 mb-3 text-base text-neutral_gray_300">
                Changelog
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between w-full gap-4 p-6 md:gap-0 md:flex-row">
            <span className="">Copyright © 2020 by Soorq</span>
            <div className="flex items-center justify-center gap-4">
              <div className="px-4 py-2 border border-neutral_gray_500 bg-dark_b rounded-xl">
                1
              </div>
              <div className="px-4 py-2 border border-neutral_gray_500 bg-dark_b rounded-xl">
                2
              </div>
              <div className="px-4 py-2 border border-neutral_gray_500 bg-dark_b rounded-xl">
                3
              </div>
              <div className="px-4 py-2 border border-neutral_gray_500 bg-dark_b rounded-xl">
                4
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
