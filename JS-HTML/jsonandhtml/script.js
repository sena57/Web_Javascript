let data = [
    { firstname: 'Hans', lastname: Huber, points: 30 },
    { firstname: 'Lisa', lastname: Müller, points: 25 },
    { firstname: 'Max', lastname: Mustermann, points: 28 },
    { firstname: 'Sarah', lastname: Keller, points: 27 },
    { firstname: 'Anna', lastname: Schmidt, points: 32 },
];

function loadPeople() {
    let html = "";
    data.forEach(element => {
        html += "<div>" + element.firstname + " " + element.lastname + "</div>";
    });

    document.getElementById("content").innerHTML = html;
}

loadPeople();