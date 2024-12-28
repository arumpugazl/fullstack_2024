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