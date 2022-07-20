import Head from '@docusaurus/Head';
import React, { useLayoutEffect } from 'react';
import useForm from '../hooks/useForm';
import useMunchkin from '../hooks/useMunchkin';
import useSqueeze from '../hooks/useSqueeze';

export default function LandingPageWrapper({ thankYou, children }) {
  useSqueeze();
  useForm(thankYou);
  useMunchkin();

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <script src="//lp.redis.com/js/forms2/js/forms2.min.js"></script>
      </Head>
      {children}
    </>
  );
}
