//objects can declared in two ways, one as a literal and one as a constructor
//sigleton(-->using constructors):when object is declared as literal then singleton will not formed, when object created with constructor
//then singleton will form

// Object.create-->constructor method


//literal way of creating the objects

//How to decalare a symbol
const mySym=Symbol("key1")

const JsUser={
    name:"Hitesh",
    "full name":"Histesh Choudhary",
    //now after adding full name you can access full name field of name using dot operator
    //mySym:"mykey1",// this will work but not as symbol,this will be treated as string
    //to use it as symbol use square bracket
    //to acces it only square bracket will be used

    [mySym]:"mykey1",
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Mondays","Saturday"]
}

//Note:mostly we will using dot to access but in interview [] will be used
//To access the elements of the object
console.log(JsUser.name);
//other way of accessing the elements of the object is 
console.log(JsUser["name"]);

//why use [] method of accessing the elements
//to access the full name field of the name you must have to use [] 
console.log(JsUser["full name"]);

//accessing the symbol using []
console.log(JsUser[mySym]);

//to update the values of object
JsUser.email="hitesh@chatgpt.com"

//to prevent any item of the object from accepting any changes i.e to disable modification
//use Object.freeze(object name)
// Object.freeze(JsUser)
console.log(JsUser)
//now the object will not re-modification

//Object greeting
JsUser.greeting=function(){
    console.log("Hello Js user"); //to access the same object use this
}
console.log(JsUser); //Earlier greeting was not there but now greeting is added

//now greeting will be accessible in object JsUser
// console.log(JsUser.greeting); //result: fucntion is not executed a reference is returned [Function (anonymous)]
//Therefore to access function use ()
console.log(JsUser.greeting());

JsUser.greetingTwo=function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greetingTwo());