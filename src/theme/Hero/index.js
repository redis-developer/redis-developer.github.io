import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Typed from 'react-typed';

import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import SvgHero from '@site/src/svg/Hero';
import SvgCreate from '@site/src/svg/Create';
import SvgCreateBg from '@site/src/svg/CreateBg';
import SvgDevelop from '@site/src/svg/Develop';
import SvgDevelopBg from '@site/src/svg/DevelopBg';
import SvgExplore from '@site/src/svg/Explore';
import SvgExploreBg from '@site/src/svg/ExploreBg';
import SvgArrowRight from '@site/src/svg/ArrowRight';

function Hero() {
	return (
    <header className="rds-hero">
      <div className="container">
        <div className="row">

          <div className="col col--7">
            <h1 className="hero-title">The Home of<br /> Redis Developers</h1>

            <h2 className="hero-subtitle">
              <Typed
                strings={['>_ Made by developers for developers']}
                typeSpeed={75}
              >
              </Typed>
            </h2>

            <div className="boxes">
              <div className="box box-create">
                <SvgCreateBg color="#FFFFFF" className="bg" />
                <span className="icon">
                  <SvgCreate color="#FFFFFF" />
                </span>
                <div className="text">
                  <h3 className="title">Create</h3>
                  <p className="description">Create a new database using cloud, Docker or from sources</p>
                  <span className="more">Create a database <SvgArrowRight color="#DC382C" /></span>
                </div>
                <a href={useBaseUrl('/create/rediscloud')} className="link">Read More</a>
              </div>

              <div className="box box-develop">
                <SvgDevelopBg color="#FFFFFF" className="bg" />
                <span className="icon">
                  <SvgDevelop color="#FFFFFF" />
                </span>
                <div className="text">
                  <h3 className="title">Develop</h3>
                  <p className="description">Develop your application using your favorite language</p>
                  <span className="more">Code your application <SvgArrowRight color="#DC382C" /></span>
                </div>
                <a href={useBaseUrl('/develop/')} className="link">Read More</a>
              </div>

              <div className="box box-explore">
                <SvgExploreBg color="#FFFFFF" className="bg" />
                <span className="icon">
                  <SvgExplore color="#FFFFFF" />
                </span>
                <div className="text">
                  <h3 className="title">Explore</h3>
                  <p className="description">Insert, update, and explore your database using RedisInsight</p>
                  <span className="more">Explore your data <SvgArrowRight color="#DC382C" /></span>
                </div>
                <a href={useBaseUrl('/explore/redisinsight/')} className="link">Read More</a>
              </div>
            </div>
          </div>

          <div className="col col--5">
            <SvgHero color="#FFFFFF" className="illustration" />
          </div>
          
        </div>
      </div>
    </header>
	);
}
 
export default Hero;
