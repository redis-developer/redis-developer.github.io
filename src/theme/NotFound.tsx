/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Layout from '@theme/Layout';

import useBaseUrl from '@docusaurus/useBaseUrl';

import SvgDots from '@site/src/svg/Dots';
import Typed from '@theme/Typed';

function NotFound() {
  return (
    <Layout>
      <main className="rds-404">
        <img src={useBaseUrl('/img/code-3.png')} className="code" alt="" />

        <div className="container">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <div className="terminal">
                <div className="terminal-header">
                  <SvgDots color="#FFFFFF" />
                </div>
                <div className="terminal-body">404</div>
              </div>

              <h1 className="title">
                <Typed strings={['>_ Page not found']} typeSpeed={75} />
              </h1>

              <a href="/" className="link">
                Back to homepage
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default NotFound;
