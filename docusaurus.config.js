const path = require('path')


module.exports = {
  title: 'Redis Developer Hub',
  tagline: 'The Home of Redis Developers',
  url: 'https://developer.redis.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'redis-developer', // Usually your GitHub org/user name.
  projectName: 'redis-developer', // Usually your repo name.
  customFields: {
    authors: {
      simon: {
        name: 'Simon Prickett',
        link: 'https://twitter.com/simon_prickett',
        title: 'Manager, Developer Advocacy at Redis',
        image: 'profile_pic_simon_prickett.jpg'
      },
      suze: {
        name: 'Suze Shardlow',
        link: 'https://twitter.com/SuzeShardlow',
        title: 'Developer Community Manager at Redis',
        image: 'profile_pic_suze_shardlow.jpg'
      },
      ajeet: {
        name: 'Ajeet Raina',
        link: 'https://twitter.com/ajeetsraina',
        title: 'Developer Growth Manager at Redis',
        image: 'profile_pic_ajeet_raina.jpg'
      },
      talon: {
        name: 'Talon Miller',
        link: 'https://www.linkedin.com/in/talon-miller-005054109/',
        title: 'Technical Product Marketing Manager at Redis',
        image: 'profile_pic_talon_miller.jpg'
      },
      alex: {
        name: 'Alex Mikhalev',
        link: 'https://www.linkedin.com/in/alexmikhalev',
        title: 'AI/ML Architect at Nationwide Building Society',
        image: 'profile_pic_alex_mikhalev.jpg'
      },
      will: {
        name: 'Will Johnston',
        link: 'https://twitter.com/wjohnsto',
        title: 'Developer Growth Manager at Redis',
        image: 'profile_pic_will_johnston.jpg'
      },
      rahul: {
        name: 'Rahul Chauhan',
        link: 'https://www.linkedin.com/in/rchauhan2/',
        title: 'Corporate Solution Architect at Redis',
        image: 'profile_pic_rahul_chauhan.jpg'
      },
      julian: {
        name: 'Julian Mateu',
        link: 'https://www.linkedin.com/in/julian-mateu',
        title: 'Sr. Backend Software Engineer at Globality, Inc.',
        image: 'profile_pic_julian_mateu.jpg'
      },
      andrew: {
        name: 'Andrew Brookins',
        link: 'https://twitter.com/abrookins',
        title: 'Curriculum Software Engineer',
        image: 'profile_pic_andrew_brookins.jpg'
      },
      manuel: {
        name: 'Manuel Aguirre',
        link: 'https://github.com/manuelaguirre',
        title: 'Backend Engineer at Baseline Spain',
        image: 'profile_pic_manuel_aguirre.jpg'
      },
      guyroyse: {
        name: 'Guy Royse',
        link: 'http://guy.dev',
        title: 'Developer Advocate at Redis',
        image: 'profile_pic_guy_royse.jpg'
      },
      christian: {
        name: 'Christian Mague',
        link: 'https://www.linkedin.com/in/chris-mague-35b1624/',
        title: 'Principal Field Engineer at Redis',
        image: 'profile_pic_christian_mague.jpg',
      },
      karan: {
        name: 'Karan Singh',
        link: 'https://www.linkedin.com/in/karansingh7',
        title: 'Senior Principal Architect & Developer Evangelist at Red Hat',
        image: 'profile_pic_karan_singh.png',
      },
      sumit: {
        name: 'Sumit Shatwara',
        link: 'https://www.linkedin.com/in/sumitshatwara',
        title: 'Solution Architect at Redis',
        image: 'profile_pic_sumit_shatwara.jpeg',
      },
      matthew: {
        name: 'Matthew Royal',
        link: 'https://www.linkedin.com/in/royalmatthew/',
        title: 'Consulting Engineer at Redis',
        image: 'profile_pic_matthew_royal.jpg',
      },
      steve: {
        name: 'Steve Lorello',
        link: 'https://twitter.com/slorello',
        title: '.NET Developer Advocate at Redis',
        image: 'profile_pic_steve_lorello.jpg'
      },
      bsb: {
        name: 'Brian Sam-Bodden',
        link: 'https://twitter.com/bsbodden',
        title: 'Developer Advocate at Redis',
        image: 'profile_pic_brian_sam-bodden.jpeg'
      }
    }
  },
  themeConfig: {
    // ...
    googleTagManager: {
      trackingID: 'GTM-W8Z6BLQ',
    },
    prism: {
      additionalLanguages: ['csharp', 'php', 'ruby', 'java', 'rust', 'elixir', 'groovy']

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
          to: '/create/rediscloud',
          activeBasePath: 'docs',
          label: 'Get started',
          position: 'right',
        },
        {
          href: 'https://launchpad.redis.com',
          label: 'Redis Launchpad',
          position: 'right',
        },
        {
          href: 'https://redis.com/try-free/',
          label: 'Try Free',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Redis logo',
        src: 'img/redis_logo_red_white_rgb.svg',
        href: 'https://redis.com/',
      },
      links: [
        {
          title: 'Get Started',
          items: [
            {
              label: 'Create Database',
              to: '/create/rediscloud',
            },
            {
              label: 'Develop',
              to: '/develop/',
            },
            {
              label: 'Explore your data',
              to: '/explore/redisinsight/',
            },
            {
              label: 'Best Practices',
              href: 'https://redis.com/redis-best-practices/introduction/',
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
              href: '/howtos/redisearch/',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Community',
              href: 'https://redis.com/community/',
            },
            {
              label: 'Redis University',
              href: 'https://university.redis.com',
            },
            {
              label: 'Command Reference',
              href: 'https://redis.io/commands',
            },
            {
              label: 'How-tos & tutorials',
              to: '/howtos',
            },
            //   label: 'Use Cases',
            //   href: 'https://redis.com/solutions',
            // },
          ],
        },
      ],
      copyright: `Copyright: © ${new Date().getFullYear()} Redis. All rights reserved. Redis and the cube logo are registered trademarks of Redis Ltd.`,
    },
    colorMode: {
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,
    },
    announcementBar: {
      id: 'redisconf20201cfp', // Any value that will identify this message.
      content: '<p class="text"> RedisDays Reg is open! Don’t miss our big announcements. </p> <a href="https://redis.com/redisdays/" target="_blank" rel="noopener" class="btn">Register Now</a>',
      //  content: '<p class="text"></p> <a href="https://redislabs.com/redisconf/" target="_blank" rel="noopener" class="btn"></a>',
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
          showLastUpdateTime: true,
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
