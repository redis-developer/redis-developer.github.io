module.exports = {
  title: 'Redis Developer',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'redis', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      style: 'dark',
      title: null,
      logo: {
        alt: 'Redis Developer',
        src: 'img/logo-1.png',
      },
      items: [
        {
          to: 'docs/',
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
          href: '#',
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
              to: '#',
            },
            {
              label: 'Develop',
              to: '#',
            },
            {
              label: 'Explore your data',
              to: '#',
            },
            {
              label: 'Best Practices',
              to: '#',
            },
            {
              label: 'Tutorials',
              to: '#',
            },
            {
              label: 'Samples & Demos',
              to: '#',
            },
            {
              label: 'Add Superpowers to Redis',
              to: '#',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Community',
              href: '#',
            },
            {
              label: 'Redis University Command Reference Tools',
              href: '#',
            },
            {
              label: 'Use Cases',
              href: '#',
            },
          ],
        },
      ],
      copyright: `Copyright: © ${new Date().getFullYear()} Redis Labs. Redis and the cube logo are registered trademarks of Redis Labs Ltd.`,
    },
    algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},
    },
    colorMode: {
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    announcementBar: {
      id: 'sample', // Any value that will identify this message.
      content: 'Optional Announcement bar lorem ipsum dolor sit amet consectetur <a href="#">Learn more</a>',
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
          sidebarPath: require.resolve('./sidebars.js'),
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
