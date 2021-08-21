let input = document.querySelector("#work");
let btnadd = document.querySelector("#submit");
let list = document.querySelector(".todo_list");
// let ellist = document.querySelector(".todo_list li");


btnadd.addEventListener("click",()=>{
    let txt = input.value;
    let li = document.createElement("li");
    let span = document.createElement("span");
    span = '<span><i class="fas fa-trash"></i></span>';
    li.innerHTML = `<li>${txt}${span}</li>`;
    list.insertBefore(li,list.childNodes[0]);
    input.value = '';
    li.addEventListener("click",()=>{
        list.removeChild(li);
    })
})
