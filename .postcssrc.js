// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      browsers: ["Android >= 2.3", "iOS >= 4"], //, "ChromeAndroid > 1%"
      cascade: false  // 不美化输出 css
    },
    "postcss-px2rem": {
      baseDpr: 1,             // base device pixel ratio (default: 2)
      threeVersion: false,    // whether to generate @1x, @2x and @3x version (default: false)
      remVersion: true,       // whether to generate rem version (default: true)
      remUnit: 37.5,            // rem unit value (default: 75)
      remPrecision: 3         // rem precision (default: 6)
    }
  }
}
