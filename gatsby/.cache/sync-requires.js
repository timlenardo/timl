// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/tim/Documents/Personal/timl/gatsby/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/tim/Documents/Personal/timl/gatsby/.cache/dev-404-page.js")),
  "component---src-pages-apps-js": preferDefault(require("/Users/tim/Documents/Personal/timl/gatsby/src/pages/apps.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/tim/Documents/Personal/timl/gatsby/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/tim/Documents/Personal/timl/gatsby/src/pages/index.js")),
  "component---src-pages-speaking-js": preferDefault(require("/Users/tim/Documents/Personal/timl/gatsby/src/pages/speaking.js")),
  "component---src-pages-writing-js": preferDefault(require("/Users/tim/Documents/Personal/timl/gatsby/src/pages/writing.js"))
}

exports.json = {
  "layout-index.json": require("/Users/tim/Documents/Personal/timl/gatsby/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/tim/Documents/Personal/timl/gatsby/.cache/json/dev-404-page.json"),
  "apps.json": require("/Users/tim/Documents/Personal/timl/gatsby/.cache/json/apps.json"),
  "contact.json": require("/Users/tim/Documents/Personal/timl/gatsby/.cache/json/contact.json"),
  "index.json": require("/Users/tim/Documents/Personal/timl/gatsby/.cache/json/index.json"),
  "speaking.json": require("/Users/tim/Documents/Personal/timl/gatsby/.cache/json/speaking.json"),
  "writing.json": require("/Users/tim/Documents/Personal/timl/gatsby/.cache/json/writing.json")
}