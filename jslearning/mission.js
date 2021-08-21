/*
    - Phân biệt pass by value and pass by reference.
    - Giải thích về hoisting
    - Closure
    - higher order function
    - functional programming
    - oop
    - curry function
    - phân biệt normal function and arrow function
*/


/* HOISTING
    hoisting là khi code js được chạy nó sẽ duyệt qua một lượt
    trước sau đó đưa các khai báo biến lên đầu và khởi tạo nó.
*/


/* Curry function
 // example
//////////////////////////////////
// function discount(discount) {
//     return (price) => {
//         return price * discount;
//     }
// }
// const tenPercentDiscount = discount(0.1);
// tenPercentDiscount(500); // $50
// const twentyPercentDiscount = discount(0.2);
// twentyPercentDiscount(500); // 100
// // $500 - $100 = $400
// twentyPercentDiscount(5000); // 1000
// // $5,000 - $1,000 = $4,000
// twentyPercentDiscount(1000000); // 200000
// // $1,000,000 - $200,000 = $600,000

// // alert(twentyPercentDiscount(1000000));
// console.log(twentyPercentDiscount(1000000));

////////////////////////////////////////////////////////////////
// function curry(f) { // curry(f) does the currying transform
//     return function(a) {
//       return function(b) {
//         return f(a, b);
//       };
//     };
//   }
//   // usage
//   function sum(a, b) {
//     return a + b;
//   }
//   let curriedSum = curry(sum);
//   alert( curriedSum(1)(2) ); // 3

    // ly thuyet: currying là kỹ thuật đưa 1 function với multiple arguments thành function với single argument duy nhất.
        nói cách khác khi một function lấy tất cả các argument cùng 1 lúc thì bây h hàm thứ nhất sẽ trả về hàm thứ 2 và hàm thứ 2 sẽ trả về hàm thứ 3 ... cho đến hết
*/


// const movies = [
//     {'id':1,'name':"Now you see me"},
//     {'id':2,'name':"Now you see me 2"},
//     {'id':3,'name':'penthouse 1'},
//     {'id':4,'name':'penthouse 2'},
//     {'id':5,'name':'penthouse 3'}
// ]

// // console.log(movies.map((movie) => movie.id));



// var get = property => object => object[property];
// var getId = get('id')
// var getName = get('name')
// console.log(movies.map(getId));
// console.log(movies.map(getName))


// CLOSURE: là một chức năng có quyền truy cập vào phạm vi cha ngay cả sau khi scope đã đóng
/*
    closure là một hàm có thể ghi nhớ nơi nó được tạo và có thể truy cập biến bên ngoài phạm vi của nó
    ** biến được tham chiếu trong closure sẽ không bị xoá khỏi bộ nhớ khi hàm cha thực thi xong
*/

// var obj1 = [];
// var obj2 = [];
// var obj3 = obj1;


// var json1 = JSON.stringify(obj1);
// var json2 = JSON.stringify(obj2);

// console.log(json1===json2);

// OBJECT COMPARATION:  k thể so sánh 2 object bởi vì object là loại tham chiếu nên k thể sử dụng toán tử === và ==;

//DESTRUCTURING: là một cú pháp cho phép gán các thuộc tính của một object hoặc một array. điều này giúp giảm đáng kể các dòng mã càn thiết để thao tác dữ liệu trong cấu trúc này. có 2 loại destrcturing là destructuring objects và destructuring arrays


//PASS BY VALUES AND PASS BY REFERENCE
/*
--> PASS BY VALUES: các giá trị nguyên thuỷ trong js đều được truyền theo giá trị
--> PASS BY REFERENCE: khi tạo 1 đối tượng thì sẽ được cung cấp 1 tham chiếu đến đối tượng đó. Nếu 2 biến đều giữ cùng 1 tham chiếu thì việc thay đổi đối tượng thì sẽ thay đổi ở cả 2 biến.
*/


// THREE DOT VALUES
/*

Khi three dots (…) ở cuối các function parameters, đó là "Rest operator" và tập hợp phần còn lại của danh sách các đối số thành một mảng 
Khi three dots (…) xảy ra trong một function call hoặc tương tự, nó được gọi là "Spread operator" và mở rộng một mảng thành một list.

*/


//THIS: this sẽ trỏ tới chính object gọi hàm đó

//higher orderfuntion:        là hàm nhận 1 hàm khác làm đối số hoặc trả vè 1 hàm dưới dạng đầu ra