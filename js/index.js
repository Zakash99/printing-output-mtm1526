//task 1
let a = 3;
let b = 5;
let c;

// alert( "description of alerted_value: " + alerted_value );
let print = `
let a = 3;
let b = 5;
let c;
------------
a + b = ${a + b}
a - b = ${a - b}
a * b = ${a * b}
a / b = ${a / b}
a % b = ${a % b}
(a += b); ${a += b}
(a -= b); ${a -= b}
(a *= b); ${a *= b}
(a /= b); ${a /= b}
(a %= b); ${a %= b}
(a == b); ${a == b}
(a != b); ${a != b}
(a > b); ${a > b}
(a < b); ${a < b}
(!a && !c); ${!a && !b}
(!a || !c); ${!a || !c}
`;

console.log(print);
/*
a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/

//task 2

let first_name= "Zakaria";
let last_name= "Salhi";
let email= "salh0014@algonquinlive.com";
let output= `My name is ${first_name} ${last_name}. You can contact me at ${email}.`;

console.log(output);