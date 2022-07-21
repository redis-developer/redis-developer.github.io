/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useLayoutEffect } from 'react';
import Layout from '@theme/Layout';
import LandingPageWrapper from '../../../components/LandingPageWrapper';
import useQueryParams from '../../../hooks/useQueryParams';
import Card from '../../../components/Card';
import { codeLinks } from './data';

interface ThankYouParams {
  m?: string;
  code?: string;
}

function alignCardHeights() {
  let maxHeight = -1;
  const cards = document.querySelectorAll<HTMLElement>('.col-card .card');
  cards.forEach((el) => {
    if (el.offsetHeight > maxHeight) {
      maxHeight = el.offsetHeight;
    }
  });

  cards.forEach((el) => {
    el.style.height = `${maxHeight}px`;
  });
}

export default function ThankYou() {
  const params: ThankYouParams = useQueryParams();

  useLayoutEffect(() => {
    // attempt this for 1 second to make it as snappy as possible
    const timeouts = [
      setTimeout(alignCardHeights, 50),
      setTimeout(alignCardHeights, 100),
      setTimeout(alignCardHeights, 200),
      setTimeout(alignCardHeights, 300),
      setTimeout(alignCardHeights, 500),
      setTimeout(alignCardHeights, 600),
      setTimeout(alignCardHeights, 700),
      setTimeout(alignCardHeights, 800),
      setTimeout(alignCardHeights, 900),
      setTimeout(alignCardHeights, 1000),
    ];

    return () => {
      timeouts.forEach(clearTimeout);
    };
  });

  const code = params.code;
  let links: typeof codeLinks.jwt[0][] = [];
  if (!!code) {
    links = codeLinks[code as keyof typeof codeLinks];
  }

  return (
    <LandingPageWrapper hasForm={false}>
      {/* @ts-ignore */}
      <Layout title="Learn to Earn with Redis!">
        <article className="padding-top--md">
          <div className="padding-vert--md">
            <header>
              <h1
                style={{
                  textAlign: 'center',
                }}>
                Thank you!
              </h1>
            </header>
            <div
              style={{
                width: '70%',
                minWidth: '370px',
                margin: 'auto',
                textAlign: 'center',
              }}>
              <p>{params.m ?? 'Thank you for your submission!'}</p>
            </div>
          </div>
          {!!links && links.length > 0 && (
            <div className="padding-vert--md follow-up-section">
              <h2
                style={{
                  textAlign: 'center',
                }}>
                Continue your Redis journey
              </h2>
              <div className="container">
                <div className="row">
                  {links.map((value) => {
                    return (
                      <div key={value.heading} className="col col--4 col-card">
                        <Card {...value} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </article>
      </Layout>
    </LandingPageWrapper>
  );
}
