//for of --> used on iterables->arrays,map of=>jis pr iterate kr sakhte hai
//for in->used on objects{key:value}

const arr=[1,2,3,4,5];
for(const num of arr){
    console.log(num);
}
const greetings="Hello World"
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
} 

//Maps
const map=new Map();
map.set('IN',"India") //to store the values
map.set('US',"India") // map store unique values
console.log(map);

//to get the key values of the map using for of loop
for(const [key,values] of map){
    console.log(key,':-',values);
}

const myobj={
    'game1':'NFS',
    'game2':'Spiderman'
}
//for objects for in loop will work
