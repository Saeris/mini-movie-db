module.exports = {
  coverageDirectory: `./coverage/`,
  collectCoverage: true,
  snapshotSerializers: [`preact-render-spy/snapshot`],
  transform: {
    "^.+\\.jsx?$": `babel-jest`
  },
  verbose: true
}
