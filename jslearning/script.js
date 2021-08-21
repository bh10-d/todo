// for(var i = 0; i<3 ; i++){
//     setTimeout(()=>console.log(i),300);
// }

// for(let i = 0; i<3; i++){
//     setTimeout(()=>console.log(i),300);
// }


// normal function - declaration function
function showLoading(){
    console.log("Declaration Loading...");
}

// normal function - Expression function
let showLoading2 = function(){
    console.log("Expression Loading...");
}

showLoading(); // duoc hoisting
showLoading2(); // k duoc hoisting 

// object
// them proto cho object
// cach 1:
var emailkey = "email";

var myInfo = {
    // proto k phai la function duoc goi la property
    name: 'abc',
    age: 123,
    address: 'asdqwdas',
    [emailkey]: 'mail@gmail',
    // proto la mot function duoc goi la method
    // getName:function(){
    //     return this.name;
    // }
    getName: ()=>{
        return this.name;
    }
};
// myInfo.email = 'mail';
console.log(myInfo);
console.log(myInfo.email);
// de chay 1 function thi phai su dung toan tu call 
// toan tu call ky hieu la ()