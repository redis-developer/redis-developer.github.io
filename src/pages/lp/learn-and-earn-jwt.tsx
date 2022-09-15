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
              width: '70%',
              minWidth: '370px',
              margin: 'auto',
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
            }}>
            <form className="m-form" id="mktoForm_4161"></form>
          </div>
        </article>
      </Layout>
    </LandingPageWrapper>
  );
}
