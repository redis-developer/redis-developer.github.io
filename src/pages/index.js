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
        <hr/>

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

        <hr/>

          <h1>Sample and Demos</h1>


          <div className="row">

            <div className=" col " >
              <div className="ri-container">

                  <h3>Redis 101</h3>

                  <div className="ri-title">
                  <a href="https://github.com/redis-developer/redis-connect" target="_blank" >Connect to Redis: All Languages</a>
                  </div>

                  <div className="ri-title">
                  <a href="https://redislabs.com/blog/getting-started-with-redis-streams-and-java/" target="_blank" >Getting Started with Redis Streams and Java</a>
                  </div>

                  <div className="ri-title">
                  <a href="https://github.com/RediSearch/redisearch-getting-started" target="_blank" >Getting Started with RediSearch</a>
                  </div>

              </div>
            </div>

            <div className=" col " >
              <div className="ri-container">        

                <h3>Complete Applications</h3>

                <div className="ri-title">
                <a href="https://github.com/redis-developer/brewdis" target="_blank" >Brewdis</a>: Real-time inventory demo based on data from brewerydb.com.
                </div>

                <div className="ri-title">
                <a href="https://github.com/redis-developer/redis-microservices-demo/" target="_blank" >Redis Movie Database</a>: Microservices and Application modernization.
                </div>

                <div className="ri-title">
                <a href="https://github.com/redis-developer/basic-caching-demo-nodejs" target="_blank" >Basic Redis Caching</a>.
                </div>

              </div>
            </div>


          </div>


        </div>



        </section>


      </main>
    </Layout>
  );
}

export default Home;
