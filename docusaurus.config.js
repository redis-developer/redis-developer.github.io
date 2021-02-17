const path = require('path')


module.exports = {
  title: 'Redis Developer Hub',
  tagline: 'The Home of Redis Developers',
  url: 'https://developer.redislabs.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'redis-developer', // Usually your GitHub org/user name.
  projectName: 'redis-developer', // Usually your repo name.
  themeConfig: {

    // ...
    googleTagManager: {
      trackingID: 'GTM-W8Z6BLQ',
    },

    navbar: {
      style: 'dark',
      title: null,
      logo: {
        alt: 'Redis Developer Hub logo',
        src: 'img/logo-1.png',
      },
      hideOnScroll: false,
      items: [
        {
          to: '/create/cloud',
          activeBasePath: 'docs',
          label: 'Get started',
          position: 'right',
        },
        /*
        {
          href: '#',
          label: 'Resources',
          position: 'right',
        },
        */
        {
          href: 'https://redis.io/commands',
          label: 'Command Reference',
          position: 'right',
        },
        {
          href: 'https://redislabs.com/try-free/',
          label: 'Try Free',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Redis Developer Hub logo',
        src: 'img/logo-2.png',
      },
      links: [
        {
          title: 'Get Started',
          items: [
            {
              label: 'Create Database',
              to: '/create/cloud/',
            },
            {
              label: 'Develop',
              to: '/develop/',
            },
            {
              label: 'Explore your data',
              to: '/explore/',
            },
            {
              label: 'Best Practices',
              href: 'https://redislabs.com/redis-best-practices/introduction/',
            },
            // {
            //   label: 'Tutorials',
            //   to: '#',
            // },
            // {
            //   label: 'Samples & Demos',
            //   to: '#',
            // },
            {
              label: 'Build with Redis Modules',
              href: 'https://redislabs.com/modules/get-started/',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Community',
              href: 'https://redislabs.com/community/',
            },
            {
              label: 'Redis University',
              href: 'https://university.redislabs.com',
            },
            {
              label: 'Command Reference',
              href: 'https://redis.io/commands',
            },
            {
              label: 'Tools',
              to: '/tools/',
            },
            {
              label: 'Guides',
              to: '/guides/',
            },            // {
            //   label: 'Use Cases',
            //   href: 'https://redislabs.com/solutions',
            // },
          ],
        },
      ],
      copyright: `Copyright: © ${new Date().getFullYear()} Redis Labs. Redis and the cube logo are registered trademarks of Redis Labs Ltd.`,
    },
    colorMode: {
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    announcementBar: {
      id: 'redisconf20201cfp', // Any value that will identify this message.
      content: '<p class="text">RedisConf 2021 – The Call for Papers is Now Open</p> <a href="https://redislabs.com/redisconf/" target="_blank" rel="noopener" class="btn">Submit Proposal</a>',
      backgroundColor: '#fff', // Defaults to `#fff`.
      textColor: '#000', // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
          'https://github.com/redis-developer/redis-developer/edit/master/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass', path.resolve(__dirname, 'plugins', 'gtm') 
  ],
};
