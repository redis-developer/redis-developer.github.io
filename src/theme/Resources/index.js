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

      <h2 className="section-title white">Resources<br /> &amp; Community</h2>
      <h3 className="section-description white">Find documentation, sample code ad tools to develop with your favorite language.</h3>

      <Slider className="row articles" {...sliderSettings}>
        <div className="col col--4">

          <article className="article">
            <div className="article-wrapper">
              <img src="https://redislabs.com/wp-content/uploads/2020/12/tug-serverless-2-270x191.png" className="thumb" alt="" />
              <div className="article-body">
                <span className="type">Blog</span>
                <h3 className="title">Serverless Development with AWS Lambda and Redis Enterprise Cloud</h3>
              </div>
              <a href="https://redislabs.com/blog/serverless-development-with-aws-lambda-and-redis-enterprise-cloud/" className="link">Read More</a>
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
              <a href="https://events.redislabs.com/redisconf20/" className="link">Read More</a>
            </div>
          </article>

        </div>
        <div className="col col--4">

          <article className="article">
            <div className="article-wrapper">
              <img src={useBaseUrl('/media/resource-3.jpg')} className="thumb" alt="" />
              <div className="article-body">
                <span className="type">Podcast</span>
                <h3 className="title">How Redis Delivers 15 million+ users with over 25,000 ops per second</h3>
              </div>
              <a href="https://redisstars.simplecast.com/episodes/how-redis-delivers-15-million-myteam11-users-with-over-25-000-operations-per-second" className="link">Read More</a>
            </div>
          </article>

        </div>
      </Slider>

      <div className="cta">
        <a href="https://redislabs.com/community" className="btn">Join the Community</a>
      </div>

    </div>
  </section>;
}

export default Resources;
