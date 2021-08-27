// let input = document.querySelector("#work");
// let btnadd = document.querySelector("#submit");
// let list = document.querySelector(".todo_list");
// // let ellist = document.querySelector(".todo_list li");


// // btnadd.addEventListener("click",()=>{
// //     let txt = input.value;
// //     let edit = '<input type="text">'
// //     edit = document.createElement("input");
// //     var li = document.createElement("li");
// //     let span = document.createElement("span");
// //     span = '<span onclick="deletel(id);"><i class="fas fa-trash"></i></span>';
// //     li.innerHTML = <li class="todo">${txt}${span}</li>;
// //     list.insertBefore(li,list.childNodes[0]);
// //     input.value = '';
// //     var el = '';
// //     li.addEventListener("click",()=>{
// //         el = li.innerText;
// //         // document.getElementById('work').value = el;
// //         document.replaceChild(edit,li);
// //         console.log(el);
// //     })
// // })
// const arr = [];
// var i = 0;
//  const deletask = (id) => { 
//     var i = 0;
//     while (i < arr.length) {
//       if (arr[i].id === id) {
//             arr.splice(i, 1);
//             list.childNodes[i].remove();
//       } else {
//         ++i;
//       }
//     }
//     console.log(arr)
//     return arr;
// };
// btnadd.addEventListener("click",()=>{
//     let txt ={
//         id: i,//Math.floor(Math.random()*100)
//         value: input.value
//     }
//     arr.push(txt);
//     let span = document.createElement("span");
//     span = `<span onclick="deletask(${i});"><i class="fas fa-trash"></i></span>`
//     let li = document.createElement("li");
//     li.innerHTML = `<p class="todo">${txt.value}${span}</p>`;
//     list.insertBefore(li,list.childNodes[i]);
//     console.log('i '+ i)
//     console.log
//     i++;
// })