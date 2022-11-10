import React from 'react';
import Layout from '@theme/Layout';

import Hero from '@theme/Hero';
import Languages from '@theme/Languages';
import Launchpad from '@theme/Launchpad';
import Demos from '@theme/Demos';
import Resources from '@theme/Resources';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Hero />
      <main className="home-main">
        <Languages />
        <Launchpad />
        <Demos />
        <Resources />
      </main>
    </Layout>
  );
}

export default Home;
