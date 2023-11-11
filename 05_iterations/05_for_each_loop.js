const coding=["js","ruby","java","python","cpp"];

//for each loop->will be mostly used for array

// coding.forEach( function (val){
//     console.log(val)
// })
//in for each-> there exit a callback function
//callback function->no name of the function 
// //write function(name for iterting like i){
//     definition, whatever you would like to perform
// }

//variation
//you can also use arrow function
// coding.forEach((item)=>{ 
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);//you can also print the array like this 

//it not only have item , it also has index and complete array
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

//creating the array of object 
//Very import for database
const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"java",
        languageFileName:"java"
    }

]

myCoding.forEach((item)=>{
    //now item will reperesent each object
    console.log(item.languageFileName);
})