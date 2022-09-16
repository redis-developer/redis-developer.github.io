/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import Layout from '@theme/Layout';
import LandingPageWrapper from '../../components/LandingPageWrapper';
import useFormEmailValidator from '../../hooks/useFormEmailValidator';

export default function LearnAndEarnJWT() {
  const form = React.createRef<HTMLFormElement>();
  const warn = React.createRef<HTMLSpanElement>();

  useFormEmailValidator({
    form,
    invalid() {
      if (!warn.current) {
        return;
      }

      warn.current.style.display = 'block';
    },
    valid() {
      if (!warn.current) {
        return;
      }

      warn.current.style.display = 'none';
    },
  });

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
              <strong>
                Only business emails (no gmail, yahoo, etc.) will be accepted.
              </strong>
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <form ref={form} className="m-form" id="mktoForm_4161"></form>
            <strong ref={warn} style={{ display: 'none' }}>
              Only business emails (no gmail, yahoo, etc.) will be accepted.
            </strong>
          </div>
        </article>
      </Layout>
    </LandingPageWrapper>
  );
}
