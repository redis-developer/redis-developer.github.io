import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Create',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Create a new database using Cloud, Docker or from Sources
      </>
    ),
  },
  {
    title: 'Explore',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Insert, Update and Explore your database using RedisInsigh.
      </>
    ),
  },
  {
    title: 'Code',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Develop your application with your favorite language.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">The Home of Redis Developers</h1>
          <p className="hero__subtitle">Made by Developers for Developers</p>

        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}

        <section>
        <div className="container">
            <h1>Resources by Languages</h1>
            <p className="">Find documentation, sample code and tools to develop with your favorite language.</p>
            <div className="row text--center">
            <a class="col col--2" href={useBaseUrl('docs/develop/java')}>Java</a>            

            <a class="col col--2" href={useBaseUrl('docs/develop/python')}>Python</a>            

            <a class="col col--2" href={useBaseUrl('docs/develop/node')}>Node.js</a>            

            <a class="col col--2" href={useBaseUrl('docs/develop/golang')}>Golang</a>            


            </div>


        </div>
        </section>

        <section>
        <div className="container">

          <h1>Sample and Demos</h1>

        </div>
        </section>


      </main>
    </Layout>
  );
}

export default Home;
