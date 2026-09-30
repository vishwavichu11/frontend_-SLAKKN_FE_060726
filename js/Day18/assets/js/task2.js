const myPromise = new Promise ((resolve,reject)=>{
    const success = true;

    if(success){
        resolve("Operation was successful!")
    }else{
        reject("Something wen Wrong")
    }
})

myPromise
.then((result) =>{
    console.log(result);
    
})
.catch((error)=>{
    console.error(error);
    
})
.finally(()=>{
    console.log("Completed");
    
})