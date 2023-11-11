// Immediatelty Invoked Function Expressions (IIFE)
//we dont want ki hmara function koi global variable use karke pollute ho
//to avoid the pollution of global variable we use iife
// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai();
//converting it to iife
(function chai(){
    console.log(`DB CONNECTED`);
})();
//now no global variable will be able to pollute it

// ()==>writing function definition,()=>for execution

//NAMED IIFE
(function aurcode(){
    console.log(`DB CONNECTED TWO`);
})();//==> this will give error as compiler does not know where to end the context
// therefore apply ; on upper iife function to end its context
//now after applying the ; on upper iife function it will work

//converting it to arrow functoon

//UNNAMED IIFE
( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('Aryaman');

//Note:
//While writing two iffe don't forget to add ";" at the end of 1st one iffe to stop its context 
// and allow the second iife to execute