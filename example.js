// const promise = new Promise((resolve, reject) => {
//   console.log("Inside Promise");
//   let isPresent = true;
//   if (isPresent) {
//     resolve("User Present");
//   } else {
//     reject("User Not Present");
//   }
// });

// console.log("outside promise");

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("In finally block");
//   });

// setInterval(()=>{
//    console.log("Inside setInterval")
// },1000)

// setTimeout(() => {
//   console.log("Inside Settimeout");
// }, 2000);



// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//          resolve("Resolve After 3 seconds");
//     },3000);
// })

// promise1.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// })



// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Quick")
//     },0)
// })
// const promise2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Quick")
//     },500)
// })
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//          resolve("foo")
//     },1000)
// })
// const promise=[promise1,promise2,promise3];

// Promise.any(promise).then((value)=>{
//     console.log(value)
// }).catch((err)=>{
//      console.log(err) 
// })

const reverseStr=(str)=>{
    const newStr=str.split(" ")
    let reverseStr="";
    newStr.forEach((str)=>{
      reverseStr+=str.split('').reverse().join('')+" ";
    })
    return reverseStr;
}

console.log(reverseStr("good morning satyam"));




