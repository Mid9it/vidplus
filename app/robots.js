export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/adhome', '/adminbaby','/addmovies','/addseries','/edit','/upcoming','/dmca','/download','/notification','/passforget','/profile','/activate']
      },
      sitemap: 'https://vidnaija.com.ng/sitemap.xml',
    }
  }