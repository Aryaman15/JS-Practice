const user={
    username:"hitesh",
    price:999,
    //To refer to the current context use this keyword
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)//printing the current context with this ->btayega current variables value kya hai
    }

}
user.welcomeMessage();
user.username="Aryaman";
user.welcomeMessage();//now the context is change

console.log(this); //{} will be presented as we are in the node environment
//but in browser a window object will be present as in browswer window object is a global object

function chai(){
    let username="hitesh"
    console.log(this); //mutliple values will be printed
    console.log(this.username)// will give undefined-> // as "this" context only work inside the object not in function
}

// const chaii=function(){
//     let username="hitesh"
//     console.log(this); //mutliple values will be printed
//     console.log(this.username)// will give undefined-> // as "this" context only work inside the object not in function
// }

// console.log(chaii);
// //chaii will also return [Function:chaii]

//ARROW FUNCTION IS NOTHING BUT A CALLBACK FUNCTION/////

//creating the arrow function
//->remove the function keyword and add arrow after the parenthesis
const chaii=()=>{
    let username="hitesh"
    console.log(this); //{} will be printed
}
chaii();

// const addTrow=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTrow(2,4));


//second way of using the arrow function is to use the implicit return
//remove the parenthesis
//and remove the return
//if writing in {} then return likhna padega
// if writing in () then return keyword nhi likhna padega


// const addTwo=(num1,num2)=>{return num1+num2}
//or
const addTwo=(num1,num2)=>(num1+num2);

// how to return the object
//you must have to wrap the object in curly brackets and then bracket
const add=(num1,num2)=>({username:"histesh"})
console.log(add(1,2))