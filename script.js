const para =document.getElementsByClassName('para')
console.log(para)
const para2=document.querySelectorAll('.para')
console.log(para2)
let arr=[23,45,235,56,54]
arr.forEach((ele)=>console.log(ele))

const container=document.querySelector(".container")
container.innerHTML="<h1>This is a heading</h1>"
console.log(container)

const click=document.querySelector('#Click')
//const stop=document.querySelector('#stop')

function message (Event){
    console.log(Event.key)
    console.log("Button Clicked")
}
click.addEventListener('click',message)
//stop.addEventListener('click',()=>{
    //console.log("Stop Button clicked")
    //click.removeEventListener('click',message)
//})

