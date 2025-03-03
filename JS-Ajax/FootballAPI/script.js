loadFootballTable();

function loadFootballTable() {
    fetch("https://api.openligadb.de/getbltable/bl1/2024")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        let html = "<div id='table'>";

        for (let i = 0; i < json.length; i++) {
            html += `<div data-teamId="${json[i].teamInfoId}">${json[i].teamName}</div>`;
        }
        html += "</div>";
        document.getElementById("table").innerHTML = html;
  
      });
  }

document.getElementById("table").addEventListener("click", function(event) {
    let selectTeamId = event.target.getAttribute("data-teamId");
    console.log("selectedTeamId", selectTeamId);
    getNextMatchForTeam(selectTeamId);  
});

function getNextMatchForTeam(teamId) {
  const url = `https://api.openligadb.de/getnextmatchbyleagueteam/4741/${teamId}`
  console.log(url);
  
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log("inside fetch match")
        console.log(json);
        let html = "<div id='nextMatch'>";
        html += `<div>${json.matchDateTime}</div>`;
        html += `</div><img width="30px" src="${json.team1.teamIconUrl}"/>${json.team1.teamName} vs. ${json.team2.teamName} <img width="30px" src="${json.team2.teamIconUrl}"/></div>`;
        html += "</div>";

        document.getElementById("nextMatch").innerHTML = html;
      });  
}