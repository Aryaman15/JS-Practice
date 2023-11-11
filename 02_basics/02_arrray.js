const marvelheros=["thor","IronMan","spiderman"];
const dcheros=["superman","flash","batman"];
//marvelheros.push(dcheros); //this will result in nested list

// console.log(marvelheros);
// console.log(marvelheros[3][1]);

//concat
let myArr=marvelheros.concat(dcheros); //concat return a new resulting array therefore store it in a variable
console.log(myArr);

//spread operator(...)
const allheroes=[...marvelheros,...dcheros];
console.log(allheroes);

//Arrayname .flat(array)
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const simplifyarray=another_array.flat(Infinity); //this will spread out all the elements present in the array, you must have to provide the depth in place of Infinity
//depth is how much nested list you want to it to make it flat
console.log(simplifyarray);

console.log(Array.isArray("histesh"));
//converting it to array
console.log(Array.from("histest"));
console.log(Array.from({name:"histest"}))//will give empty array as either keys ka array ya values ka array


//you can also create array from the set of variables-->using Array.of
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));