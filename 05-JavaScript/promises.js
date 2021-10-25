let p=new Promise((resolve,reject)=>{
    let a=1+91
    if(a==2){
        resolve('Success')
    }
    else reject('Failed')
})
p.then((massage)=>
{
    console.log('This is in then  ->'+massage);
}).catch((massage)=>{
    console.log('This is in  catch -->'+massage)
})



// Promise: Best video on promises
// -resolve
// -reject
// -pending

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('Function: Your promise has been resolved')
                resolve();
            }
            else {
                console.log('Function: Your promise has not been resolved')
                reject('Sorry not fulfilled');
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("Harry: Thanks for resolving")
}).catch(function(error){
    console.log("Harry: Very bad bro. Reason: " + error)
})
