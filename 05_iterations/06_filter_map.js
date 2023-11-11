// const coding=["js","ruby","java","python","cpp"];
// const values=coding.forEach((items)=>{
//     console.log(items);
// })
// console.log(values);// for each does not return values therefore it will print undefined

// const myNums=[1,2,3,4,5,6,7,8,9,10];
// //*****CALLBACK FUNCTION****************** */
// //callback function ( () => {} )

//FILTER
// // const newNums=myNums.filter((num)=>num>4);

// //or you can write is as
// const newNums=myNums.filter((num)=>{
//     return num>4 
// })
// console.log(newNums); // now [] array will be printed as 
// if remembered using {} you have to write return and in case of () no need to write return

//if i will write return then it will work


//DOING THE SAME THING USING FOREACH
// console.log(newNums)
// const newNumsforeach=[]
// //call back function use kar lenge usme hr ek number ko num bol denge
// myNums.forEach((num)=>{
//     if(num>4){
//         newNumsforeach.push(num);
//     }
// })
// console.log(newNumsforeach)





const myNum=[1,2,3,4,5,6,7,8,9,10];
// const newNum=myNum.filter((item)=>{
//     return item+10 // not possible with filter
// })
//TO INCREMENT THE EACH VALUE WITH 10 USE INDEX NOT THE ITEM
// myNum.forEach((item,index)=>{
//     myNum[index]=myNum[index]+10;
// })

//DOING THE SAME WITH MAP

const newNums=myNum.map((num)=>num+10);
console.log(newNums)

//$$$$$$$$$************$$$$$$$$$$$$$********IMPORTANT*******$$$$$********$$$$$$$$$$$
//Always remember in the case of callback function( () =>{} ) if you are using () then no need to return
// But if you are using {} then you must have to use return otherwise you will get undefined as the result
//THIS RULE IS APPLICABLE EVERYWHERE NO MATTER YOU ARE APPLYING FILTER, MAP , FOR EACH, IT WILL BE APPLIED EVERYWHERE
//UNIVERSAL RULE++


//Chaining
//ek ke ander ek ex map ke sath map
//first map ka result second map mein pass ho jayega ==>> this is called chaining
const newNumchain=myNum.map((num)=>num*10).map((num)=>num+1);
console.log(newNumchain);
//You can apply map as much in dep(th you want
const depthchain=myNum.map((num)=>(num*10)).map((num)=>num+1).filter((num)=>num<20);
console.log(depthchain)



//Reduce-->mostly used in shopping cart
//accumulator concept
const nums=[1,2,3];
//reduce is also a call back function
const myTotal=nums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
    return acc+currval
},0)
console.log(myTotal);

//converting it to arrow functions
const totalarrow=nums.reduce((acc,curr)=>acc+curr,0);
//this will also add all the elements in the array
console.log(totalarrow);