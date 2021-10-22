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
    console.log('This is in the catch -->'+massage)
})