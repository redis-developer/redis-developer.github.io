import React from 'react';

export interface ExcerptProps {
  cta: string;
  image: string;
  title: string;
}

function Excerpt({
  cta,
  image,
  title,
  children,
}: React.PropsWithChildren<ExcerptProps>): JSX.Element {
  return (
    <>
      <p>
        Below you will find an excerpt from the e-book.{' '}
        <a href={cta} target="_blank">
          Click here to download the full e-book.
        </a>
      </p>
      <div className="margin-bottom--xs">
        <img src={image} loading="lazy" alt={title} />
      </div>
      {children}

      <p>
        I’m sure you’re eager to learn more, so{' '}
        <a href={cta} target="_blank">
          click here to download the full e-book.
        </a>
      </p>
    </>
  );
}

export default Excerpt;
