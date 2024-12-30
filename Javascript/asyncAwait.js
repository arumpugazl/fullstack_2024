//Async and Await:

//example1
async function funName(){
    return "Hello";
}


funNames=async()=>{
    return "KEC";
}

console.log(funName())  
console.log(funNames())

//o/p:Promise {'Hello'}
//Promise {'KEC'}

//example2
async function funName(){
    console.log("Hello");
}


funNames=async()=>{
    console.log("KEC");
}

//o/p: Hello
//       KEC


//example3
async function funName(){
    setTimeout(()=>{
        return "Hello";
    },1000)
}
funNames=async()=>{
    setTimeout(()=>{

        return "KEC";
    },1000)
}

console.log(funName())  
console.log(funNames())

//o/p:Promise {'undefined'}
//    Promise {'undefined'}

//To avoid promise:
async function funName(){
    setTimeout(()=>{
        console.log("Hello");
    },5000)
    console.log(await "Hello")
}
funNames=async()=>{
    setTimeout(()=>{

        console.log("KEC") ;
    },4000)
    console.log(await "KEC")
}

funName()
funNames()

//With return:
async function funName(){
    setTimeout(()=>{
        console.log("Hello");
    },2000)
    return (await "Hello")
}
funNames=async()=>{
    setTimeout(()=>{

        console.log("KEC") ;
    },1000)
    return (await "KEC")
}

console.log( funName()) 
console.log(funNames())

//with then:
async function funName(){
    setTimeout(()=>{
        console.log("Hello");
    },2000)
    return ("Hello")
}
funNames=async()=>{
    setTimeout(()=>{

        console.log("KEC") ;
    },1000)
    return ("KEC")
}

funName().then((a)=>
{
    console.log(a);
}) 
console.log(funNames())
