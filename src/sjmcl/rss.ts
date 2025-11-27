export default async function(rssUrl: string) {
    // const rss = await sjmcl(rssUrl);
    return new Response(rssUrl, { status: 200 });
}