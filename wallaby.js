process.env.BABEL_ENV = `test`

module.exports = wallaby => ({
  files: [
    `jest.config.js`,
    `api/**/*.js`,
    `src/**/*.js`,
    `lib/**/*.js`,
    `!api/**/__TEST__/*.spec.js`,
    `!src/**/__TEST__/*.spec.js`,
    `!lib/**/__TEST__/*.spec.js`
  ],

  tests: [
    `api/**/__TEST__/*.spec.js`,
    `src/**/__TEST__/*.spec.js`,
    `lib/**/__TEST__/*.spec.js`
  ],

  testFramework: `jest`,

  env: {
    type: `node`,
    runner: `node`
  },

  debug: true,

  setup: () => {
    const jestConfig = require(`./jest.config`)
    wallaby.testFramework.configure(jestConfig)
    require(`esm`)
    require(`@babel/register`)
    require(`@babel/polyfill`)
    require(`isomorphic-fetch`)
  },

  compilers: {
    "api/**/*.js": wallaby.compilers.babel(),
    "src/**/*.js": wallaby.compilers.babel(),
    "lib/**/*.js": wallaby.compilers.babel()
  }
})
