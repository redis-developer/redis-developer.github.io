import Head from '@docusaurus/Head';
import React from 'react';
import useForm from '../hooks/useForm';
import useMunchkin from '../hooks/useMunchkin';
import useSqueeze from '../hooks/useSqueeze';

export interface LandingPageWrapperProps {
  thankYou: string;
}

export default function LandingPageWrapper({
  thankYou,
  children,
}: React.PropsWithChildren<LandingPageWrapperProps>) {
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
