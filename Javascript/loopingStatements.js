//Looping statements:

array = [10,20,30,[40.4,50.6],"a","KEC",true]
console.log(array);

//for... in loop

for(var a in array)
{
    //console.log(a);
    console.log("Element present in index",a,"is",array[a]);
}


// for...of loop

for(var b of array)
{
    console.log(b);
}

// for Each;

array.forEach((element,index) => {
    console.log("Element is",element,"and the index is",index);
});

array.forEach((index,element) => {
    console.log("Index is",index,"and the element is",element);
});

//Example 2

objType1={
    "firstName":"Arum",
    "lastName":"pugazl",
    "age":20
}
//Object.entries(objType1).forEach((Key,values)=>{
  //   console.log(entries,objType1[key]);
//});

//for (const [key,value] of objType1) {
  //  console.log(key,value);
//}

for(key in objType1){
    value=objType1[key]
    console.log(key,value)
}