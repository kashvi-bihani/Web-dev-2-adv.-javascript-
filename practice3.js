const homepromise = new Promise((resolve, reject) => {
    console.log("i will finish this homework by tomorrow");

    setTimeout(()=>{
        const donehomework = true;

        if (donehomework){
        resolve("Homework is done");
        }else{
        reject("Homework is not done");
        }
   },1000);
});

console.log("Waiting for homework to finished");

console.log(homepromise);

