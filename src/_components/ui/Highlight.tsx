'use client';
import { TypePropsHighlight } from '~@/types/components';
import 'highlight.js/styles/github-dark.css';
import hljs from 'highlight.js';
import React from 'react';

const Highlight: React.FC<TypePropsHighlight> = ({
  language = 'javascript',
  className,
  children,
}) => {
  const highlightedCode = hljs.highlight(children!.toString(), {
    language,
  }).value;

  React.useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div
      className={`${
        className ? className : ''
      }px-10 py-4 bg-black rounded-xl bg-gradient-to-r from-neutral_gray_600 to-neutral_black_1000 backdrop-blur-lg backdrop-brightness-90`}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: highlightedCode,
        }}
      />
    </div>
  );
};

export default Highlight;
