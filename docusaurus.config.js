// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hướng dẫn sử dụng',
  tagline: 'Tài liệu hướng dẫn Mkmate, triển khai tập trung SAAS',
  url: 'https://mkmate.osd.vn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/mkmate-favi.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'osdvn', // Usually your GitHub org/user name.
  projectName: 'mkmate-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["vi"],
        // ```
      },
    ],
    require.resolve('docusaurus-plugin-image-zoom')
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/osdvn/mkmate-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/osdvn/mkmate-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Docs',
        logo: {
          alt: 'Mkmate',
          src: '//asset.osd.vn/mkmate.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Hướng dẫn sử dụng',
          },
          {to: '/blog/changelog', label: 'Changelog', position: 'left'},
          {to: '/blog/roadmap', label: 'Roadmap', position: 'left'},
          {
            href: 'https://osd.vn',
            label: 'OSD.VN',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Sản phẩm Mkmate',
            items: [
              {
                label: 'Tài liệu hướng dẫn',
                to: '/docs/intro',
              },
              {
                label: 'Changelog',
                to: '/blog/changelog',
              },
              {
                label: 'Roadmap',
                to: '/blog/roadmap',
              }
            ],
          },
          {
            title: 'Kênh hỗ trợ',
            items: [
              {
                label: 'Zalo',
                href: 'https://zalo.me/osd.vn',
              },
              {
                label: 'Báo lỗi & đề xuất tính năng',
                to: 'https://github.com/osdvn/mkmate-docs/issues',
              },
              {
                label: 'Liên hệ',
                href: 'https://osd.vn/information/contact',
              },
            ],
          },
          {
            title: 'Khác',
            items: [
              {
                label: 'OSD.VN',
                to: 'https://osd.vn',
              },
              {
                label: 'Cộng đồng F1',
                href: 'https://f1.edu.vn',
              },
              {
                label: 'Bảng Tra',
                href: 'https://bangtra.com',
              }
            ],
          },
        ],
        copyright: `Copyright © 2012 - ${new Date().getFullYear()}, made with 🌶 by OSD.VN.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {}
      }
    }),
};

module.exports = config;
