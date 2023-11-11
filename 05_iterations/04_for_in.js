const myObj={
    js:'Javascript',
    cpp:'C++',
    rb:"Ruby",
    swift:"swift by apple"
}

//for in loop
for (const key in myObj){
    // console.log(key); //you will get the keys
    //to get the object
    console.log(myObj[key])
    console.log(`${key} shortcut if for ${myObj[key]} `);
}

// for in loop can also work for array
const programming=["js","rb","py","java","cpp"];
for (const key in programming){
    console.log(key)// here only keys will be printed(index will be printed);
    //to get the value
    console.log(programming[key]);
}

//for in print keys(index), only applied on iterable
//for of,forEach directly give the value

const map=new Map();
map.set('IN',"India") //to store the values
map.set('US',"India") // map store unique values
// console.log(map);
for(const key in map){
    console.log(key); // nothing will be printed as for in does not work for map for of work for map
}
