export default async function sitemap() {
    const res = await fetch('https://vidnaija.com.ng:8443/get');
    const result = await res.json();
  
    const post = result.map((pos) => ({
      url: `https://vidnaija.com.ng/showcase/${pos._id}/1`,
      lastModified: new Date(pos.updatedAt),
    }));
  
    return [
      {
        url: 'https://vidnaija.com.ng',
        lastModified: new Date(),
        priority: 1,
      },
      {
        url: 'https://vidnaija.com.ng/display/asianseries/1/1',
        lastModified: new Date(),
      },
      {
        url: 'https://vidnaija.com.ng/display/anime/1/1',
        lastModified: new Date(),
      },
      {
        url: 'https://vidnaija.com.ng/display/tvshows/1/1',
        lastModified: new Date(),
      },
      {
        url: 'https://vidnaija.com.ng/latest',
        lastModified: new Date(),
      },
      {
        url: 'https://vidnaija.com.ng/display/movies/1/1',
        lastModified: new Date(),
      },
      {
        url: 'https://vidnaija.com.ng/display/action/1/1',
        lastModified: new Date(),
      },
      {
        url: 'https://vidnaija.com.ng/display/adventure/1/1',
        lastModified: new Date(),
      },
      {
        url: 'https://vidnaija.com.ng/display/animation/1/1',
        lastModified: new Date(),
      },
      {
        url: 'https://vidnaija.com.ng/display/comedy/1/1',
        lastModified: new Date(),
      },
      {
        url: 'https://vidnaija.com.ng/display/crime/1/1',
        lastModified: new Date(),
      },
      {
        url: 'https://vidnaija.com.ng/display/drama/1/1',
        lastModified: new Date(),
      },
      {
        url: 'https://vidnaija.com.ng/display/family/1/1',
        lastModified: new Date(),
      },
      {
        url: 'https://vidnaija.com.ng/display/history/1/1',
        lastModified: new Date(),
      },
      {
        url: 'https://vidnaija.com.ng/display/horror/1/1',
        lastModified: new Date(),
      },
      {
        url: 'https://vidnaija.com.ng/display/musical/1/1',
        lastModified: new Date(),
      },
      {
        url: 'https://vidnaija.com.ng/display/romance/1/1',
        lastModified: new Date(),
      },
      {
        url: 'https://vidnaija.com.ng/display/scifi/1/1',
        lastModified: new Date(),
      },
      {
        url: 'https://vidnaija.com.ng/display/sport/1/1',
        lastModified: new Date(),
      },
      {
        url: 'https://vidnaija.com.ng/display/thriler/1/1',
        lastModified: new Date(),
      },
      {
        url: 'https://vidnaija.com.ng/display/fantasy/1/1',
        lastModified: new Date(),
      },
      ...post,
    ];
  }
  