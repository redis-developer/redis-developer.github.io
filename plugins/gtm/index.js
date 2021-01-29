/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path');

module.exports = function (context) {
  const {siteConfig} = context;
  const {themeConfig} = siteConfig;
  const {googleTagManager} = themeConfig || {};

  if (!googleTagManager) {
    throw new Error(
      `You need to specify 'googleTagManager' object in 'themeConfig' with 'trackingId' field in it to use docusaurus-plugin-google-analytics`,
    );
  }

  const {trackingID} = googleTagManager;

  if (!trackingID) {
    throw new Error(
      'You specified the `googleTagManager` object in `themeConfig` but the `trackingID` field was missing. ' +
        'Please ensure this is not a mistake.',
    );
  }

  const isProd = process.env.NODE_ENV === 'production';

  return {
    name: 'docusaurus-plugin-gtm',

    // getClientModules() {
    //   return isProd ? [path.resolve(__dirname, './analytics')] : [];
    // },

    injectHtmlTags() {
      if (!isProd) {
        return {};
      }
      return {
        headTags: [
          {
            tagName: 'script',
            innerHTML: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${trackingID}');`,
          },
        ],
        preBodyTags: [
          {
            tagName: 'noscript',
            innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${trackingID}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          },
        ],
      };
    },
  };
};
