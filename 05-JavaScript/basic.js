tommy={
breed:"kutta",
dob:"23 oct",
color:"black"
}


// console.log(1);
// console.log(tommy.breed);

// for(property in tommy){
//     console.log(tommy[property]);
// }
// write the code and make the deep copy of the obj
var l=function (){
    console.log('this is function');
}

arr=[3,2,4,2,21];
function fun(a,b){
    return a>b;
}



setTimeout(() =>{
    console.log("HI");
    
}, 1000);

// setInterval(() => {console.log("This is  set interval")}, 2000);
// console.log("out of the setinterval");
// console.log("out of the setinterval");
// console.log("out of the setinterval");
// console.log("out of the setinterval");
// console.log("out of the setinterval");
// console.log("out of the setinterval");
// console.log("out of the setinterval");
// console.log("out of the setinterval");
// console.log("out of the setinterval");
// console.log("out of the setinterval");



function fun(){
var a=2;
function fun1(){
    var b=5;
    // a=5;// a global value will change to 5.
    // var a=51;  // var laganne se a value will be same 
    console.log("ander ki value");
    // console.log(a);
    // console.log(b);
}
console.log("Bahar ki value");
console.log(a);
fun1();
console.log(a);
// console.log(b); Error as b is not defined ReferenceError.
}
fun();
console.log('out');

setTimeout(() => {
  console.log("hello");
},0);   //First world and then hello bcz js engine will put the function in an array 
// which is then executed later 
// first in event loop it will check setTimeout  and put in event loop
// then "world " is executed after that eventloop will pickup setimeout
console.log("world");
console.log("bnhi");




// Single threded language -js

// AjaX-Asynch javascript Request-Sending or recieving the data request without refreshing the result.
// call this fun back when something is done
// when ceratin task is done.
/*
synch- making things happening back to back call
Asynch- Email no need to wait.

Promises-
var my_promise=new promise(....);  constructor pattern
commitment that will happen in future.

then() --called when resolved and catch is not called
catch()  then is skipped
resolved and reject is by default 2 fun with constructor
then  resolved
cath reject

*/ 

let p=new Promise((resolve,reject)=>{

});
