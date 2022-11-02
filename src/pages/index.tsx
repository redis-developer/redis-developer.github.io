import React from 'react';
import Layout from '@docusaurus/theme-classic/lib/theme/Layout';

import Hero from '@site/src/theme/Hero';
import Languages from '@site/src/theme/Languages';
import Launchpad from '@site/src/theme/Launchpad';
import Demos from '@site/src/theme/Demos';
import Resources from '@site/src/theme/Resources';
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
