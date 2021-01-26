import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Resources() {
  return <section className="rds-resources">
    <div className="container">

      <h2 className="section-title white">Resources &amp; Community</h2>
      <h3 className="section-description white">Find documentation, sample code ad tools to develop with your favorite language.</h3>

      <div className="row articles">
        <div className="col col--4">

          <article className="article">
            <div className="article-wrapper">
              <img src={useBaseUrl('/media/resource-1.jpg')} className="thumb" alt="" />
              <div className="article-body">
                <span className="type">Blog</span>
                <h3 className="title">How Redis Enterprise Cloud Meets the Needs of Maturing Enterprise Customers on AWS</h3>
              </div>
              <a href="#" className="link">Read More</a>
            </div>
          </article>

        </div>
        <div className="col col--4">

          <article className="article">
            <div className="article-wrapper">
              <img src={useBaseUrl('/media/resource-2.jpg')} className="thumb" alt="" />
              <div className="article-body">
                <span className="type">Video</span>
                <h3 className="title">Continue to Experience RedisConf 2020 Takeaway</h3>
              </div>
              <a href="#" className="link">Read More</a>
            </div>
          </article>

        </div>
        <div className="col col--4">

          <article className="article">
            <div className="article-wrapper">
              <img src={useBaseUrl('/media/resource-3.jpg')} className="thumb" alt="" />
              <div className="article-body">
                <span className="type">Podcast</span>
                <h3 className="title">6 Key Features to Consider When Choosing a DBaaS Provider</h3>
              </div>
              <a href="#" className="link">Read More</a>
            </div>
          </article>

        </div>
      </div>

      <div className="cta">
        <a href="#" className="btn">Join the Community</a>
      </div>

    </div>
  </section>;
}

export default Resources;
