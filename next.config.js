const repoNameURIPrefix =
  process.env.NODE_ENV === 'production' ? '/app-link-test' : '';

module.exports = {
  assetPrefix: repoNameURIPrefix,
  env: {
    linkPrefix: repoNameURIPrefix,
  },
  generateBuildId: async () => 'current',
};