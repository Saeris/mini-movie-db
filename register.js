require(`@babel/register`)({
  ignore: [`api/**/__TEST__/*.spec.js`, `src/**/__TEST__/*.spec.js`, `lib/**/__TEST__/*.spec.js`],
  only: [`api/**/*.js`, `src/**/*.js`, `lib/**/*.js`]
})
require(`browser-env`)([`window`, `document`, `navigator`])
require(`@babel/polyfill`)
require(`isomorphic-fetch`)
