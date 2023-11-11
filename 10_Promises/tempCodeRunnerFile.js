const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=response.json() //converting string recieved to json 
    console.log(data);