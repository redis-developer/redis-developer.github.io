import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import SvgDots from '@site/src/svg/Dots';

function Demos() {
  return <section className="rds-demos">
    <div className="container">

      <h2 className="section-title">Samples<br /> and Demos</h2>

      <div className="row terminals">
        <img src={useBaseUrl('/img/code-1.png')} className="code" alt="" />

        <div className="col col--6">

          <div className="terminal left">
            <div className="terminal-header">
              <SvgDots />
            </div>
            <div className="terminal-body">
              <h3 className="title">Redis 101</h3>
              <ul className="links">
                <li><a href="https://github.com/redis-developer/redis-connect" target="_blank" rel="noopener">Connect to Redis: all languages</a></li>
                <li><a href="https://redislabs.com/blog/getting-started-with-redis-streams-and-java/" target="_blank" rel="noopener">Getting Started with Redis Streams</a></li>
                <li><a href="https://github.com/RediSearch/redisearch-getting-started" target="_blank" rel="noopener">Getting Started with RediSearch</a></li>
              </ul>
            </div>
          </div>

        </div>
        <div className="col col--6">

          <div className="terminal right">
            <div className="terminal-header">
              <SvgDots />
            </div>
            <div className="terminal-body">
              <h3 className="title">Complete Applications</h3>
              <ul className="links">
                <li><a href="https://github.com/redis-developer/brewdis" target="_blank" rel="noopener">Brewdis</a></li>
                <li><a href="https://github.com/RedisTimeSeries/redis-pop-up-store" target="_blank" rel="noopener">Popup Store</a></li>
                <li><a href="https://github.com/redis-developer/redis-microservices-demo/" target="_blank" rel="noopener">Redis Movie Database</a></li>
                <li><a href="https://github.com/redis-developer/basic-caching-demo-nodejs" target="_blank" rel="noopener">Basic Redis Caching Demo</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>;
}

export default Demos;
