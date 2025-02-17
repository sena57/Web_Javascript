let todos =[
    {id: 1, title: 'putzen', completed: false},
    {id: 2, title: 'kochen', completed: false},
    {id: 3, title: 'einkaufen', completed: true}
];


let maxId = 4;


document.getElementById("input").addEventListener("change", function(){
    console.log(event.target.value);
    maxId++;
    todos.push({id: maxId, title: event.target.value, completed: false});
    printTask();
    event.target.value = "";
});
function printTask(){
    let html = "";
    todos.forEach(element => {
        html += "<div class='task' style=background-color">" + element.title + " - " + element.completed + "<div onclick='deleteTask'>Done</div><div>Delete</div></div>";
    });

    document.getElementById("todos").innerHTML = html;
}

function deleteTask(){
    let index = todos.findIndex(element => (
        if (element.id === id){
            return true;
        }
    )
}

function setIsDone(){
    todos.find(element => {
        let stlyke = element.completed?"green:":"none";
       if element.id ===id){
        return true;
       }
    }
}


printTask();