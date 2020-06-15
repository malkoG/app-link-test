const repoNameURIPrefix =
  process.env.NODE_ENV === 'production' ? '/your-repo-name' : '';

module.exports = {
  assetPrefix: repoNameURIPrefix,
  env: {
    linkPrefix: repoNameURIPrefix,
  },
  generateBuildId: async () => 'current',
};