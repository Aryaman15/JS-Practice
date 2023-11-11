//to create the function 

//function functionname(){
    // functionbody
// }

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName();
sayMyName// nothing will be shown 

//In js no need to specify the type of parameter
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
// console.log(result)//undefined

function addTwoNumbers(number1,number2){
    let result=number1+number2;
    return result;
}
const result=addTwoNumbers(5,6);
console.log(result);

//you can also assign the default value in the function header
function loginUserMessage(username="defualt value"){
    if(username==undefined //or you can write !username
    ){
        console.log("Please enter a username")
        return;
    }
    return `${username} Just Logged in`
}
let returnedvalue=loginUserMessage("Aryaman");
console.log(returnedvalue);

//if nothing is passed as the argument then undefined will come
console.log(loginUserMessage());

//in js we assume "" is a false value

//When you don't know how many arguments user will pass
//use rest operator ... (this is also called spread operator)
function calculateCartPrice(...num1){
    return num1; //now this will return an array
}
console.log(calculateCartPrice(200,300,400));


//how to pass object to the function
const user={
    username:"hitesh",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
//you can also pass the array directly
handleObject({
    username:"sam",
    price:929
})

//passing array to the functoo
const myNewArray=[200,300,100,600]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray))

//closure:ander ka functions bhar ke variables ko access kar pata hai
//i.e child function parent function ke variable ko access kar sakhta hai
