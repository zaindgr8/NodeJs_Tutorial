let a=20
let b=2

let waitingData=new Promise((res, rej)=>{
res(5)
}, 2000)

waitingData.then((data)=>{
console.log(a+data)
})

