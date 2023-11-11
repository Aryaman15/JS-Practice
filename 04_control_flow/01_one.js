// //control flow==> if else
// //1.if
// if(condition){
//     //this condition is true then iternal code will be executed
// }

// comparison operators: <, >, <=, >=, ==, !=, ===(strict equality), !==

// const score=200
// if(score>100){
//     const power="fly"
//     console.log( `User Power:${power}`);
// }
// console.log( `User Power:${power}`);// here power will not be accessible but if you use var power="fly"
// // then it will be accessed but don't use var

// const balance=10000
// if(balance >500)console.log("test"), //implicit scope =>used for single line code, but can write multiple under the samae
// console.log("test2") //scope by using "," but not recommended

// if(balance<500){
//     console.log("Less than 500");
// }
// else if(balance<900){
//     console.log("Less than 750");
// }
// else{
//     console.log("Less than 1200")
// }

// //switch(key){
//     case value:
//         break;
//     default:
//         break;
// }
const month=3;
switch (month) {
    case 1://=this value will be compared to key which is month here:
        //string can also be compared
        console.log("January")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;
    case 5:
        console.log("may")
        break;    
    default:
        console.log("default case match")
        break; // if not break then all code will be executed except default
}

const userEmail="histesh.ai"
if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Don't have user Email");
}

// truthy and falsy values
//falsy values=>values those will be treated as false
false,0,-0,BigInt,0n,"",null,undefined,NaN
//resut truthy value=>values that will be treated as true

//truthy values (string ke ander jo bhi wo truthy value)
// "0", 'false',"false"," ",[] ,{},function(){}

//to check the array
// if(userEmail.length==0){
//     console.log("Array is Empty");
// }

//how to check if the objects is empty or not
const myobj={}
if(Object.keys(myobj).length==0){
    console.log("Object is empty");
}

//false==0 ==> ans=true
//false==' '==>true
//0==' ' ==>true


//Nullish Coalescing Operator(??):null undefined
let val1;
// val1=5 ?? 10 s

val1=null??10 //??->check the safety of null and undefined

val1=undefined ?? 15
console.log(val1);

val2=null ?? 10??20;
console.log(val2);

//Terniary Operator
// condition? true:false

const iceTeaPrice=100
iceTeaPrice>=80? console.log("Less than 80"):console.log("More than 80")