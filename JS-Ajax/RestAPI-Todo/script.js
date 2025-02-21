document.getElementById("btnLoad").addEventListener("click", function() {
    loadData();
});

function loadData() {
    fetch("https://67b84594699a8a7baef35dc4.mockapi.io/todo")
     .then(response => response.json())
     .then(json => {
        console.log(json);

        /* let html = "";
         json.forEach(todo => {
            html.push("<div><div>" + 
                todo.title + 
                "</div><img src='" + 
                todo.responsibility + 
                "?id=" +
                 Math.random() +
                "' /></div></div>");
         });
         document.getElementById("content").innerHTML = html.join;*/
     })
}