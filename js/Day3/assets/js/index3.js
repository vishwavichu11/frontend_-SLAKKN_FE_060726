let age=22
let hashid=true

let checkone= age>=18 && hashid
console.log(" Age is 18 or above AND has ID:",checkone)

let checktwo= age<18 || hashid
console.log(" Age is below 18 OR has ID:",checktwo)

let checkthree = !hashid
console.log("NOT hasId:",checkthree)