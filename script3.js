var a = 678
let b = 567

console.log(a)
console.log(b)

function print(){
    let c=43
    console.log(c)
    console.log("inside fn")
}

print()

function first(){
    second()
}

function second(){
    third()
}

function third(){
    console.trace()
}
first()

setTimeout(() => {
    alert("after 3 sec")
}, 3*1000);

//setInterval(()=>{
//    console.log("after 3 sec")
//},1000)

const timerId =setInterval(()=>{
    console.log("After 3 sec")
},1000)
console.log(timerId)
setTimeout(()=>{
    clearInterval(timerId)
},10*1000)

let count=0;
const timerid=setInterval(() => {
    count++;
    console.log("1 second passed",count);
    if(count===10){
        clearInterval(timerid);
        console.log("interval cleared");
    }
}, 1000);

const name=document.querySelector("#name")
const btn=document.querySelector(".btn")
const list=document.querySelector(".list")

btn.addEventListener('click',()=>{
    const li=document.createElement('li')
    const dlt=document.createElement('button')
    dlt.innerText="Delete";
    li.innerText=name.value;
    list.appendChild(li)
    li.appendChild(dlt)
    name.value=""
})

function orderFood(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Food Ordered")
            res("Food is being prepared")
        },2000)
    })
}

function prepareFood(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Food Prepared")
            res()
        },2000)
    })
}

function deliverFood(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Food Delivered")
            res()
        },2000)
    })
}


async function order(){
    const data=await orderFood()
    console.log(data)
    await prepareFood()
    await deliverFood()
}

order()

orderFood().then((data)=>{
    return prepareFood()
}) .then((data)=>{
    return deliverFood()
}) .then((data)=>{
}).catch((err)=>{
    console.log("Something went wrong")
})

console.log("First Line")
try{
    let sample=234
    console.log("Line after sample")
}catch(e){
    console.log(e)
}
console.log("Last Line")

async function getdata(){
    const response=await fetch("")
    const data=await response.json()
    data.product.forEach((product)=> {
        console.log(product.title)
    });
}
getdata()


localStorage.setItem("name","Alex")
localStorage.setItem("age",45)

console.log(localStorage.getItem("name"))
console.log(localStorage.getItem("age"))

localStorage.removeItem("name")
console.log(localStorage.getItem("name"))

sessionStorage.setItem("name","Alex")
sessionStorage.setItem("age","45")

console.log(sessionStorage.getItem("name"))
console.log(sessionStorage.getItem("age"))

document.cookie="name=Alex;expires=Wed, 25 Feb 2026 23:59:59 GMT"
document.cookie="age=45;expires=Wed, 25 Feb 2026 23:59:59 GMT"

console.log(document.cookie)

function generate(){
   // yield 1
   // yield 2
   // yield 3
    let index=25017343
    while(true){
        yield index
        index++
    }
} 

const gen=generate()
console.log(gen)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

function add(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

const first=add(1)
console.log(first)
const second=first(2)
console.log(second)
console.log(second(3))

console.log(add(1)(2)(3))
console.log(add(1,2,3))

const form=document.querySelector("form")
form.addEventListener("submit",async(event)=>{
    event.preventDefault()
    const name=form.elements["name"].value
    const email=form.elements["email"].value
    console.log("Name:", name);
    console.log(searchedcity);
})
function showhistory(){
    const history=JSON.parse=(localstorage.getItem("searchhistory"))
    history.forEach((city)=>{
        weatherhistory
    })
}


