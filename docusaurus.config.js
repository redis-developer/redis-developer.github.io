module.exports = {
  title: 'Redis Developer',
  tagline: 'The Home of Redis Developer',
  url: 'https://developer.redislabs.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'redis-developer', // Usually your GitHub org/user name.
  projectName: 'redis-developer', // Usually your repo name.
  themeConfig: {
    navbar: {
      style: 'dark',
      title: null,
      logo: {
        alt: 'Redis Developer',
        src: 'img/logo-1.png',
      },
      hideOnScroll: true,
      items: [
        {
          to: '/create/cloud',
          activeBasePath: 'docs',
          label: 'Get started',
          position: 'right',
        },
        {
          href: '#',
          label: 'Resources',
          position: 'right',
        },
        {
          href: 'https://redis.io/commands',
          label: 'Command Reference',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Redis Developer',
        src: 'img/logo-2.png',
      },
      links: [
        {
          title: 'Get Started',
          items: [
            {
              label: 'Create Database',
              to: '/create',
            },
            {
              label: 'Develop',
              to: '/#languages',
            },
            {
              label: 'Explore your data',
              to: '/explore',
            },
            {
              label: 'Best Practices',
              to: 'https://redislabs.com/redis-best-practices/introduction/',
            },
            // {
            //   label: 'Tutorials',
            //   to: '#',
            // },
            // {
            //   label: 'Samples & Demos',
            //   to: '#',
            // },
            // {
            //   label: 'Add Superpowers to Redis',
            //   to: '#',
            // },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Community',
              href: 'https://redislabs.com/community',
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
              href: '/tools',
            },
            {
              label: 'Guides',
              href: '/guides',
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
      disableSwitch: false,
    },
    announcementBar: {
      id: 'redisconf20201cfp', // Any value that will identify this message.
      content: '<p class="text">RedisConf 2021 - The Call for Paper is Open, Submit your Proposal</p> <a href="https://redislabs.com/redisconf/" target="_blank" rel="nofollow noopener" class="btn">Learn more</a>',
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
  plugins: ['docusaurus-plugin-sass'],
};
