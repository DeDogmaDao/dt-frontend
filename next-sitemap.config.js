/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://dedogmadao.com",
  changefreq: 'weekly',
  priority: 1,
  exclude: ['/gameboard', '/gallery',"/underconstruction","/web3"],
};
