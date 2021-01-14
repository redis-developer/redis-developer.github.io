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
    page: '/create',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Create a new database using Cloud, Docker or from Sources
      </>
    ),
  },
  {
    title: 'Explore',
    page: '/explore',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Insert, Update and Explore your database using RedisInsigh.
      </>
    ),
  },
  {
    title: 'Code',
    page: '/develop',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Develop your application with your favorite language.
      </>
    ),
  },
];

function Feature({imageUrl, title, description, page}) {
  const imgUrl = useBaseUrl(imageUrl);
  const pageUrl = useBaseUrl(page);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3><a href={pageUrl}>{title}</a></h3>
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

            <div className=" col col--2 text--center">
              <a  href={useBaseUrl('/develop/java')}>
              <img src={useBaseUrl('/img/logos/java.png')} />
                <h4>Java</h4>
              </a>     
            </div>       

            <div className=" col col--2 text--center">
              <a  href={useBaseUrl('/develop/python')}>
              <img src={useBaseUrl('/img/logos/python.png')} />
                <h4>Python</h4>
              </a>     
            </div> 

            <div className=" col col--2 text--center">
              <a  href={useBaseUrl('/develop/node')}>
              <img src={useBaseUrl('/img/logos/nodejs.png')} />
                <h4>Node.js</h4>
              </a>     
            </div>          

            <div className=" col col--2 text--center">
              <a  href={useBaseUrl('/develop/golang')}>
              <img src={useBaseUrl('/img/logos/golang.png')} />
                <h4>Go</h4>
              </a>     
            </div>    

            </div>


        </div>
        </section>

        <section>
        <div className="container">

          <h1>Sample and Demos</h1>

          <b>New Article</b>
          <p>
            <h3>
              <a href={useBaseUrl('/guides/import-data/database-migration-aws-elasticache-redis-enterprise-cloud')}>
             Database Migration</a>
            </h3>
          
          </p>

        </div>
        </section>


      </main>
    </Layout>
  );
}

export default Home;
