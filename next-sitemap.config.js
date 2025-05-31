module.exports = {
  siteUrl: 'https://kedardarshan.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 10000,
  outDir: 'public',
  additionalPaths: async (config) => [
    await config.transform(config, '/contact-us'),
  ],
}
