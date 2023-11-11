// fetch('https://google.com').then().catch().finally()

// to get the new instance use "new" 
//Creation of promises
//promise take a callback
// const promiseOne= new Promise(function(resolve,reject){
//     //Do an async task
//     //DB Calls.cryptography,nextwork
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve(); //use this to consume the then part of the promise   
//     },1000)
// })

//in fact there is no need to hold the promise inside a variable we can create
// directly also

//consuming the promise
// promiseOne.then(function(){
//     console.log("Promise consumed");
// }); //resolve connection is with then
// //here resolve and then is  not connected
// //therefore to connect it to then use resolve() in promise()

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Task 2");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Asyn 2 are register")
// })

const promiseThree= new Promise(function(resolve,reject){
     setTimeout(function(){
        resolve({username:"Chai",email:"chai@example.com"})
     },1000)
})

promiseThree.then(function(user){
    console.log(user); //parameter passes in resolve will be visibled here
})

const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"hitesh",password:"123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log('This promise is either resolved or rejected'))

//use finally->jo hona to wo ho gya // will be always executed 
//use then for further chaining 

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"javascript",password:"123"})
        }
        else{
            reject('ERROR: Js went wrong')
        }
    },1000)
})


//async ->wait karta hai kuch time fir aage badhta hai
//await return value , ya to wo value .then se ayegi ya fir catch se

//Promise is an object
async function consumePromiseFive(){
    try{
    const response=await promiseFive
    console.log(response); 
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive();

//async await could not handle error
//to handle the error comming in response use try and catch 

//so you can use anyone .then . catch one 
//or the try and catch approach

//using api request

//use fetch to access the url
//fetch take the url

//as a network request so it will take time therefore use await
async function getAllUsers(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response);
    // const data=response.json() //converting string recieved to json 
    //this conversion also take time so you have to await this also

    //using await in conversion also
    const data=await response.json()
    console.log(data);
    }
    catch(error){
        console.log("E:",error);
    }
}
// getAllUsers();


//AWAIT universal rule: use await wherever you feel like ki isko time lagega
//iske execution ka wait karna chahiye so in that place use await

//Writing in .then .catch method 
fetch('https://jsonplaceholder.typicode.com/users')
.then((resp)=>{
    return resp.json() //resp is just a variable name this will return to lower then
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error)); //using catch to catch the errors
 
//here no need to use await as each block will only
// start after completion of one


//API code is comming first but async code setime code is coming after that, but it should come above api output
//why?
//Ans: as fetch go in a special queue which is called micro task queue which is a fast queue or priority queue
//that's why it is always implemented first

//what if promise got 404 error code, will it be store in reponse or reject
//it will be stored in response 
