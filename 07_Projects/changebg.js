//generate a random color
const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
// Math.random()->to generate randome number between 0-1 if *10 then 0-10
//console.log(Math.random()*16); if not want to include zero then add 1 
// console.log(Math.floor(Math.random()*16));
let intervalId;
const startChangingColor=function(){
    //covering edgecases
    if(!intervalId){
    intervalId=setInterval(changeBgcolor,1000)
    }
    function changeBgcolor(){
        document.body.style.backgroundColor=randomColor();
    }
};

const stopChangingColor=function(){
    clearInterval(intervalId)
    intervalId=null;
}

// const stopChangingColor=function(){}
document.querySelector('#start').addEventListener('click',startChangingColor);

document.querySelector('#end').addEventListener('click',stopChangingColor);

