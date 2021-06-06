import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Slider from 'react-slick';

function Resources() {
  var sliderSettings = {
    infinite: true,
    centerMode: true,
    centerPadding: '32.5px',
    speed: 500,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: 'unslick'
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return <section className="rds-resources">
    <div className="container" id="resources">

      <h2 className="section-title white">Resources<br /> &amp; community</h2>
      <h3 className="section-description white">The latest from your favorite community to support your Redis journey</h3>

      <Slider className="row articles" {...sliderSettings}>
        <div className="col col--4">
          <article className="article">
            <div className="article-wrapper">
              <img src={useBaseUrl('/img/redispod.png')} className="thumb" loading="lazy" alt="Redis Pods" />
              <div className="article-body">
                <span className="type">Podcast</span>
                <h3 className="title">How Redis scales Groww’s investing platform to empower 10 Million+ customers</h3>
              </div>
              <a href="https://redispods.simplecast.com/episodes/how-redis-scales-growws-investing-platform-to-empower-10-million-customers" target="_blank" rel="noopener" className="link">Read More</a>
            </div>
          </article>
        </div>
        <div className="col col--4">
          <article className="article">
            <div className="article-wrapper">
              <img src={useBaseUrl('/img/redis-sample-app-architecture-diagram.jpg')} className="thumb" loading="lazy" alt="Redis Enterprise Cloud sample app architecture diagram" />
              <div className="article-body">
                <span className="type">Blog</span>
                <h3 className="title">Serverless development with AWS Lambda and Redis Enterprise Cloud</h3>
              </div>
              <a href="https://redislabs.com/blog/serverless-development-with-aws-lambda-and-redis-enterprise-cloud/" target="_blank" rel="noopener" className="link">Read More</a>
            </div>
          </article>
        </div>
        <div className="col col--4">
          <article className="article">
            <div className="article-wrapper">
              <img src={useBaseUrl('/img/redis-client-in-python-sample.jpg')} className="thumb" loading="lazy" alt="Terminal screenshot of Python code" />
              <div className="article-body">
                <span className="type">Video</span>
                <h3 className="title">How to write a Redis client in Python, from scratch</h3>
              </div>
              <a href="https://youtu.be/C5KkQUKhc_4?t=324" target="_blank" rel="noopener" className="link">Read More</a>
            </div>
          </article>
        </div>
      </Slider>

      <div className="cta">
        <a href="https://redislabs.com/community/" target="_blank" rel="noopener" className="btn">Join the community</a>
      </div>

    </div>
  </section>;
}

export default Resources;
