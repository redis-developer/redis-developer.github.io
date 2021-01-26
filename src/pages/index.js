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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Hero />
      <main style={{ overflow: 'hidden' }}>
        <Languages />
        <Demos />
        <Resources />
      </main>
    </Layout>
  );
}

export default Home;
