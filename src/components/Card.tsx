import React from 'react';

export interface CardProps {
  img: {
    src: string;
    alt: string;
    title: string;
  };
  heading: string;
  body: string;
  cta: {
    url: string;
    text: string;
  };
}

export default function Card({ img, heading, body, cta }: CardProps) {
  return (
    <a className="card-link" href={cta.url} target="_blank">
      <div className="card">
        <div className="card__image">
          <img src={img.src} alt={img.alt} title={img.title} />
        </div>
        <div className="card__body">
          <h4>{heading}</h4>
          <small>{body}</small>
        </div>
        <div className="card__footer">
          <button className="button button--primary button--block">
            {cta.text}
          </button>
        </div>
      </div>
    </a>
  );
}
