import React from 'react';

function Launchpad() {
  return (
    <section className="rds-launchpad">
      <div className="container" id="resources">
        <h2 className="section-title white">
          <br />
        </h2>
        <h3 className="section-description white"></h3>

        <a
          href="https://launchpad.redis.com"
          target="_blank"
          rel="noopener"
          className="link">

          <img
            src="/img/launchpad.png"
            className="thumb"
            loading="lazy"
            alt="Redis Launchpad"
          />
        </a>
      </div>
    </section>
  );
}

export default Launchpad;
