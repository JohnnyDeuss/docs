// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Zuplo Docs",
  tagline: "The programmable API Gateway",
  url: "https://zuplo.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://cdn.zuplo.com/www/favicon.png",
  organizationName: "zuplo", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({
            version,
            versionDocsDirPath,
            docPath,
            permalink,
            locale,
          }) => {
            if (docPath.startsWith("policies/")) {
              const policyId = docPath
                .replace("policies/", "")
                .replace(".md", "");
              return `https://github.com/zuplo/docs/tree/main/policies/${policyId}`;
            }
            return `https://github.com/zuplo/docs/tree/main/docs/${docPath}`;
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/zuplo/docs/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/docs/conferences/**"],
        },
        gtag: {
          trackingID: "G-FJ4E4W746T",
        },
      }),
    ],
  ],
  plugins: [
    [
      "docusaurus-plugin-segment",
      {
        apiKey: "uk7yI6FDWqqcOtpA4u3Dx1FcfskzMnBt",
        host: "sg.zuplo.com",
        ajsPath: "/a/v1/uk7yI6FDWqqcOtpA4u3Dx1FcfskzMnBt/index.js",
        useHostForBundles: true,
        load: {
          integrations: {
            "Segment.io": { apiHost: "sg.zuplo.com/v1" },
          },
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "https://cdn.zuplo.com/static/social/img-twitter-header.jpg",
      navbar: {
        logo: {
          alt: "Zuplo",
          src: "https://cdn.zuplo.com/static/logos/logo.svg",
          href: "https://zuplo.com",
          target: "_self",
        },
        items: [
          {
            to: "/docs",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://portal.zuplo.com",
            label: "Sign In",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Company",
            items: [
              {
                label: "About Us",
                href: "https://zuplo.com/about",
              },
              {
                label: "Pricing",
                href: "https://zuplo.com/pricing",
              },
              {
                label: "Careers",
                href: "https://zuplo.com/careers",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/W36Ddfcd",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/zuplo",
              },
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/zuplo",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/zuplo",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zuplo, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
