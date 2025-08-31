module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['support/*.ts'],
    format: [
      '@cucumber/pretty-formatter',
      'html:cucumber-report.html',
      'json:cucumber-report.json'
    ],
    paths: ['features/*.feature'],
    parallel: 1,
    timeout: 30000
  }
}; 