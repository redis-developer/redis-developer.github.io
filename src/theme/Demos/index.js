import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import SvgDots from '@site/src/svg/Dots';

function Demos() {
  return <section className="rds-demos">
    <div className="container">

      <h2 className="section-title"><br /> </h2>

      <div className="row terminals">
        <img src={useBaseUrl('/img/code-1.png')} className="code" alt="Background image of sample redis code" />

        <div className="col col--6">

          <div className="terminal left">
            <div className="terminal-header">
              <SvgDots />
            </div>
            <div className="terminal-body">
              <h5 className="title">Build with Redis Modules</h5>
              <ul className="links">
                <li><a href="https://redislabs.com/modules/get-started/" target="_blank" rel="noopener">Getting Started with Redis Modules</a></li>
                <li><a href="https://redislabs.com/modules/redisjson-quick-start/" target="_blank" rel="noopener">RedisJSON Quick Start</a></li>
                <li><a href="https://redislabs.com/modules/redisearch-quick-start/" target="_blank" rel="noopener">RediSearch Quick Start</a></li>
                <li><a href="https://redislabs.com/modules/redisgraph-quick-start/" target="_blank" rel="noopener">RedisGraph Quick Start</a></li> 
                <li><a href="https://redislabs.com/modules/redistimeseries-quick-start/" target="_blank" rel="noopener">RedisTimeSeries Quick Start</a></li>
                <li><a href="https://redislabs.com/modules/redisbloom-quick-start/" target="_blank" rel="noopener">RedisBloom Quick Start</a></li>
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
              <h5 className="title">Featured how-tos & tutorials</h5>
              <ul className="links">
                <li><a href="/howtos/shoppingcart/">How to build a Shopping Cart app Using NodeJS & RedisJSON</a></li>
                <li><a href="/howtos/ratelimiting/">How to build a Rate Limiter Using Redis & Python</a></li>
                <li><a href="/howtos/moviesdatabase/getting-started/">How to build a Movies Database app Using RediSearch</a></li>
                <li><a href="/howtos/leaderboard/">How to build a Real-Time Leaderboard app Using Redis</a></li>
                <li><a href="/howtos/caching/">How to cache REST API responses Using Redis & NodeJS</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>;
}

export default Demos;
