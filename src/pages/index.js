import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import Hero from '@theme/Hero';
import Languages from '@theme/Languages';
import Demos from '@theme/Demos';
import Resources from '@theme/Resources';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Welcome to the ${siteConfig.title} by Redis Labs`}
      description="Learn all the best practices to get up and running with Redis in no time. Get started and discover the power of Redis, whether on your local machines or in the cloud.">
      <Hero />
      <main className="home-main">
        <Languages />
        <Demos />
        <Resources />
      </main>
    </Layout>
  );
}

export default Home;
