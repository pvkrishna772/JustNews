export async function handler(event) {
  const apiKey = process.env.apiKey;
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  const category = event.queryStringParameters?.category;
  const search = event.queryStringParameters?.search;

  if(category){
    url = `https://newsapi.org/v2/everything?q=${category}&sortBy=publishedAt&apiKey=${apiKey}`;
  }

  if(search){
    url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(search)}&sortBy=publishedAt&apiKey=${apiKey}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: "Failed to fetch news" }) };
  }
}
