const pixrem = require('pixrem');
const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: `Tim Lenardo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `svgo`,
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          pixrem(),
          autoprefixer({
            browsers: ['last 2 versions']
          })
        ],
        precision: 8
      }
    }
  ],
}