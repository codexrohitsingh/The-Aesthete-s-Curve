module.exports = {
  siteUrl: 'https://the-aesthete-curve.vercel.app/',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin']
      },
    ],
    additionalSitemaps: [
      'https://the-aesthete-curve.vercel.app/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority for specific pages
    let priority = 0.7;
    
    if (path === '/') {
      priority = 1.0;
    } else if (path === '/products') {
      priority = 0.9;
    } else if (path === '/about') {
      priority = 0.8;
    } else if (path.startsWith('/painting')) {
      priority = 0.8;
    }
    
    // Return the transformed config
    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
