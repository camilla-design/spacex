//contact info
const infoUrl = "https://api.spacexdata.com/v3/info";
const historyUrl = "https://api.spacexdata.com/v3/history";

//Contact fetch
fetch(infoUrl)
  .then(function (response) {
    return response.json();
  })
  .then (function (json) {
    infoApi(json);
  })
  .catch(function (error) {
    console.log(error);
  })

//History fetch
fetch(historyUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    historyApi(json);
  })
  .catch(function (error) {
    console.log(error);
  })

//Contact function
function infoApi(json) {

  const infoApiContainer = document.querySelector(".info-api-container");
  let html = "";

  html += `
          <div class="info-text-container">
            <h3>The founder of ${json.name} is ${json.founder}</h3>
            <p>The company was founded in ${json.founded} and has ${json.employees} employees</p>
            <p>${json.summary}</p>
          </div>
  `;

  infoApiContainer.innerHTML = html;
}

//History function
function historyApi(json) {

  const historyApiContainer = document.querySelector(".history-api-container");
  let html = "";

  html += `
        <div class="history-wrapper">
          <div class="falcon-history-text-container">
            <h3>${json[0].title}</h3>
            <p>${json[0].details}</p>
            <h4>Read the article: <a href="${json[0].links.article}">Falcon news</a></h4>
          </div>
          <div class="contract-history-text-container">
            <h3>${json[1].title}</h3>
            <p>${json[1].details}</p>
            <h4>Read the article: <a href="${json[1].links.article}">Awards from NASA</a></h4>
          </div>
          <div class="dragon-history-text-container">
            <h3>${json[4].title}</h3>
            <p>${json[4].details}</p>
            <h4>Read the article: <a href="${json[4].links.article}">Dragon returns</a></h4>
          </div>
          </div>
  `;
  historyApiContainer.innerHTML = html;
}
