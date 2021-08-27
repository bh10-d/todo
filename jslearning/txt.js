let input = document.querySelector("#work");
let btnadd = document.querySelector("#submit");
let btnup = document.querySelector("#submitupdate");
let list = document.querySelector(".todo_list");
let delall = document.querySelector("#deleteAll");
let tasks = document.getElementById("count");
let update = document.getElementsByClassName("update");

var arr = [];
var i = 0;

btnadd.addEventListener("click",()=>{
    
    if(input.value!==""){
        let txt ={
            id: i,//Math.floor(Math.random()*100)
            value: input.value
        }
        arr.push(txt);
        show();
        i++;
        console.log("co phan tu rong")
    }
    
    
})

function show(){
    
    let textli = '';
    for (const index of arr) {
        // if(index.value!==''){
        // }
        textli+=`<li class="todo" onclick="updatetask(${index.id});">${index.value}<span onclick="deletask(${index.id});"><i class="fas fa-trash"></i></span></li>`;
    }
    list.innerHTML = textli;
    input.value = '';
    console.log(arr)
    alltasks();
}

function updatetask(id){
    let task = '';
    // let getupdate = '';
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].id === id){
            input.value = arr[i].value;
            btnadd.style.display = 'none';
            btnup.style.display = 'block';
            btnup.addEventListener('click',()=>{
                arr[i].value = input.value;
                console.log(input.value);
                input.value = '';
                show();
                btnup.style.display = 'none';
                btnadd.style.display = 'block';
            })
            

            // task = `<li class="update" name="uptask" style="display: block;"><input type="text" value="${arr[i].value}"><span type="submit" onclick="up(${id});"><i class="fas fa-pen"></i></span></li>`;
            // getupdate = update.value;
            // console.log('li=>task: '+task);
            // console.log('data update: '+getupdate);
            // arr[i].value = input.value;
            // list.innerHTML = task;
        }
        
    }
    // console.log(arr[id].value);
    // btnadd.addEventListener("click",()=>{
    //     show();
    // })
    // let task = `<li class="update" style="display: block;"><input type="text" value="${arr[id].value}"><span onclick="up(${id});"><i class="fas fa-pen"></i></span></li>`;
    // show();
    console.log(id);
    return arr;
}
function up(id) {
    let getupdate = '';
    getupdate = update.value;
    for(let i=0; i<arr.length; i++) {
        if(arr[i].id === id) {
            arr[i].value = getupdate;
        }
    }
    console.log('data update: '+getupdate);
    console.log('success '+id);
    show();
}
// up.addEventListener("click",()=>{
//     console.log('sucess')
// })

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

function alltasks(){
    let count = 0;
    for (let i = 0; i <arr.length;i++) {
        count++;
    }
    tasks.innerHTML = count;
};

delall.addEventListener("click",()=>{
    arr = [];
    show();
})
