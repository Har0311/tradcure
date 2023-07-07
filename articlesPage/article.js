const fetchNews = async (page, q) => {
  console.log("Fetching News...");
  var url =
    "https://newsapi.org/v2/everything?" +
    "q=" +
    q +
    "&from=2023&" +
    "pageSize=8&" +
    "language=en&" +
    "page=" +
    page +
    "&sortBy=relevancy&" +
    "apiKey=fa3f567c121f48feab69aaab3892b152";

  var req = new Request(url);

  let a = await fetch(req);
  let response = await a.json();
  console.log(JSON.stringify(response));

  let str = "";
  for (let item of response.articles) {
    str =
      str +
      `<div class="column">
      <div class="card">
        <img src="${item.urlToImage}" alt="..." />
        <div class="container">
          <p>${item.description.slice(0, 150) + ".."}</p>
          <a href="${
            item.url
          }" target="_blank" class="btn"><i class="fa-solid fa-arrow-up-right-from-square" style="color: #545454;"></i
      ></a>
        </div>
      </div>
    </div>`;
  }
  document.querySelector(".content").innerHTML = str;
};
fetchNews(1, "diseases");
