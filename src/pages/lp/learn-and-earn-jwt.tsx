/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import Layout from '@theme/Layout';
import LandingPageWrapper from '../../components/LandingPageWrapper';

export default function LearnAndEarnJWT() {
  return (
    <LandingPageWrapper>
      {/* @ts-ignore */}
      <Layout title="Learn and Earn with Redis!">
        <article className="padding-top--md padding-bottom--lg">
          <h1
            style={{
              textAlign: 'center',
            }}>
            Learn and Earn with Redis!
          </h1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '1rem',
            }}>
            <p>
              Complete this short assessment for a chance to earn a $25 Amazon
              gift card! If you need help, all of the answers can be found in{' '}
              <a
                href="https://redis.com/docs/json-web-tokens-jwts-are-not-safe/"
                target="_blank">
                this e-book.
              </a>
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              margin: '1rem',
            }}>
            <form className="m-form" id="mktoForm_4161"></form>
            <strong style={{ maxWidth: '30rem' }}>
              To receive your gift card, you must be a legal resident of any of
              the 50 United States and D.C., Canada, Germany, Ireland, France,
              and the United Kingdom;
            </strong>
          </div>
        </article>
      </Layout>
    </LandingPageWrapper>
  );
}
