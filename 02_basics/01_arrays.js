const myArr=[1,2,3,4,5,6,7];

//js array are re-sizable, heterogeneous

console.log(myArr[0]); //Accessing the array elements

//Array while creating the copy create shallow copy
// Shallow copy(Call By Reference): are the property who share the same reference point->jo bhi change karoge wo original array mein bhi change hoga
//Deep copy(Call by Value): Don't share the same references i.e changes will not reflect back , a copy will be created

//2nd way of declaring the array
const arr=new Array(1,2,3,4,567,8,9,10);
//Array also has prototype access 

myArr.push(6);
console.log(myArr);
myArr.pop(); //last value will be removed;
console.log(myArr);

myArr.unshift(9); // it will be started at the start of the array and rest elements will be shifted one step forward(not optimized when 1000elements are present in the arrays-->time taking)
console.log(myArr);


myArr.shift(); //delete from the beginning
console.log(myArr);

//True False methos
// myArr.includes(9);
// myArr.indexOf(3);

const newArr=myArr.join();
console.log( typeof newArr); //join has joined the array but converted the values to string

//slice, splice
console.log("A",myArr); // A will be printed then myArr will be printed

const myn1=myArr.slice(1,3); //3 will not be included
console.log(myn1);

const myn2=myArr.splice(1,3);
console.log(myn2);

//What is the difference between slice and splice? ---->>>VERY IMP
//Dont answer splice mein last index include ho jata hai
//splice myArr se both included index ke elements ko remove kardeta hai 

//you can see below
console.log(myArr);

