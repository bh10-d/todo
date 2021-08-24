let input = document.querySelector("#work");
let btnadd = document.querySelector("#submit");
let list = document.querySelector(".todo_list");
// let ellist = document.querySelector(".todo_list li");

var arr = [];
var i = 0;

btnadd.addEventListener("click",()=>{
    let txt ={
        id: i,//Math.floor(Math.random()*100)
        value: input.value
    }
    arr.push(txt);
    show();
    i++;
})

function show(){
    let textli = '';
    for (const index of arr) {
        textli+=`<li class="todo">${index.value}<span onclick="deletask(${index.id});"><i class="fas fa-trash"></i></span></li>`;
    }
    list.innerHTML = textli;
    input.value = '';
    console.log(arr)
}

function deletask(id){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].id === id){
            arr.splice(i, 1);
        }
    }
    //    console.log(arr); 
    show();
    return arr;
}