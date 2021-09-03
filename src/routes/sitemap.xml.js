export async function get() {
  const buildDate = new Date();

  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml'
  };

  const body = `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  >
    <url>
      <loc>https://agora.space/</loc>
      <lastmod>${buildDate}</lastmod>
      <priority>1.00</priority>
    </url>
    <url>
      <loc>https://agora.space/explorer</loc>
      <lastmod>${buildDate}</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://agora.space/tools</loc>
      <lastmod>${buildDate}</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://agora.space/about</loc>
      <lastmod>${buildDate}</lastmod>
      <priority>0.80</priority>
    </url>
  </urlset>`;

  return {
    headers,
    body
  };
}
