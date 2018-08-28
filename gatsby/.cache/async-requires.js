// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-apps-js": require("gatsby-module-loader?name=component---src-pages-apps-js!/Users/tim/Documents/Personal/timl/gatsby/src/pages/apps.js"),
  "component---src-pages-contact-js": require("gatsby-module-loader?name=component---src-pages-contact-js!/Users/tim/Documents/Personal/timl/gatsby/src/pages/contact.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/tim/Documents/Personal/timl/gatsby/src/pages/index.js"),
  "component---src-pages-speaking-js": require("gatsby-module-loader?name=component---src-pages-speaking-js!/Users/tim/Documents/Personal/timl/gatsby/src/pages/speaking.js"),
  "component---src-pages-writing-js": require("gatsby-module-loader?name=component---src-pages-writing-js!/Users/tim/Documents/Personal/timl/gatsby/src/pages/writing.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/tim/Documents/Personal/timl/gatsby/.cache/json/layout-index.json"),
  "apps.json": require("gatsby-module-loader?name=path---apps!/Users/tim/Documents/Personal/timl/gatsby/.cache/json/apps.json"),
  "contact.json": require("gatsby-module-loader?name=path---contact!/Users/tim/Documents/Personal/timl/gatsby/.cache/json/contact.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/tim/Documents/Personal/timl/gatsby/.cache/json/index.json"),
  "speaking.json": require("gatsby-module-loader?name=path---speaking!/Users/tim/Documents/Personal/timl/gatsby/.cache/json/speaking.json"),
  "writing.json": require("gatsby-module-loader?name=path---writing!/Users/tim/Documents/Personal/timl/gatsby/.cache/json/writing.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/tim/Documents/Personal/timl/gatsby/.cache/layouts/index.js")
}