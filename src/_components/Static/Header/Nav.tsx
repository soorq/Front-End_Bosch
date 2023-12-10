import type { TypeHeaderProps } from '~@/types/components';
import Link from 'next/link';
import React from 'react';

const Nav: React.FC<TypeHeaderProps> = ({ data }) => {
  const [open, setOpen] = React.useState(false);

  const dropMenu = React.useRef<HTMLUListElement | null>(null);
  const trigger = React.useRef<SVGSVGElement | null>(null);

  React.useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropMenu.current) return;

      if (
        !open ||
        dropMenu.current!.contains(target as Node) ||
        trigger.current!.contains(target as Node)
      ) {
        return;
      }
      setOpen(false);
    };

    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  React.useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!open || keyCode !== 27) return;

      setOpen(false);
    };

    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const memoLinks = React.useMemo(() => {
    return data?.map((link, index) => {
      return (
        <li
          key={index}
          onClick={() => setOpen(false)}
          className="text-center py-5 md:py-0 transition delay-150 text-neutral_gray_300 textransition-colors hover:text-neutral_white_200"
        >
          <Link className="px-4 py-2" href={link.url}>
            {link.title}
          </Link>
        </li>
      );
    });
  }, [data]);

  return (
    <nav className="w-auto h-full">
      <ul
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        ref={dropMenu}
        className={`py-2 top-20 right-0 md:bg-transparent text-xl ${
          open
            ? 'block w-full bg-neutral_black_1000 z-[10] h-auto overflow-hidden'
            : 'hidden'
        } md:text-base md:top-0 absolute md:relative md:flex`}
      >
        {memoLinks}
      </ul>
      <svg
        ref={trigger}
        onClick={() => setOpen(prev => !prev)}
        className="transition-colors stroke-neutral_gray_300 block md:hidden hover:stroke-neutral_gray_500"
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="26"
        viewBox="0 0 41 26"
        fill="none"
      >
        <path d="M3.03223 3H38.0322" strokeWidth="5" strokeLinecap="round" />
        <path d="M20.0947 23H38.0322" strokeWidth="5" strokeLinecap="round" />
        <path d="M10.9072 13H38.0322" strokeWidth="5" strokeLinecap="round" />
      </svg>
    </nav>
  );
};

export default Nav;
