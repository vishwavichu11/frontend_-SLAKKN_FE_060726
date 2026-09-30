 const myPromise = new Promise ((resolve,reject)=>{
   let Success=true;
    
   if(Success){
    resolve("Data successfully fetched")

   }else{
    reject("Server error,can not fetch data")
   }
 })

 myPromise
   .then((result)=>{
    console.log("Success:",result);
    
   })
   .catch((error)=>{
    console.error("Error:",error);
    
   })
   .finally(()=>{
    console.log(" completion tasks");
    
   })