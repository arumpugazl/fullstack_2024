//1.variables
//var,let,const-->refer to declaration.js

//2.Arrow function
//a)(withargument without return)
arrowfun = (studentsDepartment)=>{
    console.log(studentsDepartment);
}
arrowfun(["AIML","CSE","IT"]);

//b)(withargument withreturn)
arrowfunc = (studentsDepartment) =>{
    return studentsDepartment[0]
}
console.log(arrowfunc(['AIML,CSE,IT',"AIML","CSE","IT"]));

//c)(withoutargument withoutreturn)
arrowfun=()=>{
    console.log("Hello KEC");
}
arrowfun()

//d)(withoutargument with return)
arrowfun=()=>{
    return "Hi KEC";
}
console.log(arrowfun());

//3.Destructuring:
var marks=[90,80,70]
var[m1,m2]=marks
console.log(m1);
console.log(m2);

//4.Ternary operator:

a=10
res=(a%2==0)?"even":"odd"
console.log(res);

//5.spread operator


studentsList=["Tom","Cruise","Holland","Tony","Strak","Robert","Downey","Jr"]
newStudents=["Arum","Akshu","Bhuns","Shona","Madhi"]
combinedStudentsList=[...studentsList,...newStudents]
console.log(combinedStudentsList);


arr1=[10,20,30]
arr2=[40,50,60]
arr3=[...arr1,...arr2]
console.log(arr3);

//6.Rest operator
function restOp(...arr1){
    let sum=0;
    for(let i of arr1){
        sum+=i;
    }
    return sum;
}
console.log(restOp(1,2,3));

//

//7.Scope:
//a)
var b=19;
console.log(b);
{
    let b=10;
    console.log(b);
}
console.log(b);
//b)
var a=5;
const pi=3.14
console.log(pi);
console.log(a);
{
    a=10
    let b=10.5
    console.log(a);
    console.log(b);
}
console.log(a);

//8)Hoisting:
//a)var
console.log(a);
var a=10
console.log(a);
//o/p:
//undefined
//10

//b)const
console.log(a);
const a=10
console.log(a);
//o/p:
//console.log(a);
//^

//ReferenceError: Cannot access 'a' before initialization
    //at Object.<anonymous> (E:\Rampex_fullstack\Javascript\Hoisting.js:3:13)
    //at Module._compile (node:internal/modules/cjs/loader:1376:14)
    //at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    //at Module.load (node:internal/modules/cjs/loader:1207:32)
    //at Module._load (node:internal/modules/cjs/loader:1023:12)
    //at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    //at node:internal/main/run_main_module:28:49

//Node.js v20.11.1


//c)let
console.log(a);
let a=10;
console.log(a);

//o/p:
//console.log(a);
//^

//ReferenceError: Cannot access 'a' before initialization
    //at Object.<anonymous> (E:\Rampex_fullstack\Javascript\Hoisting.js:3:13)
    //at Module._compile (node:internal/modules/cjs/loader:1376:14)
    //at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    //at Module.load (node:internal/modules/cjs/loader:1207:32)
    //at Module._load (node:internal/modules/cjs/loader:1023:12)
    //at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    //at node:internal/main/run_main_module:28:49

//Node.js v20.11.1