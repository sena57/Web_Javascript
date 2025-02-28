alert("funktioniert")

document.getElementById("btnLoad").addEventListener("click", function () {
  loadData();
});

function loadData() {
  fetch("https://5e391b0baad2220014962337.mockapi.io/swp/todos")
    .then((response) => response.json())
    .then((json) => {
      let html = [];

      json.forEach((todo) => {
        html.push(
          "<div><div>" +
            todo.title +
            "</div><img width='50px' src='" +
            todo.image +
            "?id=" +
            Math.random() +
            " '/></div>"
        );
      });
      document.getElementById("content").innerHTML = html.join("");
    });
}