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
    fetch(`https://api.openligadb.de/getmatchdata/bl1/2024/${teamId}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        let html = "<div id='nextMatch'>";
        html += `<div>${json.matchDate}</div>`;

        html += `<div><img src="${json.team1.teamIconUrl}"/>${json.team1.teamName} vs. ${json.team2.teamName}</div>`;
        html += "</div>";
        document.getElementById("nextMatch").innerHTML = html;
      });  
}