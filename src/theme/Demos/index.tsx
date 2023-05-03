import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import SvgDots from '@site/src/svg/Dots';

function Demos() {
  return (
    <section className="rds-demos">
      <div className="container">
        <h2 className="section-title">
          <br />
        </h2>

        <div className="row terminals">
          <img
            src={useBaseUrl('/img/code-1.png')}
            className="code"
            alt="Background image of sample redis code"
          />

          <div className="col col--6">
            <div className="terminal left">
              <div className="terminal-header">
                <SvgDots />
              </div>
              <div className="terminal-body">
                <h5 className="title">Getting started with Redis Stack</h5>
                <ul className="links">
                  <li>
                    <a href="/create/redis-stack/">
                      Introduction to Redis Stack
                    </a>
                  </li>
                  <li>
                    <a href="/howtos/redisjson/getting-started/">
                      Storing and querying JSON documents
                    </a>
                  </li>
                  <li>
                    <a href="/howtos/redisearch/">
                      Full-text search using Redis Stack
                    </a>
                  </li>
                  <li>
                    <a href="/howtos/redistimeseries/getting-started/">
                      Storing and Querying Time Series data
                    </a>
                  </li>
                  <li>
                    <a href="/howtos/redisbloom/">
                      Probabilistic data structures using Redis Stack
                    </a>
                  </li>
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
                  <li>
                    <a href="/howtos/redisjson/shoppingcart/">
                      How to build a Shopping Cart app Using NodeJS & RedisJSON
                    </a>
                  </li>
                  <li>
                    <a href="/howtos/ratelimiting/">
                      How to build a Rate Limiter Using Redis & Python
                    </a>
                  </li>
                  <li>
                    <a href="/howtos/moviesdatabase/getting-started/">
                      How to build a Movies Database app Using RediSearch
                    </a>
                  </li>
                  <li>
                    <a href="/howtos/leaderboard/">
                      How to build a Real-Time Leaderboard app Using Redis
                    </a>
                  </li>
                  <li>
                    <a href="/howtos/caching/">
                      How to cache REST API responses Using Redis & NodeJS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Demos;
