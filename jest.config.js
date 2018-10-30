module.exports = {
  coverageDirectory: `./coverage/`,
  collectCoverage: true,
  snapshotSerializers: [`preact-render-spy/snapshot`],
  transform: {
    "^.+\\.jsx?$": `babel-jest`
  },
  moduleFileExtensions: [`js`, `jsx`],
  moduleDirectories: [`node_modules`],
  moduleNameMapper: {
    "\\.(css|less|scss)$": `identity-obj-proxy`,
    "^./styles$": `identity-obj-proxy`,
    "^preact$": `<rootDir>/node_modules/preact/dist/preact.min.js`,
    "^react$": `preact-compat`,
    "^react-dom$": `preact-compat`,
    "^create-react-class$": `preact-compat/lib/create-react-class`,
    "^react-addons-css-transition-group$": `preact-css-transition-group`
  },
  verbose: true
}
