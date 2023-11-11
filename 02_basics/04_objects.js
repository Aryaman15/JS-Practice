// const tinderUser=new Object()//-->singleton object
// console.log(tinderUser)// empty object {} will be declared

//you can also declare directly but that not be non singleton

//[OBJECT---->>>>>> KEYS:VALUES]
const tinderUser= { } // but now this will be non singleton

tinderUser.id="123abc" //-->>these three lines are softcore method of adding data fields(keys:values) in the object
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{ //this is also an object
        userfullname:{ // this is also an object-->>> object ke ander object nesting of object is allowed
            firstname:"hitesh",
            lastname:"chodhary"
        }
    }
}

//to acess it
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname)

//optional chaining (?)
//imagin fulluname does not exit, there exist a doubt on that therefore use ? for that field
//ex console.log(regularUser.fullname?.userfullname.firstname)

//object concatenation
const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
// const obj3={obj1,obj2}//this will result in nested object
//therefore to avoid it use Object.assign() //store it as it return the object result
const obj3=Object.assign({},obj1,obj2);
//{} is optional parameter but it is recommended to be passed in 
console.log(obj3);

//you can also use spread operator to concat the object
const obj4={...obj1,...obj2};
console.log(obj4);
//spread will be used mostly times


//multiple objects inside the array->USE MAP

//Object.keys/values(ObjectName)
//to get all the keys of the object
console.log(Object.keys(tinderUser));
//its output will be an array---->>>>VERY IMPORTANT
//VALUES ALSO CAN BE EXTRACTED
console.log(Object.values(tinderUser));

//Objects.entries(Object Name)
console.log(Object.entries(tinderUser)); //Result will be a nested array

//to check whether its property exist in the Object  or not 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//destructuring possible of array and object also
const course ={
    cousename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
// console.log(course.courseInstructor)
// const {courseInstructor}= course
// console.log(courseInstructor);

//you can also assign some other name to courseInstructor
const{courseInstructor:inst}=course
console.log(inst);

{
    //this is json that api return
}

// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }
//json formatter=>to study the api 