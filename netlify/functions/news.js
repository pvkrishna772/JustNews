export async function handler(event) {
  const API_KEY = process.env.NEWS_API_KEY;
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  const category = event.queryStringParameters?.category;
  const search = event.queryStringParameters?.search;

  if(category){
    url = `https://newsapi.org/v2/everything?q=${category}&sortBy=publishedAt&apiKey=${API_KEY}`;
  }

  if(search){
    url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(search)}&sortBy=publishedAt&apiKey=${API_KEY}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: "Failed to fetch news" }) };
  }
}
