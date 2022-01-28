// Loader
var myVar;

function loaderFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("showLoader").style.display = "none";
  document.getElementById("showLaunch").style.display = "block";
}

// Launching fetch
const missionUpcomingUrl = "https://api.spacexdata.com/v3/launches/upcoming";

  // rocketAPI
    fetch(missionUpcomingUrl)
      .then(function (response) {
        return response.json()
      })
      .then(function (json) {
        missionListUrl(json)
      })
      .catch(function (error) {
        console.log(error)
      })


  // rocket function
function missionListUrl(json) {

  const missionUpcomingContainer = document.querySelector(".launching-api");
  let html = "";

  html += `
              <h1>${json[1].rocket.rocket_name}</h1>
              <p>${json[1].details}</P>
  `;
  missionUpcomingContainer.innerHTML = html;
}

//Countdown
var countMission = new Date("May 27, 2020 20:32:00").getTime();

var countDownMission = setInterval(function() {
  var missionTodayTime = new Date().getTime();
  var missionTimeToLaunch = countMission -  missionTodayTime;

  var missionDay = Math.floor(missionTimeToLaunch / (1000 * 60 * 60 * 24));
  var missionHours = Math.floor((missionTimeToLaunch % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var missionMinutes = Math.floor((missionTimeToLaunch % (1000 * 60 * 60)) / (1000 * 60));
  var missionSecounds = Math.floor((missionTimeToLaunch % (1000 * 60)) / 1000);

  document.getElementById("launchingCountDown").innerHTML = missionDay + " : " + missionHours + " : " + missionMinutes + " : " + missionSecounds + "  ";

  if(missionTimeToLaunch < 0) {
    clearInterval(countDownMission);
    document.getElementById("launchingCountDown").innerHTML = "ALREADY LAUNCHED";
  }
}, 1000);
