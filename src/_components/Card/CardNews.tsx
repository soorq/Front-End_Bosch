import { TypeCardNewsProps } from '~@/types/components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CardNews: React.FC<TypeCardNewsProps> = ({
    date,
    desc,
    img,
    title,
    url,
}) => {
    return (
        <div className="max-w-sm max-h-fit">
            <div className="p-5 border rounded-[10px] border-neutral_gray_500 bg-neutral_gray_800">
                <Image
                    src={`/img/${img}`}
                    alt="LogoNews"
                    width={1000}
                    className="object-cover w-full h-auto mb-5"
                    height={1000}
                />
                <div className="flex flex-col divide-y-[1px] divide-neutral_gray_500">
                    <div className="w-full mb-4 ">
                        <h4 className="mb-2 text-base text-neutral_white_200">
                            {title}
                        </h4>
                        <p className="text-sm text-neutral_gray_300">{desc}</p>
                    </div>
                    <div className="w-full ">
                        <div className="flex items-center justify-between pt-3">
                            <p className="text-neutral_gray_300">{date}</p>
                            <Link
                                href={url}
                                className="px-1 py-1 text-sm transition-colors text-neutral_white_200 hover:text-white/50"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardNews;
