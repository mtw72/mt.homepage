
// theGuardian API
const apiKey = "c85802ee-2822-49ba-a59d-4416f8fc1e9f";
const apiUrluk = `https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail&section=uk-news&page-size=12&api-key=${apiKey}`;
const apiUrlworld = `https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail&section=world&page-size=12&api-key=${apiKey}`;

// Retrieve the latest UK news articles from the Guardian API
fetch(apiUrluk)
    .then(response => response.json())
    .then(data => {
        const articles = data.response.results;
        const newsContainer = document.getElementById("uk-news-content");

        // Add each article as a card to the HTML container
        articles.forEach(article => {
            const card = document.createElement("div");
            card.className = "card";
            const thumbnail = document.createElement("img");
            thumbnail.className = "card-img";
            thumbnail.src = article.fields.thumbnail;
            thumbnail.alt = article.webTitle;
            const content = document.createElement("div");
            const title = document.createElement("h2");
            title.className = "card-title";
            const link = document.createElement("a");
            link.href = article.webUrl;
            link.target = "_blank"; // open link in new tab
            link.innerText = article.webTitle;
            title.appendChild(link);
            content.appendChild(title);
            card.appendChild(thumbnail);
            card.appendChild(content);
            newsContainer.appendChild(card);
        });
    })
    .catch(error => console.error(error));

// buttons to scroll left / right  (uk news container)
const ukNewsContent = document.getElementById("uk-news-content");
const ukScrollLeft = document.getElementById("uk-scrollLeft");
const ukScrollRight = document.getElementById("uk-scrollRight");

ukScrollLeft.addEventListener("click", function () {
    ukNewsContent.scrollLeft -= 815;
});

ukScrollRight.addEventListener("click", function () {
    ukNewsContent.scrollLeft += 815;
});

// mouse scroll from left to right (uk news container)
ukNewsContent.addEventListener('wheel', function (event) {
    event.preventDefault();
    ukNewsContent.scrollLeft += event.deltaY;
});


// Retrieve the latest WORLD news articles from the Guardian API
fetch(apiUrlworld)
    .then(response => response.json())
    .then(data => {
        const articles = data.response.results;
        const newsContainer = document.getElementById("world-news-content");

        // Add each article as a card to the HTML container
        articles.forEach(article => {
            const card = document.createElement("div");
            card.className = "card";
            const thumbnail = document.createElement("img");
            thumbnail.className = "card-img";
            thumbnail.src = article.fields.thumbnail;
            thumbnail.alt = article.webTitle;
            const content = document.createElement("div");
            const title = document.createElement("h2");
            title.className = "card-title";
            const link = document.createElement("a");
            link.href = article.webUrl;
            link.target = "_blank"; // open link in new tab
            link.innerText = article.webTitle;
            title.appendChild(link);
            content.appendChild(title);
            card.appendChild(thumbnail);
            card.appendChild(content);
            newsContainer.appendChild(card);
        });
    })
    .catch(error => console.error(error));

// buttons to scroll left / right  (world news container)
const worldNewsContent = document.getElementById("world-news-content");
const worldScrollLeft = document.getElementById("world-scrollLeft");
const worldScrollRight = document.getElementById("world-scrollRight");

worldScrollLeft.addEventListener("click", function () {
    worldNewsContent.scrollLeft -= 815;
});

worldScrollRight.addEventListener("click", function () {
    worldNewsContent.scrollLeft += 815;
});

// mouse scroll from left to right (world news container)
worldNewsContent.addEventListener('wheel', function (event) {
    event.preventDefault();
    worldNewsContent.scrollLeft += event.deltaY;
});