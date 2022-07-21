import Head from '@docusaurus/Head';
import React from 'react';
import useForm from '../hooks/useForm';
import useMunchkin from '../hooks/useMunchkin';
import useSqueeze from '../hooks/useSqueeze';

export interface LandingPageWrapperProps {
  hasForm?: boolean;
}

export default function LandingPageWrapper({
  hasForm = true,
  children,
}: React.PropsWithChildren<LandingPageWrapperProps>) {
  useSqueeze({ skip: !hasForm });
  useForm({ skip: !hasForm });
  useMunchkin({ skip: !hasForm });

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        {hasForm && (
          <script src="//lp.redis.com/js/forms2/js/forms2.min.js"></script>
        )}
      </Head>
      <main className="lp-main">{children}</main>
    </>
  );
}
