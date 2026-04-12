document.getElementById("colour").style.color="White";
document.getElementById("colour").style.backgroundColor="Black";

document.getElementById("cli").addEventListener("click",function(){
    alert("Button has been clicked");
});

const form=document.getElementById("myform");
form.addEventListener('submit',function(event){
    event.preventDefault();
    alert("Form submitted");
});

document.addEventListener('keydown',function(event){
    alert("you pressed:"+ event.key)
});

function main(){
    console.log("Main start");
    helper();
    console.log("Main end")
}

function helper(){
    console.log("Helper is running")
}
main();

//=======Time======

setTimeout(()=>{
    console.log("After 4 seconds");
},4000);

setInterval(()=>{
    console.log("study");
},5000);

//======Callback function=======

function third(){
    console.log("Third script is running");
};
function second(){
    console.log("Second script is running");
    third();
};
function first(){
    console.log("first script is running");
    second();
};
console.log("Script started");
first();
console.log("Script ended");
