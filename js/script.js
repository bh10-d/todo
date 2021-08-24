let input = document.querySelector("#work");
let btnadd = document.querySelector("#submit");
let list = document.querySelector(".todo_list");
// let ellist = document.querySelector(".todo_list li");


// btnadd.addEventListener("click",()=>{
//     let txt = input.value;
//     let edit = '<input type="text">'
//     edit = document.createElement("input");
//     var li = document.createElement("li");
//     let span = document.createElement("span");
//     span = '<span onclick="deletel(id);"><i class="fas fa-trash"></i></span>';
//     li.innerHTML = `<li class="todo">${txt}${span}</li>`;
//     list.insertBefore(li,list.childNodes[0]);
//     input.value = '';
//     var el = '';
//     li.addEventListener("click",()=>{
//         el = li.innerText;
//         // document.getElementById('work').value = el;
//         document.replaceChild(edit,li);
//         console.log(el);
//     })
// })
var arr = [];
var i = 0;
btnadd.addEventListener("click",()=>{
    let txt ={
        id: i,//Math.floor(Math.random()*100)
        value: input.value
    }
    arr.push(txt);
    let span = document.createElement("span");
    span = `<span onclick="deletask(${i});"><i class="fas fa-trash"></i></span>`
    let li = document.createElement("li");
    li.innerHTML = `<li class="todo">${txt.value}${span}</li>`;
    list.insertBefore(li,list.childNodes[0]);
    console.log(arr)
    i++;
})

function deletask(id){
    var hieu = arr.map(a=>{
        return {
            id: a.id,
            data: a.value
        };
    }).filter(user=>{
        console.log(user.id)
        return user.id != id;
        // console.log('delete sucess')
    })
    console.log(hieu)
}