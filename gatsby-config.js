require(`dotenv`).config();

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;
module.exports = {
  siteMetadata: {
    siteTitle: `Lia Blog`,
    siteTitleAlt: `Lia Blog`,
    siteHeadline: `Lia Blog`,
    siteUrl: `https://imjhua.vercel.app/`,
    siteDescription: `Lia's Tech Blog`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        formatString: 'YYYY.MM.DD',
        navigation: [
          // {
          //   title: `Blog`,
          //   slug: `/blog`,
          // },
          {
            title: `Posts`,
            slug: `/tags/tech`,
          },
          {
            title: `Remind`,
            slug: `/remind`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Daily`,
            slug: `/daily`,
          },
        ],
        externalLinks: [
          {
            name: `Resume`,
            url: `/tags/resume`,
          },
          {
            name: `Login`,
            url: `/login`,
          },
        ],
      },
    },
    {
        resolve: `gatsby-transformer-remark`,
        options: {
          tableOfContents: {
            heading: null,
            maxDepth: 6,
          },
          plugins: [
            {
              resolve: `gatsby-remark-autolink-headers`,
              options: {
                icon: false,
              },
            },
            `gatsby-remark-prismjs`
            // {
            //   resolve: `gatsby-remark-prismjs`,
            //   options: {
            //     classPrefix: "language-",
            //     inlineCodeMarker: null,
            //     aliases: {},
            //     showLineNumbers: true,
            //     noInlineHighlight: false,
            //   },
            // }
          ],
        },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.gstatic.com`],
        web: [
          {
            name: `IBM Plex Sans`,
            file: `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lia blog`,
        short_name: `Lia`,
        description: `Lia's Tech blog`,
        start_url: `/`,
        background_color: `currentColor`,
        display: `fullscreen`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
    {
      resolve: `gatsby-plugin-global-styles`,
      options: {
        pathToConfigModule: `src/styles/GlobalStyleComponent`,
        props: {
          theme: `src/styles/theme`,
          other: {
            resume: false,
          },
        },
      },
    },
  ].filter(Boolean),
};
