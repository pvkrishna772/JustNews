const apiKey = "82ed9a3e75a44d9eb2085fd9990e075a";
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click",()=>{
    const query = searchInput.value.trim();
    if(query === "") return;

    fetchSearchNews(query);
})
searchInput.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        const query = searchInput.value.trim();
        event.preventDefault();
        if(query === "") return;

        fetchSearchNews(query);
    }
})


const categories = ["sports", "technology", "business", "entertainment", "health", "science", "politics"];
const categoriesDiv = document.getElementById("categories");
categories.forEach(category=>{
    const btn = document.createElement("button");
    btn.innerText = category.charAt(0).toUpperCase()+category.slice(1);
    btn.className = "category-btn";
    btn.addEventListener("click",()=>fetchCategory(category));

    categoriesDiv.appendChild(btn);
});
function fetchTopHeadlines(){
const topheadlinesUrl  = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

fetch(topheadlinesUrl, {cache: "no-cache"})

.then(response=>response.json())
.then(
    data=>{
        displayArticles(data.articles);
      
    })

    .catch(error=>{
        console.log("error fetching news",error);    });
    }
   fetchTopHeadlines();
    
    
    function displayArticles(articles){

         const newsDiv = document.getElementById("news");
         newsDiv.innerHTML = "";  
          if(!articles|| articles.length === 0){
            newsDiv.innerHTML = "<p>No articles found.</p>";
            return;
           }
        articles.forEach(article=>{
            const newsItem = document.createElement("div");
            newsItem.className = "news-item";

            const headline = document.createElement("h2");
            headline.innerText = article.title;

            const date = new Date(article.publishedAt);
            const formattedDate = date.toLocaleString()
            const published = document.createElement("p");
            published.className = "published-date";
            published.innerText = `published : ${formattedDate}`;

            const readMore = document.createElement("a");
            readMore.href = article.url;
            readMore.target = "_blank";
            readMore.className = "read-more";
            readMore.innerText = `source: (${article.source.name}), read more...`;
            
            newsItem.appendChild(headline);
            newsItem.appendChild(published);
            newsItem.appendChild(readMore);
        
            newsDiv.appendChild(newsItem);
           // newsDiv.appendChild(document.createElement("br"));
        });
    }
    function fetchCategory(category){
        const url = `https://newsapi.org/v2/everything?q=${category}&sortBy=publishedAt&apiKey=${apiKey}`;
        fetch(url)
        .then(response=>response.json())
        .then(data=>
             displayArticles(data.articles))
         .catch(error=>
                console.log("error fetching news",error));
    }
    function fetchSearchNews(query){
         const searchUrl = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${apiKey}`;
         fetch(searchUrl)
         .then(response=>response.json())
           .then(data=>{
                displayArticles(data.articles);

            });

           
    }
