import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import SvgDots from '@site/src/svg/Dots';

function Demos() {
  return <section className="rds-demos">
    <div className="container">

      <h2 className="section-title">Top Redis Modules<br /> and HowTos Guides</h2>

      <div className="row terminals">
        <img src={useBaseUrl('/img/code-1.png')} className="code" alt="" />

        <div className="col col--6">

          <div className="terminal left">
            <div className="terminal-header">
              <SvgDots />
            </div>
            <div className="terminal-body">
              <h3 className="title">Top Redis Modules</h3>
              <ul className="links">
                <li><a href="https://redislabs.com/modules/get-started/" target="_blank" rel="noopener">Getting Started with Redis Modules</a></li>
                <li><a href="https://redislabs.com/modules/redisjson-quick-start/" target="_blank" rel="noopener">Getting Started with RedisJSON</a></li>
                <li><a href="https://redislabs.com/modules/redisearch-quick-start/" target="_blank" rel="noopener">Getting Started with RediSearch</a></li>
                <li><a href="https://redislabs.com/modules/redisgraph-quick-start/" target="_blank" rel="noopener">Getting Started with RedisGraph</a></li> 
                <li><a href="https://redislabs.com/modules/redistimeseries-quick-start/" target="_blank" rel="noopener">Getting Started with RedisTimeSeries</a></li>
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
              <h3 className="title">HowTos & Tutorials</h3>
              <ul className="links">
                <li><a href="/howtos/Shoppingcart/" target="_blank" rel="noopener">How to build Shopping cart app using NodeJS & Redis</a></li>
                <li><a href="/howtos/RateLimiting/" target="_blank" rel="noopener">How to build Rate Limiting using Redis & Python</a></li>
                <li><a href="/howtos/Moviesdatabase/intro" target="_blank" rel="noopener">How to build Movies Database app using RediSearch</a></li>
                <li><a href="/howtos/Leaderboard/" target="_blank" rel="noopener">How to build a real-time leaderboard app using Redis</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>;
}

export default Demos;
